Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        this.setData({
            url: n.url
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().dot();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});