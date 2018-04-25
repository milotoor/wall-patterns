#!/usr/bin/env node

const WebSocket = require('ws');

const NUM_LEDS = 500;

// Set all pixels to a given color
const writeFrame = (n) => {
    const packet = new Uint8ClampedArray(4 + NUM_LEDS * 3);

    if (socket.readyState !== 1 /* OPEN */) {
        // The server connection isn't open. Nothing to do.
        return;
    }

    if (socket.bufferedAmount > packet.length) {
        // The network is lagging, and we still haven't sent the previous frame.
        // Don't flood the network, it will just make us laggy.
        // If fcserver is running on the same computer, it should always be able
        // to keep up with the frames we send, so we shouldn't reach this point.
        return;
    }

    for (let i = 0; i < NUM_LEDS; i++) {
        packet[i * 3 + 4] = 0;
        packet[i * 3 + 5] = 0;
        packet[i * 3 + 6] = 0;
    }

    packet[n * 3 + 4] = 255;
    packet[n * 3 + 5] = 255;
    packet[n * 3 + 6] = 255;

    socket.send(packet.buffer);
};

// Animation loop
let loopNum = 0;
const animate = () => {
    writeFrame(loopNum++);

    if (loopNum === NUM_LEDS) {
        loopNum = 0;
    }

    setTimeout(animate, 10);
};

// Connect to a Fadecandy server running on the same computer, on the default port
console.log('Connecting...');
const socket = new WebSocket('ws://localhost:7890');
socket.on('open', () => {
    console.log('Connected!');
    animate();
});
