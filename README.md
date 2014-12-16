# grunt-evil-icons

This plugin allows to use [Evil Icons] in your project with Grunt.

[Evil Icons]: http://evil-icons.io

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well
as install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-evil-icons --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-evil-icons');
```

## The "evil_icons" task

### Overview
In your project's Gruntfile, add a section named `evil_icons` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  evil_icons: {
    dist: {
      "build/index.html": "src/index.html"
    },
  },
});
```

### Using icons
Once you have added the `evil_icons` section to your Gruntfile, you can use
the icons in your html with the `icon` tag:

```html
<icon name="ei-archive" />
<icon name="ei-chart" size="s" />
<icon name="ei-check" size="m" />
<icon name="ei-cart" size="l" class="foo" />
```

The sprite will be added to your html automatically, and the `icon` tags will
be replaced with actual SVG code.

The only thing you have to add to your code explicitly is the stylesheet:
```html
<link rel="stylesheet" href="../node_modules/evil-icons/assets/css/evil-icons.css">
```


<p align="center"><a href="https://evilmartians.com/">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a></p>
