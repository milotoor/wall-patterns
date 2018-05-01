
const colors     = require('./colors');
const connection = require('./connection');
const iterators  = require('./iterators');
const loops      = require('./loops');
const paint      = require('./paint');

exports.colors     = colors;
exports.connection = connection;
exports.constants  = require('./constants');
exports.iterators  = iterators;
exports.paint      = paint;


/** Creates a new frame and initializes it to all-black */
exports.blackout = () => {
    connection.initializeFrame();
    iterators.iterateGrid((x, y) => paint.coordinate(x, y, colors.BLACK));
};

exports.init = async (options) => await connection.connect(options);

/** Convenience method */
exports.letThereBeLight = connection.send;

/** As a further convenience, add all of the looping methods directly to the exports */
Object.assign(exports, loops);
