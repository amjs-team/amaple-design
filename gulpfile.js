var 
	gulp 		= require ( "gulp" ),
	connect 	= require ( "gulp-connect" ),
	livereload 	= require ( "gulp-livereload" );

gulp.task ( "connect", function () {
	connect.server ( {
		root: "src",
		liverload: true, 
		port:9000
	} );
} );

gulp.task ( "default", function () {
	gulp.start ( "connect" );
} );