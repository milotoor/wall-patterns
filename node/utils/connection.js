
const program = require('commander');
const WebSocket = require('ws');
const { NUM_LEDS } = require('./constants');

let socket;
let frame;

const connect = (callback) => {
    program
        .version('1.0.0')
        .option('-h, --host [host]', 'Specify hostname of fadecandy server [localhost]', 'localhost')
        .option('-p, --port [port]', 'Specify port of fadecandy server [7890]', '7890')
        .parse(process.argv);

    const { host, port } = program;

    // Connect to a Fadecandy server
    console.log('Connecting...');
    socket = new WebSocket(`ws://${host}:${port}`);
    socket.on('open', () => {
        console.log('Connected!');
        initializeFrame();
        callback();
    });

    socket.on('error', (e) => console.error(e.toString()));
};

/** Creates an OPC header. Each pixel requires 3 bytes, and there is a 4-byte header */
const initializeFrame = () => frame = new Uint8ClampedArray(4 + NUM_LEDS * 3);

const getFrame = () => frame;

/** Sends the current frame */
const letThereBeLight = () => {
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
    getFrame,
    initializeFrame,
    letThereBeLight
};
