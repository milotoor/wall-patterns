
import SimpleCrawl from 'patterns/simple_crawl';
import RandomRowOrColumn from 'patterns/random_row_or_col';
import GameOfLife from 'patterns/game_of_life';

import store from './store';

const scripts = {
    'Simple Crawl'        : SimpleCrawl,
    'Random Row or Column': RandomRowOrColumn,
    'Game of Life'        : GameOfLife
};

export default () => {
    // Get host and port from state
    const { host, pattern, port } = store.getState();

    // Find and run the script
    const script = scripts[pattern];
    script({ WebSocket, host, port });
}
