var gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  files = ['_css/**/*.sass', 'index.html', 'css/*.css'];

gulp.task('files', function(){
  gulp.src(files).pipe(connect.reload());
})

gulp.task('jquery', function(){
  gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('js/'));
})

gulp.task('sass', function(){
  return gulp.src(files[0])
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});

gulp.task('watch', function(){
  gulp.watch(files, ['sass', 'files']);
})

gulp.task('connect', function(){
  connect.server({livereload: true});
})

gulp.task('default', ['jquery', 'connect', 'watch']);
