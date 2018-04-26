#!/usr/bin/env node

const utils = require('./utils');

const blackout = async () => {
    await utils.connection.connect();
    utils.blackout();
    utils.letThereBeLight();
};

blackout();
