
const connection = require('./connection');
const paint      = require('./paint');

exports.colors    = require('./colors');
exports.constants = require('./constants');
exports.iterators = require('./iterators');
exports.paint     = paint;

// Convenience exports
exports.blackout        = paint.blackout;
exports.letThereBeLight = connection.letThereBeLight;


/** Initializes the connection, then loops with `callback` every `sleep` ms */
exports.loop = (sleep, callback) => {
    let loopNumber = 0;
    connection.connect(() => {
        setInterval(() => {
            connection.initializeFrame();
            callback(loopNumber++);
        }, sleep);
    });
};
