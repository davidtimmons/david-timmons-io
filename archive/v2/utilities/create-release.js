const Exec = require('child_process').exec;
const Ncp = require('ncp').ncp;
const Rimraf = require('rimraf');
const { PATHS } = require('../app/constants');


function doNothing() {}

function isFunction(next) {
    return typeof next === 'function';
}

function wrapNext(next) {
    return isFunction(next) && next || doNothing;
}

function reportError(err) {
    if (err) {
        console.error(err);
    }
}

function deleteReleaseFiles(next) {
    Rimraf(PATHS.dir.release, wrapNext(next));
}

function buildFiles(next) {
    Exec('npm run build', (err) => {
        reportError(err);
        wrapNext(next)
    });
}

function copyBuildFilesToRelease(next) {
    Ncp(PATHS.dir.build, PATHS.dir.release, (err) => {
        reportError(err);
        wrapNext(next)();
    });
}

buildFiles(deleteReleaseFiles(copyBuildFilesToRelease));
