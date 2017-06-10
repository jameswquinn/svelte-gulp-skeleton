var gulp = require('gulp');
var build = require('./tasks/build');

gulp.task('default', function() {
  build();
});