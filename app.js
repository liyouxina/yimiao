var e, o = require("@babel/runtime/helpers/interopRequireDefault")(require("@babel/runtime/regenerator")), t = require("@babel/runtime/helpers/asyncToGenerator"), i = require("5B3248C0AB6B1EDF3D5420C7DFFA09F3.js"), s = require("1C7894E0AB6B1EDF7A1EFCE7044B09F3.js");

App({
    onLaunch: (e = t(o.default.mark(function e() {
        var t = this;
        return o.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                i.updater(), wx.getSystemInfo({
                    success: function(e) {
                        console.log(e), "devtools" == e.platform && (t.NODE_ENV = "dev"), t.globalData.SDKVersion = e.SDKVersion, 
                        e.system && e.system.toLocaleLowerCase().match(/(windows)|(mac)|(linux)|(ubentu)|(centos)/) || i.compareVersion(e.SDKVersion, "2.13.2") < 0 && wx.showModal({
                            title: "微信版本过低",
                            content: "请将微信升级至8.0.9或以上版本",
                            showCancel: !1
                        }), t.globalData.windowWidth = e.windowWidth, t.globalData.windowHeight = e.windowHeight;
                    }
                }), wx.removeStorageSync("zfsw_povNotice");

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), function() {
        return e.apply(this, arguments);
    }),
    NODE_ENV: "pro",
    globalData: {
        SDKVersion: "",
        userInfo: null,
        hasUserInfo: !1,
        url: "https://app.zhifeishengwu.com/",
        header: {
            Cookie: ""
        },
        windowHeight: "",
        windowWidth: "",
        personPosition: "",
        questionnaireFlag: 0,
        subscribeInfo: {
            stime: "",
            etime: "",
            mxid: "",
            customerName: "",
            customerId: "",
            birthday: "",
            tel: "",
            cname: "",
            sex: "",
            idcard: "",
            pname: "",
            pid: "",
            FTime: "",
            subscribeTime: "",
            notice: ""
        },
        positionInfo: {
            status: -2
        }
    },
    dot: function() {
        s.info("dot"), s.setFilterMsg("dot");
    },
    jump: i.jump,
    getUserInfo: i.getUserInfo,
    callSubscribeMessage: i.callSubscribeMessage
});