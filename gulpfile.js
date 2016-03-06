var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src('./content/styles/*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function() {
    gulp.watch('./content/styles/**/*.less', ['styles']);
});

gulp.task('build', ['styles']);

gulp.task('default', ['build', 'watch']);