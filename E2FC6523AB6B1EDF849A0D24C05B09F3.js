var e, n = require("D649A7F1AB6B1EDFB02FCFF6221B09F3.js"), i = require("45BAC1D3AB6B1EDF23DCA9D498BA09F3.js");

null == e && (e = new i({
    key: n.qqmapkey
}));

var o = function(n, i) {
    return new Promise(function(o, t) {
        e.reverseGeocoder({
            location: {
                latitude: n,
                longitude: i
            },
            success: function(e) {
                e.latitude = n, e.longitude = i, o(e);
            },
            fail: function(e) {
                t(e);
            }
        });
    });
};

module.exports = {
    ReverseGeocoder: function(e, n) {
        return new Promise(function(i, t) {
            o(e, n).then(function(e) {
                i(e);
            }, function(e) {
                t(e);
            });
        });
    }
};