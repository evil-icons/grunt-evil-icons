/*
 * grunt-evil-icons
 * https://github.com/outpunk/grunt-evil-icons
 *
 * Copyright (c) 2014 Alexander Madyankin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tmp: ['tmp/*']
    },

    evil_icons: {
      dist: {
        files: {
          'tmp/index.html': 'test/index.html'
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'evil_icons']);
  grunt.registerTask('default', ['jshint', 'test']);

};
