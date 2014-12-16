/*
 * grunt-evil-icons
 * https://github.com/outpunk/grunt-evil-icons
 *
 * Copyright (c) 2014 Alexander Madyankin
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require("cheerio");
var fs      = require("fs");
var icons   = require("evil-icons");

module.exports = function(grunt) {

  grunt.registerMultiTask('evil_icons', 'Grunt plugin to use Evil Icons in your project', function() {

    var options = this.options({});

    this.files.forEach(function(file) {
      var src   = file.orig.src.toString();
      var html  = fs.readFileSync(src).toString();
      var $     = cheerio.load(html, {xmlMode: true});

      grunt.log.writeln("Iconizing " + file.dest + ".");

      $("body").prepend(icons.sprite);

      $("icon").each(function(i, el){
        var icon      = $(el);
        var name      = icon.attr("name");

        var params    = {};
        params.size   = icon.attr("size");
        params.class  = icon.attr("class");

        var html      = icons.icon(name, params);

        $(this).replaceWith(html);
      });


      fs.writeFileSync(file.dest, $.html());

      grunt.log.writeln(file.dest + ' created.');
    });
  });

};
