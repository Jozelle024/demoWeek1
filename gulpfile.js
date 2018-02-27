// jshint ignore: start

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('default',function(){
    return gutil.log('Gulp in esecuzione');
});


gulp.task('copiaFile', function(){
    gulp.src('html/*.html').pipe(gulp.dest('dist'));
    gulp.src('javascript/*.js').pipe(gulp.dest('dist'));
    gulp.src('css/*.css').pipe(gulp.dest('dist'));
});

// to configure jshint task

gulp.task('jshint', function() {
    return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sassWatch',function(){
    gulp.watch('./sass/*.scss', ['sass']);
});
