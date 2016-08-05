var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('reload', function() {
    gulp.src('./index.html')
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['./CCI/**/*.js'], ['reload']);
});

gulp.task('default', ['watch','reload']);