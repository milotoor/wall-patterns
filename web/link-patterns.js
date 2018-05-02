#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

/**
 * Makes a symlink to the directory the patterns are in. These live outside of the directory that
 * create-react-app created, so it isn't able to import them without a symlink.
 */
const scriptDirectory = path.resolve('../node');
spawn('ln', ['-sf', scriptDirectory, './node_modules/patterns']);
