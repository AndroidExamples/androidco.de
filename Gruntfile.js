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
        watch: {
            templates:{
                files: ['src/views/*.jade'],
                tasks: ['jade']
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default task(s).
    grunt.registerTask('default', ['jade']);

};
