fez-autoprefixer
================

[Autoprefixer](https://github.com/ai/autoprefixer) plugin for [Fez](http://fez.github.io) build system.

## Install

Via npm

```
› npm i --save-dev fez-autoprefixer
```

## Usage

```js
var fez = require('fez'),
  ap = require('fez-autoprefixer');

exports.build = function build(spec) {
  spec.with('*.css').each(function(file) {
    spec.rule(file, file.patsubst('%.css', '_%.css'), ap());
  });
};

exports.default = exports.build;

fez(module);
```

### ap(..browsers)

See [Autoprefixer's documentation](https://github.com/ai/autoprefixer#browsers) for list of support browsers.

## TODO

* support for all Autoprefixer's options

## License

WTFPL

