module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/css/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};
