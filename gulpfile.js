var gulp = require('gulp');

var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var uglify = require('gulp-uglifyjs');

// concating css and minifying css.
gulp.task('css' ,function(){
	
	return gulp.src('css/*.css')
		.pipe(concat('css/index.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./'))
})

// monotoring sass files, initializing sourcemaps, writing maps
// compiling sass files, and placing them in the ./css folder.
gulp.task('sass', function () {
 return gulp.src('sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./css'));
});
// here we concat all js files, minify them,
gulp.task('uglify', function() {
  gulp.src(['js/*.js', 'bower_components/**/*.js'])
    .pipe(uglify('app.js', {
      mangle: false,
      output: {
        beautify: true
      }
    }))
    .pipe(gulp.dest('js'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});








