var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('concat', function() {
	gulp.src('build/boiler.css')
		.pipe(concat('boiler.min.css'))
		.pipe(gulp.dest('build'))
});

gulp.task('less', function() {
	gulp.src('src/boiler/boiler.less')
		.pipe(less())
		.pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
	gulp.watch('src/boiler/**/*.less', ['less']);
});

gulp.task('build', [ 'less', 'concat' ]);

gulp.task('default', [ 'watch' ]);