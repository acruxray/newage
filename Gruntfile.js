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
              'src/lists/lists.css': ['src/lists/lists.css'],
              'src/helpers/helpers.css': ['src/helpers/helpers.css'],
              'src/colors/colors.css': ['src/colors/colors.css'],
              'src/sidebar/sidebar.css': ['src/sidebar/sidebar.css'],
              'src/footer/footer.css': ['src/footer/footer.css'],
              'src/tables/tables.css': ['src/tables/tables.css'],
              'src/notifications/notifications.css': ['src/notifications/notifications.css'],
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

        uglify: {
            my_target: {
                files: {
                    'dist/js/newage.min.js': [
                        'src/sidebar/sidebar.js',
                        'src/notifications/notifications.js'
                    ]
                }
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
                        'dist/css/newage.min.css',
                        'dist/js/newage.js',
                        'dist/js/newage.min.js'
                    ]
                }
            }
        },

        copy: {
          main: {
            files: [
                {src: ['dist/css/newage.min.css'], dest: 'docs/css/newage.min.css'},
                {src: ['dist/js/newage.min.js'], dest: 'docs/js/newage.min.js'},
            ],
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['csscomb', 'concat', 'cssmin', 'uglify', 'usebanner', 'copy']);
};
