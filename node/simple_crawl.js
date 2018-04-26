#!/usr/bin/env node

const utils = require('./utils');
const { WHITE } = utils.colors;
const { NUM_LEDS } = utils.constants;
const { paintIndex } = utils.paint;

utils.loop(10, (iteration) => {
    utils.blackout();
    paintIndex(iteration % NUM_LEDS, WHITE);
    utils.letThereBeLight();
});
