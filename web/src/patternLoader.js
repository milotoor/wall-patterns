
import SimpleCrawl from '../../node/simple_crawl';
import RandomRowOrColumn from '../../node/random_row_or_col';
import GameOfLife from '../../node/game_of_life';

import store from './store';

const scripts = {
    'Simple Crawl'        : SimpleCrawl,
    'Random Row or Column': RandomRowOrColumn,
    'Game of Life'        : GameOfLife
};

export default (scriptName) => {
    // Get host and port from state
    const { host, port } = store.getState();

    // Find and run the script
    const script = scripts[scriptName];
    script({ WebSocket, host, port });
}
