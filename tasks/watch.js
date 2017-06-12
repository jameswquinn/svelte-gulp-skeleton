const browserSync = require('browser-sync');
const build = require('./build');
const gulp = require('gulp');

module.exports = () => {

    browserSync.init({
        server: {
            baseDir: "./output"
        }
    });

    gulp.watch("app/*.*", build);
    gulp.watch("output/*.*")
        .on("change", browserSync.reload);

}