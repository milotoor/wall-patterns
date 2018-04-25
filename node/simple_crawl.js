#!/usr/bin/env node

const utils = require('./utils');
const { BLACK, WHITE } = utils.colors;
const { NUM_LEDS } = utils.constants;
const { paintCoordinate, paintIndex } = utils.paint;

utils.loop(10, (iteration) => {
    utils.iterators.iterateGrid((x, y) => paintCoordinate(x, y, BLACK));
    paintIndex(iteration % NUM_LEDS, WHITE);
    utils.letThereBeLight();
});
