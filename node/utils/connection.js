
const program = require('commander');
const WebSocket = require('ws');
const { NUM_LEDS } = require('./constants');

let _connected = false;
let frame;
let socket;

const connect = () => {
    program
        .version('1.0.0')
        .allowUnknownOption()
        .option('-h, --host [host]', 'Specify hostname of fadecandy server [localhost]', 'localhost')
        .option('-p, --port [port]', 'Specify port of fadecandy server [7890]', '7890')
        .parse(process.argv);

    const { host, port } = program;

    return new Promise((resolve, reject) => {
        // Connect to a Fadecandy server
        console.log('Connecting...');
        socket = new WebSocket(`ws://${host}:${port}`);
        socket.on('open', () => {
            console.log('Connected!');
            _connected = true;
            resolve();
        });

        socket.on('error', (e) => {
            console.error(e.toString());
            _connected = false;
            reject();
        });
    });
};

/** Accession methods */
const connected = () => _connected;
const getFrame = () => frame;

/** Creates an OPC header. Each pixel requires 3 bytes, and there is a 4-byte header */
const initializeFrame = () => frame = new Uint8ClampedArray(4 + NUM_LEDS * 3);


/** Sends the current frame */
const send = () => {
    if (socket.readyState !== 1 /* OPEN */) {
        // The server connection isn't open. Nothing to do.
        return;
    }

    if (socket.bufferedAmount > frame.length) {
        // The network is lagging, and we still haven't sent the previous frame.
        // Don't flood the network, it will just make us laggy.
        // If fcserver is running on the same computer, it should always be able
        // to keep up with the frames we send, so we shouldn't reach this point.
        return;
    }

    socket.send(frame);
};

module.exports = {
    connect,
    connected,
    getFrame,
    initializeFrame,
    send
};
