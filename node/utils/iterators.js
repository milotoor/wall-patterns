
const { NUM_ROWS, NUM_COLS } = require('./constants');


/** Iterates down/up a column, providing the index to `callback` */
const iterateCol = (callback) => {
    for (let y = 0; y < NUM_ROWS; y++) {
        callback(y);
    }
};

/** Iterates over every pixel in the grid, providing them to `callback` */
const iterateGrid = (callback) => iterateRow(x => iterateCol(y => callback(x, y)));

/** Iterates across a row, providing the index to `callback` */
const iterateRow = (callback) => {
    for (let x = 0; x < NUM_COLS; x++) {
        callback(x);
    }
};


module.exports = {
    iterateCol,
    iterateGrid,
    iterateRow
};
