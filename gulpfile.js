var gulp = require('gulp');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');

var customReporter = function(file) {
  gutil.log(gutil.colors.cyan(file.csslint.errorCount)+' errors in '+gutil.colors.magenta(file.path));
  file.csslint.results.forEach(function(result) {
    gutil.log(result.error.message+' on line '+result.error.line);
  });
};

gulp.task('server', function(next) {
	var staticS = require('node-static'),
			server = new staticS.Server('./'),
			port = 4000;
	require('http').createServer(function (request, response) {
		request.addListener('end', function () {
			server.serve(request, response);
		}).resume();
	}).listen(port, function() {
		gutil.log('Server listening on port: ' + gutil.colors.magenta(port));
		next();
	});
});

gulp.task('concat', function() {
	gulp.src('build/boiler.css')
		.pipe(csslint())
		.pipe(csslint.reporter(customReporter))
		.pipe(concat('boiler.min.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
	gulp.src('src/boiler.less')
		.pipe(less())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.less', [ 'build' ]);
});

gulp.task('build', [ 'less', 'concat' ]);

gulp.task('default', [ 'build', 'watch', 'server' ]);
