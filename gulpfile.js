var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    pixrem       = require('gulp-pixrem')
    minifycss    = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('css/style.css')
    .pipe(autoprefixer('last 10 version'))
    .pipe(pixrem())
    .pipe(minifycss())
    .pipe(gulp.dest('css/dist'));
});

gulp.task('default', ['css']);