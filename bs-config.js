const Exec = require('child_process').exec;

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   https://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 */
module.exports = {
    "ui": {
        "port": 3001
    },
    "files": [
        './src/**/*',
        {
            match: ['./src/*.*'],
            fn: function (event, file) {
                const child = Exec('npm run webroot:dev && npm run css:dev', (err, stdout, stderr) => {
                    if (err) console.error(stderr);
                });
            },
        },
        {
            match: ['./src/css/**/*'],
            fn: function (event, file) {
                const child = Exec('npm run css:dev', (err, stdout, stderr) => {
                    if (err) console.error(stderr);
                });
            },
        },
        {
            match: ['./src/fonts/**/*'],
            fn: function (event, file) {
                const child = Exec('npm run fonts:dev', (err, stdout, stderr) => {
                    if (err) console.error(stderr);
                });
            },
        },
        {
            match: ['./src/img/**/*'],
            fn: function (event, file) {
                const child = Exec('npm run img:dev', (err, stdout, stderr) => {
                    if (err) console.error(stderr);
                });
            },
        },
        {
            match: ['./src/ts/**/*'],
            fn: function (event, file) {
                const child = Exec('npm run js:dev', (err, stdout, stderr) => {
                    if (err) console.error(stderr);
                });
            },
        }
    ],
    "watchEvents": [
        'add',
        'change',
    ],
    "watch": false,
    "ignore": [],
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": './build-dev',
    "https:": true,
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    "open": "local",
    "browser": "default",
    "cors": false,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": 0,
    "reloadDebounce": 500,
    "reloadThrottle": 0,
    "plugins": [],
    "injectChanges": true,
    "startPath": null,
    "minify": false,
    "host": null,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "socketIoOptions": {
            "log": false
        },
        "socketIoClientConfig": {
            "reconnectionAttempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    },
    "injectNotification": false
};
