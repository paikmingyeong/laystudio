

// 변수선언 = require('모듈이름');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');


gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('html_src/**', ['include', 'livereload']);
  gulp.watch('css_src/**', ['sass', 'livereload']);
  gulp.watch('js_src/**', ['jsconcat', 'livereload']);
});

// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));

});

// sass 실행
gulp.task('sass', function(){
  return gulp.src('css_src/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));
});



 // concat

gulp.task('MenuOpen', function() {
  return gulp.src('js_src/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('menu_open.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js/'));
});

gulp.task('WhichSlide', function() {
    return gulp.src('js_src/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('inter_which_slide.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/'));
});

gulp.task('jsconcat', ['MenuOpen', 'WhichSlide']);


gulp.task('default', ['livereload', 'include', 'sass', 'jsconcat', 'watch']);