module.exports = function(grunt) {
  grunt.initConfig({
    php: {
        dist: {
            options: {
                port: 5000
            }
        }
    },
    sass: {
        options: {
            quiet: true
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'sass',
            src: ['**/*.scss'],
            dest: 'assets/styles',
            ext: '.css'
          }]
        }
    },
    concat: {
      js: {
        src: ['assets/scripts/*.js'],
        dest: 'assets/build/scripts/build.js',
        options: {
          separator: ';'
        }
      },
    },
    uglify: {
      js: {
        src: 'assets/build/scripts/build.js',
        dest: 'assets/build/scripts/build.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/styles',
          src: ['*.css'],
          dest: 'assets/build/styles',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['assets/scripts/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['sass/**/*.scss', 'assets/styles/*.css', 'assets/build/styles/main.min.scss'],
        tasks: ['sass', 'cssmin']
      },
      html: {
        files: ['index.php', 'includes/*.php']
      }
    }
  });

  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
  grunt.registerTask('server', ['php', 'watch']);
};
