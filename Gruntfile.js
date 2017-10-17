module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // sorting CSS properties in specific order
        csscomb: {
          main: {
            files: {
              'src/buttons/buttons.css': ['src/buttons/buttons.css'],
              'src/cards/cards.css': ['src/cards/cards.css'],
              'src/layout/layout.css': ['src/layout/layout.css'],
              'src/navbar/navbar.css': ['src/navbar/navbar.css'],
              'src/typography/typography.css': ['src/typography/typography.css'],
            }
          },
        },

        concat: {
          main: {
            src: 'src/**/*.css',  // All .css files in src dir
            dest: 'dist/css/newage.css'
          }
        },

        cssmin: {
          main: {
            src: 'dist/css/newage.css',
            dest: 'dist/css/newage.min.css'
          }
        },

        // version headers for files
        usebanner: {
            taskName: {
                options: {
                    position: 'top',
                    banner: '/*\n' +
                            ' * Newage v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                            ' * Copyright <%= grunt.template.today("yyyy") %> Newage\n' +
                            ' * <%= pkg.license %>\n' +
                            ' */',
                    linebreak: true
                },
                files: {
                    src: [
                        'dist/css/newage.css',
                        'dist/css/newage.min.css'
                    ]
                }
            }
        },

        copy: {
          main: {
            src: 'dist/css/newage.min.css',
            dest: 'docs/css/newage.min.css'
          }
        },

        // Test server. For use run [grunt connect]
        connect: {
    	  server: {
    	    options: {
    	      port: 8000,
    	      base: 'docs',
              keepalive: true
    	    }
    	  }
    	}
    });

    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['csscomb', 'concat', 'cssmin', 'usebanner', 'copy']);
};
