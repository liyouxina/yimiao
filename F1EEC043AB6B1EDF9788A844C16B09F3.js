var e = require("@babel/runtime/helpers/interopRequireWildcard.js"), t = require("@babel/runtime/helpers/interopRequireDefault.js");

require("@babel/runtime/helpers/Arrayincludes.js");

var s = t(require("@babel/runtime/regenerator.js")), a = require("@babel/runtime/helpers/asyncToGenerator.js"), r = e(require("C2395424AB6B1EDFA45F3C233BAA09F3.js")), n = require("BC484A73AB6B1EDFDA2E2274CFEA09F3.js"), i = require("1C7894E0AB6B1EDF7A1EFCE7044B09F3.js"), c = require("14070D12AB6B1EDF72616515029A09F3.js"), o = "", u = 0, l = "", d = "", f = function() {
    var e = a(s.default.mark(function e(t) {
        var a, r;
        return s.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                !1 === t.loadingBar ? wx.showNavigationBarLoading() : 0 === t.loadingBar || wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), t.data = t.data ? t.data : {}, a = t.header || {
                    "content-type": "application/json"
                }, r = this, a.Cookie = o, a.zftsl = h(), wx.request({
                    url: t.url,
                    data: t.data,
                    method: "GET",
                    dataType: t.dataType || "json",
                    header: a,
                    responseType: t.responseType || "text",
                    success: function(e) {
                        if (p(e.header), 200 == e.statusCode && w(t.url)) try {
                            if ("string" == typeof e.data) {
                                var s = (a = e.data, n = c.enc.Utf8.parse(l), o = c.enc.Hex.parse(a), u = c.enc.Base64.stringify(o), 
                                c.AES.decrypt(u, n, {
                                    iv: d,
                                    mode: c.mode.CBC,
                                    padding: c.pad.Pkcs7
                                }).toString(c.enc.Utf8));
                                s && (e.data = JSON.parse(s));
                            }
                        } catch (s) {
                            console.error(s), i.error(s, t.url), i.setFilterMsg("AES_Err"), e.data = JSON.parse(e.data);
                        }
                        var a, n, o, u;
                        408 == e.statusCode || e.data.status && 408 == e.data.status ? r.getSessionId(function(e) {
                            r.get(t);
                        }) : t.success(e);
                    },
                    fail: function(e) {
                        console.error(t.url, t.data, e), i.error(e, t.url), i.setFilterMsg("request"), t.fail && t.fail(e), 
                        t.fail || wx.showModal({
                            title: "网络繁忙",
                            confirmText: "继续等待",
                            success: function(e) {
                                e.confirm && r.get(t);
                            }
                        });
                    },
                    complete: function(e) {
                        if (e.header && e.header.Date) {
                            var s = Date.parse(new Date(e.header.Date.replace(/-/g, "/")));
                            u = s - Date.parse(new Date());
                        }
                        !1 === t.loadingBar ? wx.hideNavigationBarLoading() : wx.hideLoading(), t.complete;
                    }
                });

              case 7:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), g = function() {
    var e = a(s.default.mark(function e(t) {
        var a, r, n;
        return s.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (a = this, !1 === t.loadingBar ? wx.showNavigationBarLoading() : wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), (r = t.header || {
                    "content-type": "application/json"
                }).Cookie = o, r.zftsl = h(), n = t.data, !1 === t.url.includes("/api/User/OrderPost")) {
                    e.next = 10;
                    break;
                }
                return e.next = 9, b(JSON.stringify(t.data));

              case 9:
                n = e.sent;

              case 10:
                wx.request({
                    url: t.url,
                    data: n,
                    method: "POST",
                    dataType: t.options || "json",
                    header: r,
                    success: function(e) {
                        p(e.header), 408 == e.statusCode || e.data.status && 408 == e.data.status ? a.getSessionId(function(e) {
                            a.post(t);
                        }) : t.success(e);
                    },
                    fail: function(e) {
                        i.error(e, t.url), i.setFilterMsg("request"), e.errMsg && -1 != e.errMsg.indexOf("timeout") ? wx.showModal({
                            title: "网络繁忙",
                            confirmText: "继续等待",
                            showCancel: !1,
                            success: function(e) {
                                a.post(t);
                            }
                        }) : t.fail && t.fail(e);
                    },
                    complete: function(e) {
                        if (e.header && e.header.Date) {
                            var s = Date.parse(new Date(e.header.Date.replace(/-/g, "/")));
                            u = s - Date.parse(new Date());
                        }
                        !1 === t.loadingBar ? wx.hideNavigationBarLoading() : wx.hideLoading(), t.complete;
                    }
                });

              case 11:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), h = function() {
    var e = (Date.parse(new Date()) + u) / 1e3 + "";
    return c.MD5("zfsw_" + e.substring(0, e.length - 1)).toString();
}, p = function(e) {
    e && e["Set-Cookie"] && (o = e["Set-Cookie"]);
};

function b(e) {
    return new Promise(function(t, s) {
        var a = c.enc.Utf8.parse(l);
        t(c.AES.encrypt(e, a, {
            iv: d,
            mode: c.mode.CBC,
            padding: c.pad.Pkcs7
        }).ciphertext.toString());
    });
}

function w(e) {
    return !1 !== e.includes("HandlerSubscribe.ashx?act=CaptchaVerify") || !1 !== e.includes("HandlerSubscribe.ashx?act=GetCustSubscribeDateDetail");
}

var m = function() {
    var e = a(s.default.mark(function e(t, a) {
        var i;
        return s.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, wx.login();

              case 2:
                return i = e.sent, e.next = 5, (0, r.default)("/libs/hello_wasm_bg.wasm");

              case 5:
                (0, r.get_wx_user_info)(function(e) {
                    l = e.signature, d = c.enc.Utf8.parse(e.AESIv), g({
                        url: n.auth + "&code=".concat(i.code),
                        data: {
                            rawdata: e.rawData
                        },
                        success: function(e) {
                            200 == e.data.status ? (o = "ASP.NET_SessionId=" + e.data.sessionId, t(o)) : 201 == e.data.status ? (o = "ASP.NET_SessionId=" + e.data.sessionId, 
                            wx.showModal({
                                title: "完善信息",
                                content: "需填写个人信息，才能预约",
                                showCancel: !1,
                                success: function() {
                                    wx.navigateTo({
                                        url: "/packages/mine/profile/profile"
                                    });
                                }
                            })) : wx.showModal({
                                title: "完善信息",
                                content: e.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(e) {
                            console.error("请求云端服务器错误：", e), a(e);
                        }
                    }, !0);
                });

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(t, s) {
        return e.apply(this, arguments);
    };
}();

module.exports = {
    get: f,
    post: g,
    getBanner: function(e, t) {
        this.get({
            loadingBar: !1,
            url: n.getBanner,
            success: e,
            fail: t
        });
    },
    checkSessionId: function(e) {
        e(!!o);
    },
    getSessionId: m,
    getUserinfo: function(e, t) {
        this.get({
            url: n.user,
            data: {},
            success: e,
            fail: function(e) {
                t(e);
            }
        });
    },
    getCDC: function(e, t, s) {
        this.get({
            loadingBar: !1,
            url: n.customerList,
            data: e,
            success: t,
            fail: s
        });
    },
    getCovid19CDC: function(e, t, s) {
        this.get({
            loadingBar: !1,
            url: n.customerCov19List,
            data: e,
            success: t,
            fail: s
        });
    },
    getSubcribeList: function(e) {
        this.get({
            url: n.userSubcribeList,
            success: e
        });
    },
    putUser: function(e, t) {
        this.get({
            url: n.putUser,
            data: e,
            success: t
        });
    },
    getCDCDetail: function(e, t, s) {
        var a = "";
        Object.keys(e).forEach(function(t) {
            a += "&" + t + "=" + e[t];
        }), this.get({
            url: n.getCDCDetail + a,
            success: t,
            fail: s
        });
    },
    getVaccines: function(e, t) {
        this.get({
            loadingBar: !1,
            url: n.getVaccines,
            success: e,
            fail: t
        });
    },
    getPovDetail: function(e, t, s) {
        this.get({
            loadingBar: !1,
            url: n.getPovDetail + e,
            success: t,
            fail: s
        });
    },
    getVaccineCates: function(e, t) {
        this.get({
            url: n.getVaccineCates + e,
            success: t
        });
    },
    getSubscribeMonth: function(e, t, s) {
        var a = "";
        Object.keys(e).forEach(function(t) {
            a += "&" + t + "=" + e[t];
        }), this.get({
            url: n.getSubscribeMonth_news + a,
            success: t,
            fail: s
        });
    },
    getSubscribeTime: function(e, t, s) {
        var a = "";
        Object.keys(e).forEach(function(t) {
            a += "&" + t + "=" + e[t];
        }), this.get({
            url: n.getSubscribeTime + a,
            success: t,
            fail: s
        });
    },
    submitScribe: function(e, t, s) {
        this.post({
            loadingBar: 0,
            url: n.submitScribe30,
            data: e,
            success: t,
            complete: s
        });
    },
    cancelScribe: function(e, t) {
        var s = "";
        Object.keys(e).forEach(function(t) {
            s += "&" + t + "=" + e[t];
        }), this.get({
            url: n.cancelScribe + s,
            success: t
        });
    },
    getSubcribeDetail: function(e, t) {
        var s = "";
        Object.keys(e).forEach(function(t) {
            s += "&" + t + "=" + e[t];
        }), this.get({
            url: n.getSubcribeDetail + s,
            success: t
        });
    },
    getQuestionnaire: function(e, t) {
        var s = "";
        Object.keys(e).forEach(function(t) {
            s += "&" + t + "=" + e[t];
        }), this.get({
            url: n.getQuestionnaire + s,
            success: t
        });
    },
    setQuestionnaire: function(e, t) {
        this.post({
            url: n.setQuestionnaire,
            data: e,
            success: t
        });
    },
    comfirmVaccin: function(e, t) {
        this.get({
            url: n.comfirmVaccin + e.id,
            success: t
        });
    },
    getOrderStatus: function(e) {
        this.get({
            loadingBar: 0,
            url: n.getOrderStatus,
            success: e
        });
    },
    getVerifyCode: function(e) {
        this.get({
            url: n.getVerifyCode + "?t=" + Date.parse(new Date()) + "&format=base64",
            success: e
        });
    },
    getCertType: function(e) {
        this.get({
            url: n.getCertType,
            success: e
        });
    },
    getQuestionnaireCovid19: function(e) {
        this.get({
            url: n.GetCov19Question,
            success: e
        });
    },
    setQuestionnaireCovid19: function(e, t) {
        this.post({
            url: n.SetCov19Question,
            data: e,
            success: t
        });
    },
    setUserCancel: function(e) {
        this.get({
            url: n.setUserCancel,
            success: e
        });
    },
    setSessionId: function(e) {
        o = e;
    }
};