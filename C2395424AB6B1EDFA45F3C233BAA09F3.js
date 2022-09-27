var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.get_wx_user_info = function(e) {
    return c(n.get_wx_user_info(l(e)));
}, exports.default = void 0;

var n, r = e(require("@babel/runtime/regenerator.js")), t = require("@babel/runtime/helpers/asyncToGenerator.js");

require("976A0CB6AB6B1EDFF10C64B142AA09F3.js");

global.TextDecoder;

var a = global.TextEncoder, u = new Array(32).fill(void 0);

function o(e) {
    return u[e];
}

u.push(void 0, null, !0, !1);

var i = u.length;

function c(e) {
    var n = o(e);
    return function(e) {
        e < 36 || (u[e] = i, i = e);
    }(e), n;
}

var s = null;

function _() {
    return null !== s && s.buffer === n.memory.buffer || (s = new Uint8Array(n.memory.buffer)), 
    s;
}

function f(e, n) {
    return decodeURIComponent(escape(String.fromCharCode.apply(null, _().subarray(e, e + n))));
}

function l(e) {
    i === u.length && u.push(u.length + 1);
    var n = i;
    return i = u[n], u[n] = e, n;
}

var b = 0, g = new a("utf-8"), w = "function" == typeof g.encodeInto ? function(e, n) {
    return g.encodeInto(e, n);
} : function(e, n) {
    var r = g.encode(e);
    return n.set(r), {
        read: e.length,
        written: r.length
    };
};

function d(e, n, r) {
    if (void 0 === r) {
        var t = g.encode(e), a = n(t.length);
        return _().subarray(a, a + t.length).set(t), b = t.length, a;
    }
    for (var u = e.length, o = n(u), i = _(), c = 0; c < u; c++) {
        var s = e.charCodeAt(c);
        if (s > 127) break;
        i[o + c] = s;
    }
    if (c !== u) {
        0 !== c && (e = e.slice(c)), o = r(o, u, u = c + 3 * e.length);
        var f = _().subarray(o + c, o + u);
        c += w(e, f).written;
    }
    return b = c, o;
}

function p(e) {
    return null == e;
}

var y = null;

function h() {
    return null !== y && y.buffer === n.memory.buffer || (y = new Int32Array(n.memory.buffer)), 
    y;
}

function v(e, r, t, a) {
    var u = {
        a: e,
        b: r,
        cnt: 1,
        dtor: t
    }, o = function() {
        u.cnt++;
        try {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            return a.apply(void 0, [ u.a, u.b ].concat(r));
        } finally {
            0 == --u.cnt && (n.__wbindgen_export_2.get(u.dtor)(u.a, u.b), u.a = 0);
        }
    };
    return o.original = u, o;
}

var m = 32;

function x(e, r, t) {
    try {
        return c(n._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0123a7080625c250(e, r, function(e) {
            if (1 == m) throw new Error("out of js stack");
            return u[--m] = e, m;
        }(t)));
    } finally {
        u[m++] = void 0;
    }
}

function W(e, r) {
    try {
        return e.apply(this, r);
    } catch (e) {
        n.__wbindgen_exn_store(l(e));
    }
}

function A(e, n) {
    return k.apply(this, arguments);
}

function k() {
    return (k = t(r.default.mark(function e(n, t) {
        var a, u;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!("function" == typeof Response && n instanceof Response)) {
                    e.next = 23;
                    break;
                }
                if ("function" != typeof WXWebAssembly.instantiateStreaming) {
                    e.next = 15;
                    break;
                }
                return e.prev = 2, e.next = 5, WXWebAssembly.instantiateStreaming(n, t);

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                if (e.prev = 8, e.t0 = e.catch(2), "application/wasm" == n.headers.get("Content-Type")) {
                    e.next = 14;
                    break;
                }
                console.warn("`WXWebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WXWebAssembly.instantiate` which is slower. Original error:\n", e.t0), 
                e.next = 15;
                break;

              case 14:
                throw e.t0;

              case 15:
                return e.next = 17, n.arrayBuffer();

              case 17:
                return a = e.sent, e.next = 20, WXWebAssembly.instantiate(a, t);

              case 20:
                return e.abrupt("return", e.sent);

              case 23:
                return e.next = 25, WXWebAssembly.instantiate(n, t);

              case 25:
                return u = e.sent, e.abrupt("return", u);

              case 27:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ] ]);
    }))).apply(this, arguments);
}

function I(e) {
    return R.apply(this, arguments);
}

function R() {
    return (R = t(r.default.mark(function e(t) {
        var a, u, i, s;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return (a = {}).wbg = {}, a.wbg.__wbindgen_object_drop_ref = function(e) {
                    c(e);
                }, a.wbg.__wbindgen_cb_drop = function(e) {
                    var n = c(e).original;
                    if (1 == n.cnt--) return n.a = 0, !0;
                    return !1;
                }, a.wbg.__wbindgen_string_new = function(e, n) {
                    return l(f(e, n));
                }, a.wbg.__wbg_getUserInfo_7ec6290a53c7a5b5 = function(e) {
                    wx.getUserInfo(o(e));
                }, a.wbg.__wbindgen_string_get = function(e, r) {
                    var t = o(r), a = "string" == typeof t ? t : void 0, u = p(a) ? 0 : d(a, n.__wbindgen_malloc, n.__wbindgen_realloc), i = b;
                    h()[e / 4 + 1] = i, h()[e / 4 + 0] = u;
                }, a.wbg.__wbg_get_4d0f21c2f823742e = function() {
                    return W(function(e, n) {
                        return l(Reflect.get(o(e), o(n)));
                    }, arguments);
                }, a.wbg.__wbg_new_0b83d3df67ecb33e = function() {
                    return l(new Object());
                }, a.wbg.__wbg_call_346669c262382ad7 = function() {
                    return W(function(e, n, r) {
                        return l(o(e).call(o(n), o(r)));
                    }, arguments);
                }, a.wbg.__wbg_set_82a4e8a85e31ac42 = function() {
                    return W(function(e, n, r) {
                        return Reflect.set(o(e), o(n), o(r));
                    }, arguments);
                }, a.wbg.__wbindgen_throw = function(e, n) {
                    throw new Error(f(e, n));
                }, a.wbg.__wbindgen_rethrow = function(e) {
                    throw c(e);
                }, a.wbg.__wbindgen_closure_wrapper19 = function(e, n, r) {
                    return l(v(e, n, 3, x));
                }, e.next = 16, A(t, a);

              case 16:
                return u = e.sent, i = u.instance, s = u.module, n = i.exports, I.__wbindgen_wasm_module = s, 
                e.abrupt("return", n);

              case 22:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

var C = I;

exports.default = C;