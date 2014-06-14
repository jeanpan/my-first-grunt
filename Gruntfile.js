module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	sass: {
	  dev: {
	    options: {
		  style: 'expanded'
		},
		files: {
		  'build/style/style.css' : 'src/sass/style.scss'	
		}
	  },
	  dist: {
		options: {
		  style: 'compressed'
		},
		files: {
		  'build/style/style.css' : 'src/sass/style.scss'
		}
	  }
	},
	watch: {
	  css: {
		files: ['src/sass/*.scss'],
		tasks: ['sass:dev'],
        options: {
            livereload: true
        }
	  },
	  html: {
		files: ['**/*.html'],
        options: {
            livereload: true
        }
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch', 'sass:dev']);

};
