#!/usr/bin/env node

const utils = require('./utils');
const { WHITE } = utils.colors;
const { NUM_LEDS } = utils.constants;

utils.loop(10, (iteration) => {
    utils.blackout();
    utils.paint.index(iteration % NUM_LEDS, WHITE);
    utils.letThereBeLight();
});
