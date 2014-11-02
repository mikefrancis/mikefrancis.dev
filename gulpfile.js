var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pixrem       = require('gulp-pixrem')
    minifycss    = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('css/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 10 version'))
    .pipe(minifycss())
    .pipe(pixrem())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);