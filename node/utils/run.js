#!/usr/bin/env node

const program = require('commander');
const ws = require('ws');


const run = (scriptName, options = {}) => {
    const script = require(`../${scriptName}`);
    const { host, port } = program;

    try {
        script({ WebSocket: ws, host, port, ...options });
    } catch (e) {
        console.error(e);
    }
};

/** Entry point for loading scripts from the command line */
program
    .version('1.0.0')
    .option('-h, --host [host]', 'Specify hostname of fadecandy server [localhost]', 'localhost')
    .option('-p, --port [port]', 'Specify port of fadecandy server [7890]', '7890');

program
    .command('game_of_life')
    .option('--initial [initial]', 'Initial percentage of the grid which is alive', 0.5)
    .action((options) => run('game_of_life', options));

program
    .command('random_row_or_col')
    .option('--erase', 'Erase lines with every loop')
    .action(options => run('random_row_or_col', options));

program
    .command('simple_crawl')
    .action(() => run('simple_crawl'));

program.parse(process.argv);
