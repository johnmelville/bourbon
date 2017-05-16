// The "wrapper" function
module.exports = function(grunt) {
	//Project and task configuration
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	/**
	* Grunt Sass
	* Compile Sass to CSS using node-sass
	* https://www.npmjs.com/package/grunt-sass
	*/
	sass: {
		options: {
			sourceMap: false
		},
		dist: {
			files: {
				'css/style.css' : 'assets/scss/style.scss'
			}
		}
	},

	/**
	* Grunt Contrib watch
	* Monitor Fies and Execute Tasks
	* https://www.npmjs.com/package/grunt-contrib-watch
	*/
	watch: {
		sass: {
			files: [
				'assets/scss/**/*.scss'
			],
			tasks: [
				'sass'
			]
		},
		scripts: {
			files: [
				'assets/js/*.js'
			],
			tasks: [
				'uglify'
			]
		}
	},

	/**
	* Grunt Contrib Uglify
	* Minify JavaScript Files
	* https://www.npmjs.com/package/grunt-contrib-uglify
	*/
uglify: {
			my_target:{
				files: {
					'js/script.js' : ['node_modules/jquery/dist/jquery.js', 'assets/js/script.js']
				}
			}
		}


	});

// Loading Grunt Plugins
   require('load-grunt-tasks')(grunt);

   // Custom tasks
  grunt.registerTask('default', ['watch']);
};