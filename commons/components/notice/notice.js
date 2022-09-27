require("../../../4769CB31AB6B1EDF210FA336142B09F3.js"), getApp();

Component({
    behaviors: [],
    properties: {
        content: String,
        show: Boolean
    },
    data: {
        scrollTop: 0
    },
    lifetimes: {
        attached: function() {},
        moved: function() {},
        detached: function() {}
    },
    attached: function() {},
    ready: function() {},
    observers: {
        show: function() {}
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        close: function() {
            this.setData({
                show: !1
            });
        }
    }
});