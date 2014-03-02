var fez = require('fez'),
    concat = require('fez-concat'),
    ap = require('../');

exports.css = function css(spec) {
    spec.with(['a.css', 'b.css']).each(function(file) {
        spec.rule(file, file.patsubst('%.css', '_%.css'), ap());
    });
};

exports.build = function build(spec) {
    spec.use(exports.css);

    spec.with('_*.css').all(function(files) {
        spec.rule(files, 'dist/main.css', concat());
    });
};

exports.default = exports.build;

fez(module);
