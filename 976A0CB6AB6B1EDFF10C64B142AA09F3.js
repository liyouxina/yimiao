var e = require("@babel/runtime/helpers/typeof.js");

!function(e) {
    function r(e) {
        var r = e.charCodeAt(0), o = 1114112, t = 0, a = 0 | e.length, n = "";
        switch (r >>> 4) {
          case 12:
          case 13:
            t = 128 > (o = (31 & r) << 6 | 63 & e.charCodeAt(1)) ? 0 : 2;
            break;

          case 14:
            t = 2048 > (o = (15 & r) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2)) ? 0 : 3;
            break;

          case 15:
            30 == r >>> 3 && (t = 65536 > (o = (7 & r) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | e.charCodeAt(3)) ? 0 : 4);
        }
        for (t && (a < t ? t = 0 : 65536 > o ? n = f(o) : 1114112 > o ? n = f(55296 + ((o = o - 65664 | 0) >>> 10) | 0, 56320 + (1023 & o) | 0) : t = 0); t < a; t = t + 1 | 0) n += "�";
        return n;
    }
    function o() {}
    function t(e) {
        var r = 0 | e.charCodeAt(0);
        if (55296 <= r && 56319 >= r) if (56320 <= (e = 0 | e.charCodeAt(1)) && 57343 >= e) {
            if (65535 < (r = (r << 10) + e - 56613888 | 0)) return f(240 | r >>> 18, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r);
        } else r = 65533;
        return 2047 >= r ? f(192 | r >>> 6, 128 | 63 & r) : f(224 | r >>> 12, 128 | r >>> 6 & 63, 128 | 63 & r);
    }
    function a() {}
    var f = String.fromCharCode, n = {}.toString, c = e.SharedArrayBuffer, d = c ? n.call(c) : "", u = e.Uint8Array, i = u || Array, l = n.call((u ? ArrayBuffer : i).prototype);
    c = a.prototype;
    var h = e.TextEncoder;
    o.prototype.decode = function(e) {
        var o = e && e.buffer || e, t = n.call(o);
        if (t !== l && t !== d && void 0 !== e) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
        e = u ? new i(o) : o, o = "", t = 0;
        for (var a = 0 | e.length; t < a; t = t + 32768 | 0) o += f.apply(0, e[u ? "subarray" : "slice"](t, t + 32768 | 0));
        return o.replace(/[\xc0-\xff][\x80-\xbf]+|[\x80-\xff]/g, r);
    }, e.TextDecoder || (e.TextDecoder = o), c.encode = function(e) {
        for (var r = 0 | (e = void 0 === e ? "" : ("" + e).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, t)).length, o = new i(r), a = 0; a < r; a = a + 1 | 0) o[a] = e.charCodeAt(a);
        return o;
    }, h || (e.TextEncoder = a);
}("" + void 0 == ("undefined" == typeof global ? "undefined" : e(global)) ? "" + void 0 == ("undefined" == typeof self ? "undefined" : e(self)) ? void 0 : self : global);