module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // jade file compilation
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [ {
                    expand: true,
                    cwd: 'src/views',
                    src: '**/*.jade',
                    dest: 'public/', // move to root of public folder
                    ext: '.html'
                } ]
            }
        },

        // uglification of scripts
        uglify: {
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: '**/*.js',
                    dest: 'public/js/'
                }]
            },
            staging: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                },
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: '**/*.js',
                    dest: 'public/js/'
                }]
            }

        },

        watch: {
            templates:{
                files: ['src/views/*.jade'],
                tasks: ['jade']
            },
            scripts: {
                files: ['src/scripts/*.js'],
                tasks: ['uglify:dev']
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default task(s).
    grunt.registerTask('default', ['jade', 'uglify:staging']);
    grunt.registerTask('dev', ['jade', 'uglify:dev']);

};
