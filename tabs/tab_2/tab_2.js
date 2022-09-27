var t = getApp(), e = require("../../F1EEC043AB6B1EDF9788A844C16B09F3.js"), s = require("../../D649A7F1AB6B1EDFB02FCFF6221B09F3.js");

Page({
    data: {
        windowHeight: t.globalData.windowHeight,
        windowWidth: t.globalData.windowWidth,
        isSuccess: !1,
        userInfo: "",
        reloadVisible: !1,
        sdkVersion: "",
        avatarUrl: ""
    },
    onShow: function() {
        getApp().dot(), this.reload();
    },
    jump: function(t) {
        var e = t.currentTarget.dataset.url;
        -1 != e.indexOf("tabs") ? wx.switchTab({
            url: e
        }) : wx.navigateTo({
            url: e
        });
    },
    login: function() {
        e.getUser();
    },
    reload: function() {
        var e = this;
        t.globalData.userInfo ? this.setData({
            userInfo: t.globalData.userInfo,
            reloadVisible: !1
        }) : t.getUserInfo(function(t) {
            e.setData({
                userInfo: t,
                reloadVisible: !1
            });
        }, function(t) {
            e.setData({
                reloadVisible: !0
            });
        });
    },
    subscribe: function() {
        wx.requestSubscribeMessage({
            tmplIds: s.subscibeId,
            success: function(t) {
                "accept" == t[s.subscibeId] && wx.showToast({
                    title: "订阅成功"
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "操作提示",
                    content: "需开启【消息订阅】功能",
                    success: function(t) {
                        t.confirm && wx.openSetting();
                    }
                });
            }
        });
    },
    onChooseAvatar: function(t) {
        console.log(t), this.setData({
            avatarUrl: t.detail.avatarUrl
        });
    }
});