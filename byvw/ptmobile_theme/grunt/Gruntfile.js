module.exports = function(grunt) {

    // URI paths for our tasks to use.
     grunt.src = '../src/';
     grunt.dest = '../';
     grunt.siteRoot = '../../../../';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concat
        concat: {
            options: {
                separator: ';',
            },
            basic: {
                src: [
                    // Combine other or default scripts (inherited from the web)
                    grunt.siteRoot + 'base/sites/all/modules/custom/matterhorn_framework/matterhorn_framework.js',
                    grunt.siteRoot + 'base/sites/all/modules/custom/matterhorn_account/js/matterhorn_account.js',
                    grunt.siteRoot + 'base/sites/all/modules/contributed/jreject/jReject/js/jquery.reject.js',

                    // Mobile Specific Scripts
                    grunt.src + 'js/vendor/*.js', // Mobile Plugins
                    grunt.src + 'js/custom/*.js' // Mobile Custom Scripts
                ],
                dest: grunt.dest + 'js/script.concatenated.js',
            },
            head: {
                src: [grunt.src + 'js/head/*.js'],
                dest: grunt.dest + 'js/head.concatenated.js',
            }
        },


        // Uglify
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    '../js/script.min.js': ['../js/script.concatenated.js'],
                    '../js/head.min.js': ['../js/head.concatenated.js']
                }
            }
        },


        // JShint
        jshint: {
            // mobile: [grunt.src + 'js/custom/script_mobile.js']
            custom: [grunt.src + 'js/custom/**/*.js']
            // all: ['Gruntfile.js', grunt.src + 'js/**/*.js']
        },


        // SASS
        sass: {
            dist: {
                options: {
                    style: 'compressed' // 'nested', 'compact', 'expanded', 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: grunt.src + 'sass',
                    src: ['*.scss'],
                    dest: grunt.dest + 'css',
                    ext: '.css'
                }]
            }
        },


        // Imagemin
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: grunt.src + 'images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: grunt.dest + 'images/'                  // Destination path prefix
                }]
            }
        },


        // Watch
        watch: {
            css: {
                // files: ['src/sass/*', 'src/sass/components/*', 'src/sass/plugins/*', 'src/sass/sections/*', 'src/sass/vendor/*'],
                files: [grunt.src + 'sass/**/*.scss'],
                tasks: ['sass']
            },
            script: {
                files: [grunt.src + 'js/custom/*.js', grunt.src + 'js/vendor/*.js', grunt.src + 'js/lib/*.js', grunt.src + 'js/head/*.js'],
                tasks: ['concat', 'uglify']
            },
            image: {
                files: [grunt.src + 'images/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('script', ['concat', 'uglify']);
    grunt.registerTask('all', ['concat', 'uglify', 'jshint', 'sass', 'imagemin']);

};