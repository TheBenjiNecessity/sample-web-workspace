var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('bundle-js', function () {
	return gulp.src(['index.js', 'src/**/*.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['bundle-js']);