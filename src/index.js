var ap = require('autoprefixer'),
    Promise = require('bluebird');

module.exports = function() {
    ap = ap.apply(ap, arguments);
    return function prefix(inputs) {
        return Promise
            .all(inputs.map(function(f) { return f.asBuffer(); }))
            .then(function(buffers) {
                return ap.process(buffers.map(function(b) { return b.toString(); })).css;
            });
    };
};
