let gulp = require('gulp');
let browserify = require('browserify');
let sveltify = require('sveltify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let gutil = require('gulp-util');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');

module.exports = () => {

    let b = browserify({
        entries: './app/main.js',
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [sveltify]
    });

    gulp.src("./index.html")
        .pipe(gulp.dest("output"));

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel({presets:['env']}))
        .pipe(uglify()) 
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./output/js/'));
}
