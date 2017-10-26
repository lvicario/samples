module.exports = function(grunt) {

    grunt.initConfig({
        // Concat
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/lib/jquery-1.11.1.js', 'src/js/vendor/*.js', 'src/js/custom/*.js'],
                dest: 'js/script.concatenated.js',
            }
        },

        // Uglify
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'js/script.min.js': ['js/script.concatenated.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion 
                    cwd: 'src/images/',                   // Src matches are relative to this path 
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
                    dest: 'images/'                  // Destination path prefix 
                }]
            }
        },


        // Watch
        watch: {
            css: {
                // files: ['src/sass/*', 'src/sass/components/*', 'src/sass/plugins/*', 'src/sass/sections/*', 'src/sass/vendor/*'],
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            },
            script: {
                files: ['src/js/custom/*.js', 'src/js/vendor/*.js', 'src/js/lib/*.js'],
                tasks: ['concat', 'uglify']
            },
            image: {
                files: ['src/images/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        }
    });
     
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
     
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('all', ['concat', 'uglify', 'sass', 'imagemin']);

};