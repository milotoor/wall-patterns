
const range = require('lodash/range');
const sum = require('lodash/sum');

const utils = require('./utils');
const { WHITE } = utils.colors;
const { NUM_ROWS, NUM_COLS } = utils.constants;

module.exports = async (options) => {
    await utils.init(options);

    // Initialize the grid
    let grid = range(NUM_ROWS).map(() =>
        range(NUM_COLS).map(() =>
            Math.random() < options.initial
        )
    );

    const evolveGrid = () => {
        // Iterate every cell in the grid to determine if it should be alive or dead in the next
        // generation
        grid = grid.map((row, i) =>
            row.map((alive, j) => {
                let rowAbove = i === (NUM_ROWS - 1) ? 0 : i + 1;
                let row = i;
                let rowBelow = i === 0 ? NUM_ROWS - 1 : i - 1;

                let colRight = j === (NUM_COLS - 1) ? 0 : j + 1;
                let col = j;
                let colLeft = j === 0 ? NUM_COLS - 1 : j - 1;

                // Get the cell's neighbors
                const neighbors = [
                    grid[rowAbove][colLeft],
                    grid[rowAbove][col],
                    grid[rowAbove][colRight],
                    grid[row][colLeft],
                    grid[row][colRight],
                    grid[rowBelow][colLeft],
                    grid[rowBelow][col],
                    grid[rowBelow][colRight],
                ];

                // How many neighbors are alive?
                const numAlive = sum(neighbors);

                // Apply the rules...

                // 1. Any live cell with fewer than two live neighbours dies
                if (alive && numAlive < 2) return false;

                // 2. Any live cell with two or three live neighbours lives on to the next generation.
                if (alive && (numAlive === 2 || numAlive === 3)) return true;

                // 3. Any live cell with more than three live neighbours dies
                if (alive && numAlive > 3) return false;

                // 4. Any dead cell with exactly three live neighbours becomes a live cell
                return !alive && numAlive === 3;
            })
        );
    };

    utils.loop(1000, () => {
        utils.blackout();

        // Paint the current game state
        grid.forEach((row, i) =>
            row.forEach((alive, j) =>
                alive && utils.paint.coordinate(j, i, WHITE)
            )
        );

        utils.letThereBeLight();

        // Evolve the grid
        evolveGrid();
    });
};
