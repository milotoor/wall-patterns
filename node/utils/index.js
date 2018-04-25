
const connection = require('./connection');
exports.letThereBeLight = connection.letThereBeLight;

exports.colors    = require('./colors');
exports.constants = require('./constants');
exports.iterators = require('./iterators');
exports.paint     = require('./paint');


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
