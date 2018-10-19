var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');


// Запускаем сервер, предварительно скомпилировав SASS
gulp.task('serve', ['sass'], function() {

    bs.init({
        server: "./src"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
});

// делаем компилацию SASS в CSS
gulp.task('sass', function() {
    return gulp.src("src/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);


