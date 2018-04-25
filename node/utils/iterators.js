
const { NUM_ROWS, NUM_COLS } = require('./constants');

/** Iterates over every pixel in the grid, providing them sequentially to `callback` */
exports.iterateGrid = (callback) => {
    for (let x = 0; x < NUM_COLS; x++) {
        for (let y = 0; y < NUM_ROWS; y++) {
            callback(x, y);
        }
    }
};
