var gulp = require('gulp');
var build = require('./tasks/build');
var watch = require('./tasks/watch');

gulp.task('default', function() {
  watch();
});

gulp.task('build', function() {
  build();
});