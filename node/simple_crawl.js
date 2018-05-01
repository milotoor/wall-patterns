
const utils = require('./utils');
const { WHITE } = utils.colors;
const { NUM_LEDS } = utils.constants;

module.exports = async (options) => {
    await utils.init(options);

    utils.loop(10, (iteration) => {
        utils.blackout();
        utils.paint.index(iteration % NUM_LEDS, WHITE);
        utils.letThereBeLight();
    });
};
