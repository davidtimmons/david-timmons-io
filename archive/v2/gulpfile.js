const ChildProcess = require('child_process');
const Del = require('del');
const Gulp = require('gulp');
const PostCss = require('gulp-postcss');
const TailwindCss = require('tailwindcss');
const Autoprefixer = require('autoprefixer');
const Concat = require('gulp-concat');
const PurgeCss = require('gulp-purgecss');
const BrowserSync = require('browser-sync');
const BrowserSyncConfig = require('./bs-config');
const { FILES, PATHS } = require('./app/constants.js');


/////////////
// HELPERS //
/////////////

function runBuildScript(scriptPath) {
    return new Promise((resolve, reject) => {
        const process = ChildProcess.fork(scriptPath);

        process.on('error', function(err) {
            reject(err);
        });

        process.on('exit', function(exitCode) {
            if (exitCode !== 0) {
                reject(new Error(`Build script failed. Exit code: ${exitCode}`));
            } else {
                resolve();
            }
        });
    });
}

function runBuildScriptWithReport() {
    return runBuildScript(PATHS.buildScript)
        .catch((err) => {
            console.log(err);
        });
}

function reloadBrowser() {
    BrowserSync.reload();
}


///////////
// TASKS //
///////////

// Styles:

Gulp.task('css:clean', () => {
    return Del([PATHS.css.build + '**/*.css']);
});

Gulp.task('css:clean:staged', () => {
    return Del([PATHS.css.build + '**/' + FILES.css.staged]);
});

Gulp.task('css:stage', () => {
    return Gulp.src([PATHS.css.source + FILES.css.source])
        .pipe(Concat(FILES.css.staged))
        .pipe(PostCss([
            TailwindCss,
            Autoprefixer,
            ]))
        .pipe(Gulp.dest(PATHS.css.source))
        .pipe(Gulp.dest(PATHS.css.build));
});

Gulp.task('css:purge', () => {
    // See: https://next.tailwindcss.com/docs/controlling-file-size/#setting-up-purgecss
    return Gulp.src([PATHS.css.build + FILES.css.staged])
        .pipe(PurgeCss({
            content: [PATHS.dir.build + '**/*.html'],
            extractors: [
                {
                    extractor: class {
                        static extract(content) {
                            return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                        }
                    },
                    extensions: ['html', 'vue', 'jsx'],
                },
            ],
            }))
        .pipe(Concat(FILES.css.build))
        .pipe(Gulp.dest(PATHS.css.build));
});

Gulp.task('css', Gulp.series('css:clean', 'css:stage'));


// Content:

Gulp.task('markdown', () => {
    return runBuildScriptWithReport(PATHS.buildScript);
});


// CI:

Gulp.task('clean', () => Del(PATHS.dir.build + '**/*'));

Gulp.task('build', Gulp.series('clean', 'markdown', 'css', 'css:purge', 'css:clean:staged'));

Gulp.task('watch', () => {
    BrowserSync.init(BrowserSyncConfig);

    Gulp.watch(['app/layouts/**/*', 'app/src/**/*', `!${PATHS.css.source}*.css`])
        .on('change', Gulp.series('markdown', 'css', reloadBrowser));

    Gulp.watch(PATHS.css.source + FILES.css.source)
        .on('change', Gulp.series('css', reloadBrowser));
});

Gulp.task('serve', Gulp.series('clean', 'markdown', 'css', 'watch'));
