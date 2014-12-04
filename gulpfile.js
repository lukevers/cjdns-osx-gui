/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
*/

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var less        = require('gulp-less');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');

/*
|--------------------------------------------------------------------------
| Variables
|--------------------------------------------------------------------------
*/

// Less
var _less = 'assets/less/';
var less_ = 'assets/css/';

// CSS
var _css  = 'assets/css/';
var css_  = 'public/assets/css/';

// JavaScript
var _js   = 'assets/js/';
var js_   = 'public/assets/js/';

// Bower
var bower = 'bower_components';

/*
|--------------------------------------------------------------------------
| Less Files
|--------------------------------------------------------------------------
*/

// Public Less files
var less_files = [
	// -- Add Less files from assets -- //

	'main.less',

	// -- End Less files from assets -- //
].map(function(str) { return _less + str; });

/*
|--------------------------------------------------------------------------
| CSS Files
|--------------------------------------------------------------------------
*/

// Shared bower CSS files
var css_bower = [
	// -- Add CSS files from bower -- //

	'',

	// -- End CSS files from bower -- //
].map(function(str) { return bower + str });

// Public CSS files
var css_files = css_bower.concat([
	// -- Add CSS files from assets -- //

	'styles.css',

	// -- End CSS files from assets -- //
].map(function(str) { return _css + str }));

/*
|--------------------------------------------------------------------------
| JavaScript Files
|--------------------------------------------------------------------------
*/

// Shared bower JS files
var js_bower = [
	// -- Add JS files from bower -- //

	'',

	// -- End JS files from bower -- //
].map(function(str) { return bower + str });

// Public JS files
var js_files = js_bower.concat([
	// -- Add JS files from assets -- //

	'main.js',

	// -- End JS files from assets -- //
].map(function(str) { return _js + str }));

/*
|--------------------------------------------------------------------------
| Less Task
|--------------------------------------------------------------------------
*/

gulp.task('less', function() {  
	return gulp.src(less_files)
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(less_));
});

/*
|--------------------------------------------------------------------------
| CSS Task
|--------------------------------------------------------------------------
*/

gulp.task('css', function() {  
	return gulp.src(css_files)
		.pipe(concat('styles.css'))
		.pipe(minifyCSS({keepSpecialComments: 0}))
		.pipe(gulp.dest(css_));
});

/*
|--------------------------------------------------------------------------
| JavaScript Task
|--------------------------------------------------------------------------
*/

gulp.task('js', function() {
	return gulp.src(js_files)
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest(js_));
});

/*
|--------------------------------------------------------------------------
| Default Task
|--------------------------------------------------------------------------
*/

gulp.task('default', function() {
	runSequence('less', ['js', 'css']);
});
