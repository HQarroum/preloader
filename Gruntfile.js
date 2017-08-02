module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Timing the build tasks.
  require('time-grunt')(grunt);

  grunt.initConfig({
  	clean: {
  	  dist: ['dist/*']
  	},
  	jshint: {
      options: {
		    jshintrc: '.jshintrc'
	    },
  	  all: {
  		  src: [
          'preloader.js'
        ]
  	  }
  	},
    cssmin: {
      dist: {
        expand: true,
        cwd: 'assets/css/',
        src: ['*.css'],
        dest: 'dist/assets/css/'
      }
    },
    babel: {
  		options: {
  			presets: ['es2015', 'babili']
  		},
  		dist: {
  			files: [
          { expand: true, cwd: './', src: ['preloader.js'], dest: 'dist/' }
        ]
  		}
  	}
  });

  // Registering the tasks.
  grunt.registerTask('default', ['clean', 'jshint', 'cssmin', 'babel']);
};
