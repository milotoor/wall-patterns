#!/usr/bin/env node

const utils = require('./utils');
const { NUM_COLS, NUM_ROWS } = utils.constants;

utils.loop(10, async () => {
    utils.blackout();

    // Should we iterate a row or a column?
    const iterateAcross = Math.random() > 0.5;

    // Which one?
    const index = Math.floor(Math.random() * (iterateAcross ? NUM_ROWS : NUM_COLS));
    const color = utils.colors.random();
    const delay = 10 + Math.floor(Math.random() * 40);

    const loop = iterateAcross ? utils.loopRow : utils.loopCol;
    await loop(delay, (subIteration) => {
        const [x, y] = iterateAcross ? [subIteration, index] : [index, subIteration];
        utils.paint.coordinate(x, y, color);
        utils.letThereBeLight();
    });
});
