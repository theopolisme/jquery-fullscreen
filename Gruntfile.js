/*jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jscs-checker' );

	grunt.initConfig({
		jshint: {
			all: ['*.js']
		},
		jscs: {
			all: '<%= jshint.all %>'
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs']);
	grunt.registerTask('default', ['test']);
};
