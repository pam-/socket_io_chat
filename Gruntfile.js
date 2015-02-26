module.exports = function(grunt) {
	grunt.initConfig({
	  browserSync: {
    	dev: {
      	bsFiles: {
        	src: '<%=config.build%>**/*'
      	},
      	options: {
        	watchTask: true,
        	server: {
          	baseDir: "<%=config.build%>"
        	}
      	}
      }
    },
		watch: {
			html: {
				files: ['*.html'],
				tasks: ['html']
			},
			js: {
				files: ['*.js']
				// tasks: ['requirejs:dev']
			},
			options: {
				livereload: true
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.registerTask('default', ['watch'])
}