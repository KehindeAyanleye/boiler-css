var gulp = require('gulp');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');

/* Custom reporter for CSS Lint */
var customReporter = function(file) {
    var errorCount = file.csslint.errorCount;
    var errorColorized = gutil.colors.cyan(errorCount);
    var filePathColorized = gutil.colors.magenta(file.path);

    gutil.log(errorColorized+' errors in '+ filePathColorized);

    file.csslint.results.forEach(function(result) {
        gutil.log(result.error.message+' on line '+result.error.line);
    });
};

/* Start a static server */
var startServer = function(next) {
    var staticS = require('node-static');
    var server = new staticS.Server('./');
    var port = 4000;
    var portColor = gutil.colors.magenta(port);

    require('http')
        .createServer(function (request, response) {
            request.addListener('end', function () {
            server.serve(request, response);
            }).resume();
        }).listen(port, function() {
            gutil.log('Server listening on port: ' + portColor);
            next();
        });

};

/* Lint and concatinate main CSS file */
var concatinate = function() {
    gulp.src('build/boiler.css')
        .pipe(csslint())
        .pipe(csslint.reporter(customReporter))
        .pipe(concat('boiler.min.css'))
        .pipe(gulp.dest('dist'));
};

/* Convert LESS files to CSS */
var lessToCSS = function() {
    gulp.src('src/boiler.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
};

/* Watch tasks */
var watchFiles = function() {
    gulp.watch('src/**/*.less', [ 'build' ]);
};

/**
 * Tasks
 */
gulp.task('server', startServer);
gulp.task('concat', concatinate);
gulp.task('less', lessToCSS);
gulp.task('watch', watchFiles);
gulp.task('build', [ 'less', 'concat' ]);
gulp.task('default', [ 'build', 'watch', 'server' ]);
