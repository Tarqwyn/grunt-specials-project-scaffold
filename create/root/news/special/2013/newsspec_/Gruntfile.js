module.exports = function(grunt) { 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'js/compiled/main.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true
      },
      all: ['Gruntfile.js','js/*.js','js/module/*.js', 'test/*.js']
    },
        requirejs: {
        desktop:{
        options: {
          baseUrl: '.',
          paths: {
              'js': 'js/module',
              // Exclude the bootstrap as it's a parallel depedency of app
              'bootstrap': "js/bootstrap-desktop",
              'jquery-1':"empty:",
              'istats-1':"empty:",
              'lib':"js/lib"
          },
          name: 'js/app',
          out: 'js/compiled/desktop/app.js',
          optimize: 'uglify'
        }
      },
        mobile:{
          options: {            
          baseUrl: '.',
          paths:{
              'js': 'js/module',
              'lib':"js/lib",
              'bootstrap': "js/bootstrap",
              'vendor/ender/bonzo':"empty:",
              'vendor/ender/qwery-mobile':"empty:",
              'vendor/istats/istats':"empty:"
          },
          out:'js/compiled/mobile/app.js',
          name: 'js/app',
          optimize: 'uglify'
        }
      }
    },
  sass: {
    dist: {
      files: {
        'css/main.css': 'sass/main.scss'
      },
      options:{
        style :'compressed'
      }
    }
  },
 qunit: {
        all: {
          options: {
            urls: [
              'http://localhost:8888/news/special/{%= year %}/newsspec_{%= newsspec_number %}/test/test.html'
            ]
          }
        }
    },
   watch:{
    scripts:{
      files: 'js/**/*.js',
      tasks:['jshint'],
      options: {
        nospawn: true
      }
    },
    css:{
      files: 'sass/*.scss',
      tasks:['sass']
    }
  }
   
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['uglify','jshint','qunit','requirejs','sass']);

};