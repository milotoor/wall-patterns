
const connection = require('./connection');
const { NUM_COLS, NUM_ROWS } = require('./constants');

/** The generic loop. Calls `callback` every `sleep` ms */
const loop = async (sleep, callback, numIterations = -1) => {
    // If we haven't connected yet, do so now
    if (!connection.connected()) {
        await connection.connect();
    }

    return new Promise((resolve, reject) => {
        let loopNumber = 0;
        const loopFunc = async () => {
            await callback(loopNumber++);

            setTimeout(() => {
                if (numIterations !== -1 && loopNumber >= numIterations) {
                    // Done iterating
                    resolve();
                } else {
                    // Keep going
                    goForALoop();
                }
            }, sleep);
        };

        const goForALoop = () => {
            loopFunc().catch((e) => {
                console.error(e);
                reject();
            });
        };

        goForALoop();
    })
};

/** Loops over a column */
const loopCol = (sleep, callback) => loop(sleep, callback, NUM_ROWS);

/** Loops over a row */
const loopRow = (sleep, callback) => loop(sleep, callback, NUM_COLS);

module.exports = {
    loop,
    loopCol,
    loopRow
};
