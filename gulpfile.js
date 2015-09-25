var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence(
		'base',
		'components'
	);
});

gulp.task('base', function() {
	gulp.src('stylus/base/config.styl')
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(rename('base.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('components', function() {
	gulp.src('stylus/components/config.styl')
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(rename('components.css'))
		.pipe(gulp.dest('dist'));
});