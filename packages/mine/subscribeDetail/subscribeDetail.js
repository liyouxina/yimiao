getApp();

var t = require("../../../F1EEC043AB6B1EDF9788A844C16B09F3.js");

Page({
    data: {
        detail: ""
    },
    onLoad: function(t) {
        this.loadData(t.id);
    },
    onShow: function() {
        getApp().dot();
    },
    loadData: function(a) {
        var i = this;
        t.getSubcribeDetail({
            id: a
        }, function(t) {
            200 == t.data.status && i.setData({
                detail: t.data
            });
        });
    }
});