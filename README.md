Patterns for the 500 LEDs on my bedroom wall.

## Usage
Installation and setup:

```
git clone https://github.com/milotoor/wall-patterns.git
cd wall-patterns/node
npm install
```

To execute a pattern, use the `run` script:

```
./utils/run.js simple_crawl
```

to run the pattern.

The code makes use of async-await syntax, which is supported by node v7+. You will need to have a
compatible node version to run the code. If you need to update node to run the patterns, I recommend
looking into [nvm](https://github.com/creationix/nvm).

### Options
Some scripts have options. To see the options for a given script, call it with
the `--help` option.

There are two options available in every script: `--host` (`-h`) and `--port` (`-p`). By default the
script will try to communicate with a FadeCandy server at `ws://localhost:7890`. If you are
developing patterns from your own machine you will need to change the `--host` option (`--port` can
probably remain the same). The grid of LEDs is controlled by a Raspberry Pi with a hostname of
`grid.local`. So, to remotely run a pattern on the grid, you should execute

```
./utils/run.js random_row_or_col --host grid.local
``` 

### Creating Patterns
The code comes with a number of utility methods for rapidly iterating on pattern design. The pattern
lifecycle looks something like this

1. Options are declared and parsed
2. The connection to the grid is made
3. A loop function is entered, which makes updates to the pattern and then "flushes" it to the LEDs

Option parsing is done with the [commander](https://github.com/tj/commander.js/) package. The
connection is established by web sockets, using the [ws](https://github.com/websockets/ws) package.
Most likely you will not need to be concerned with connection management.

The loop function is the main control mechanism for patterns. The generic loop function takes the
form

```
loop(sleep, callback, [iterations])
``` 

_sleep_ indicates the amount of time, in ms, between loop intervals

_callback_ is the method that will be called with each iteration. It receives a single argument: a
number representing the current loop's iteration number. This function may be asynchronous, so you
can do virtually anything you want inside, including sub-looping.

_iterations_ indicates the number of times the loop ought to iterate before terminating. Defaults to
-1, which will cause the loop to continue forever.

