
const { getFrame } = require('./connection');
const { NUM_LEDS, NUM_ROWS } = require('./constants');


/**
 * In the Open Pixel Control protocol (OPC), every pixel requires 3 bytes, one each for the red,
 * green and blue color channels. The order of the colors depends on the configuration. Furthermore
 * there is a 4-byte header
 */
const paintIndex = (pixelNumber, color) => {
    if (pixelNumber >= NUM_LEDS) {
        console.error(`Unable to paint pixel number ${pixelNumber}! Index should be less than ${NUM_LEDS}`);
        return;
    }

    const frame = getFrame();
    frame[pixelNumber * 3 + 4] = color.g;
    frame[pixelNumber * 3 + 5] = color.r;
    frame[pixelNumber * 3 + 6] = color.b;
};

/**
 * The grid is mapped in successive ascending columns. The nth pixel in the array is arrived by
 * starting at the lower-left corner (pixel 0), counting up the column, then moving to the bottom of
 * the next column and counting up that column, and so on. In a 4-row by 5-col grid, the pixels
 * would be arrayed like so
 *
 *   3    7   11   15   19
 *   2    6   10   14   18
 *   1    5    9   13   17
 *   0    4    8   12   16
 */
const paintCoordinate = (x, y, color) => {
    const pixelNumber = NUM_ROWS * x + y;
    paintIndex(pixelNumber, color);
};

module.exports = {
    paintIndex,
    paintCoordinate
};
