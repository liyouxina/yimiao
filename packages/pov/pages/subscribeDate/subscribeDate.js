var a = require("../../../../4769CB31AB6B1EDF210FA336142B09F3.js"), t = require("../../../../ED412283AB6B1EDF8B274A845D6B09F3.js"), e = require("../../../../F1EEC043AB6B1EDF9788A844C16B09F3.js"), i = getApp();

Page({
    data: {
        mt: [ "日", "一", "二", "三", "四", "五", "六" ],
        days: "",
        dfd: "请选择预约时间",
        partLoading: !1,
        timeData: "",
        reloadVisible: !1,
        dfdVisible: !1
    },
    onLoad: function(a) {
        if (a.pid && a.pname && a.IdcardLimit) i.globalData.subscribeInfo.pid = a.pid, i.globalData.subscribeInfo.pname = a.pname, 
        i.globalData.subscribeInfo.IdcardLimit = a.IdcardLimit; else if (!i.globalData.subscribeInfo.pid || i.globalData.subscribeInfo.pname || i.globalData.subscribeInfo.IdcardLimit) return void this.setData({
            days: []
        });
    },
    onShow: function() {
        var a = this;
        getApp().dot(), setTimeout(function() {
            a.reload();
        }, 300);
    },
    reload: function() {
        var t = this, s = a.dateFormate().split("-");
        e.getSubscribeMonth({
            pid: i.globalData.subscribeInfo.pid,
            id: i.globalData.subscribeInfo.customerId,
            month: s[0] + s[1]
        }, function(a) {
            var e = [], i = t.formateData(a.data);
            Object.keys(i).forEach(function(a) {
                var s = i[a];
                e.push({
                    t: a,
                    d: t.makeDate(a, s)
                });
            }), t.setData({
                days: e,
                reloadVisible: !1
            });
        }, function(a) {
            t.setData({
                reloadVisible: !0
            });
        });
    },
    lower: function() {},
    formateData: function(a) {
        var t = a.list;
        if (t) {
            var e = {};
            return t.forEach(function(a) {
                var t = a.date.split("-")[0] + "-" + a.date.split("-")[1];
                e[t] || (e[t] = {}), e[t][a.date] || (e[t][a.date] = {}), e[t][a.date] = a.enable;
            }), e;
        }
    },
    makeDate: function(e, i) {
        var s = a.getDate(e + "-01"), r = a.getDay(e + "-01"), d = a.dn().getTime(), n = Math.ceil((s + r) / 7);
        r >= 5 && s >= 31 && (n = Math.ceil((s + 7) / 7));
        for (var o = [], l = 0; l < n; l++) {
            for (var u = [], c = 0; c < 7; c++) {
                var b = {
                    n: t.number2str(7 * l + c - r + 1),
                    s: 2,
                    d: e + "-" + t.number2str(7 * l + c - r + 1)
                };
                b.n > s || r >= c + 1 && 0 == l ? u.push({
                    n: "",
                    s: 0,
                    d: ""
                }) : (null != i[b.d] ? b.s = i[b.d] ? 2 : 1 : b.s = 0, a.dn(b.d + " 23:59:59").getTime() < d && (b.s = 0), 
                u.push(b));
            }
            o.push(u);
        }
        return o;
    },
    setDate: function(a) {
        var t = this, s = a.currentTarget.dataset.date;
        this.setData({
            dfd: s,
            partLoading: !0,
            dfdVisible: !0
        }), e.getSubscribeTime({
            pid: i.globalData.subscribeInfo.pid,
            id: i.globalData.subscribeInfo.customerId,
            scdate: s
        }, function(a) {
            t.setData({
                partLoading: !1
            });
            var e = [];
            (a.data || a.data.list) && (console.log(a.data), a.data.list.forEach(function(a) {
                var t = a, i = a.StartTime.split(":"), s = a.EndTime.split(":");
                t.StartTime = [ i[0], i[1] ].join(":"), t.EndTime = [ s[0], s[1] ].join(":"), e.push(t);
            }), a.data.list = e, t.setData({
                timeData: a.data
            }));
        }, function(a) {});
    },
    redirectTo: function(a) {
        var t = a.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    dfdHandle: function() {
        this.setData({
            dfdVisible: !1
        });
    }
});