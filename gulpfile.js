
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default',function(){
    return gutil.log('Gulp in esecuzione');
});


gulp.task('copiaFile', function(){
    gulp.src('source/*.html').pipe(gulp.dest('dist'));
    gulp.src('source/*.js').pipe(gulp.dest('dist'));
    gulp.src('source/*.css').pipe(gulp.dest('dist'));
});

