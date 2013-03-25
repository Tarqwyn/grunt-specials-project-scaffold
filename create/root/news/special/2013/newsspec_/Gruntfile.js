'use strict';
/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! NEWSSPEC-{%= newsspec_number %} - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '{%= description %}\n' +
        '*/'
    },
    lint: {
      files: ['grunt.js', 'js/*.js', 'test/*.js']
    },
    test: {
      files: ['test/*.js']
    },
    concat: {
      dist: {
        src: ['js/main.js'],
        dest: 'js/compiled/all.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'js/compiled/main.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: ['nodeunit','concat min']
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
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task.
  grunt.registerTask('default', 'lint test concat min');


};
