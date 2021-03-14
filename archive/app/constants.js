const FILES = {
    css: {
        build: 'style.css',
        source: 'main.css',
        staged: 'processed.css',
    },
};

const PATHS = {
    buildScript: process.env.BUILD_SCRIPT_PATH || 'app/index.js',
    css: {
        build: 'app/build/static/css/',
        source: 'app/src/static/css/',
    },
    dir: {
        build: 'app/build/',
        release: 'docs/',
        source: 'app/src/',
    },
};


module.exports = { FILES, PATHS };
