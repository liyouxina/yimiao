require("../../../@babel/runtime/helpers/Arrayincludes");

var t = getApp(), e = (require("../../../1C7894E0AB6B1EDF7A1EFCE7044B09F3.js").info, 
require("../../../F1EEC043AB6B1EDF9788A844C16B09F3.js")), a = require("../../../ED412283AB6B1EDF8B274A845D6B09F3.js");

Page({
    data: {
        sexIndex: 1,
        certIndex: "",
        sexList: [ "男", "女" ],
        certBase: [],
        certList: [],
        infoForm: {
            sex: 2,
            birthday: ""
        },
        directurl: "",
        idcardNsy: !1
    },
    onLoad: function(t) {
        this.getCertType(), t && "true" == t.idcardNsy && (t.directurl ? this.setData({
            idcardNsy: !0,
            directurl: t.directurl
        }) : this.setData({
            idcardNsy: !0
        }));
    },
    onShow: function() {
        getApp().dot();
        var e = t.globalData.userInfo;
        e && this.setData({
            infoForm: e,
            sexIndex: e.sex ? e.sex - 1 : 0
        });
    },
    getCertType: function() {
        var t = this;
        e.getCertType(function(e) {
            var a = [], i = "";
            e.data.list.length > 0 && (e.data.list.forEach(function(e, d) {
                a.push(e.text), t.data.infoForm.doctype == e.id && (i = d);
            }), t.setData({
                certBase: e.data.list,
                certList: a,
                certIndex: i
            }));
        });
    },
    bindInput: function(t) {
        var e = t.detail.value, a = t.currentTarget.dataset.key, i = this.data.infoForm;
        i[a] = e.trim(), this.setData({
            infoForm: i
        });
    },
    bindBlur: function(t) {
        var e = t.detail.value.replace(/\s+/g, ""), a = t.currentTarget.dataset.key, i = this.data.infoForm;
        "idcard" == a && 18 == e.length && 1 == i.doctype ? (i.sex = parseInt(e[17]) % 2 == 0 ? 2 : 1, 
        this.setData({
            infoForm: i,
            sexIndex: i.sex - 1
        })) : (i[a] = e, this.setData({
            infoForm: i
        }));
    },
    bindSexSelect: function(t) {
        var e = this.data.infoForm;
        e.sex = 1 * t.detail.value + 1, this.setData({
            infoForm: e,
            sexIndex: 1 * t.detail.value
        });
    },
    bindBirthSelect: function(t) {
        var e = this.data.infoForm;
        e.birthday = t.detail.value.trim(), this.setData({
            infoForm: e
        });
    },
    bindCertSelect: function(t) {
        var e = this.data.infoForm;
        e.doctype = this.data.certBase[t.detail.value].id, this.setData({
            certIndex: t.detail.value,
            infoForm: e
        });
    },
    submitProfile: function() {
        var i = this.data.infoForm;
        !i.cname || "" == i.cname || i.cname.length < 1 ? wx.showModal({
            title: "提示",
            content: "请填写姓名",
            showCancel: !1
        }) : !i.doctype && i.idcard && i.idcard.length ? wx.showModal({
            title: "提示",
            content: "请选择有效的证件类型",
            showCancel: !1
        }) : 1 == i.doctype && i.idcard && i.idcard.length && !a.IdcardVerdify(i.idcard) || 1 == i.doctype && this.data.idcardNsy && !a.IdcardVerdify(i.idcard) || 2 == i.doctype && i.idcard && i.idcard.length && !a.passportVerify(i.idcard) || 2 == i.doctype && this.data.idcardNsy && !a.passportVerify(i.idcard) || ![ 1, 2 ].includes(i.doctype) && this.data.idcardNsy && i.idcard.length < 1 ? wx.showModal({
            title: "提示",
            content: "证件号码有误",
            showCancel: !1
        }) : (1 == i.doctype && (i.idcard.length < 1 ? (i.doctype = "", this.setData({
            infoForm: i
        })) : i.birthday = a.IdcardBirthday(i.idcard)), i.birthday && /^\d{4}\-\d{2}-\d{2}$/.test(i.birthday) ? 1 == i.sex || 2 == i.sex ? a.IsPhone(i.tel) ? (i.idcard || (i.doctype = 0), 
        wx.showLoading({
            title: "保存中"
        }), e.putUser(i, function(e) {
            200 == e.data.status ? (t.globalData.userInfo = i, t.getUserInfo(function(e) {
                wx.showToast({
                    title: "设置成功",
                    duration: 1e3
                }), t.globalData.userInfo = e, setTimeout(function() {
                    wx.navigateBack();
                }, 1e3);
            }, function(t) {
                uni.showModal({
                    title: "设置失败",
                    content: t.msg,
                    showCancel: !1
                });
            })) : wx.showToast({
                title: e.data.msg,
                duration: 1500
            });
        })) : wx.showModal({
            title: "提示",
            content: "请填写正确的手机号码",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请选择性别",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写出生日期",
            showCancel: !1
        }));
    },
    jump: function(e) {
        t.jump(e.currentTarget.dataset.url);
    }
});