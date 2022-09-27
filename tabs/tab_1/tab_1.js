var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), a = getApp(), i = require("../../F1EEC043AB6B1EDF9788A844C16B09F3.js"), o = require("../../E2FC6523AB6B1EDF849A0D24C05B09F3.js"), s = require("../../1C7894E0AB6B1EDF7A1EFCE7044B09F3.js");

Page({
    data: {
        deceptiontipVisible: !0,
        positionFailed: !1,
        reloadVisible: !1,
        reload: !1,
        lat: 0,
        lng: 0,
        search: "",
        cityCode: "",
        region: [ "", "城市", "" ],
        povlist: "",
        name: "定位中...",
        searchTip: !0,
        isFocus: !1,
        customerid: 0,
        product: 0,
        gestureStime: 0,
        gestureSlen: 0,
        gestureDirect: "",
        tmVisable: !1,
        isSubScribe: !0,
        ischoose: !1,
        productSticky: !1,
        productStickyScrolltop: "",
        pList: [],
        cList: [],
        pActive: 0,
        cActive: 0,
        banners: [],
        bannerHeight: [],
        bannerActive: 0
    },
    onLoad: function(a) {
        var i = this;
        return e(t.default.mark(function e() {
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    i.setData({
                        customerid: a.id ? decodeURIComponent(a.id) : 0
                    }), i.reload(), i.getBanner(), i.makeProductStickyScrolltop();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, e);
        }))();
    },
    makeProductStickyScrolltop: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#home-product-swiper").boundingClientRect(), e.selectViewport().scrollOffset(), 
        e.exec(function(e) {
            t.setData({
                productStickyScrolltop: e[0].top
            });
        });
    },
    setChooseCity: function() {
        var t = this, e = a.globalData.personPosition, i = a.globalData.positionInfo;
        this.setData({
            lat: e.lat || i.lat,
            lng: e.lng || i.lng,
            region: i.region || [ "", "", "" ],
            name: i.name,
            cityCode: i.code
        }, function() {
            t.loadData();
        });
    },
    reload: function() {
        a.globalData.positionInfo.status = -2, this.data.reloadVisible && this.setData({
            reloadVisible: !1
        }), wx.removeStorageSync("clear_search"), this.getVaccines(), this.setPosition();
    },
    onShow: function() {
        var t = this;
        getApp().dot(), wx.getStorage({
            key: "clear_search",
            success: function(e) {
                e.data && wx.clearStorage({
                    key: "clear_search",
                    success: function(e) {
                        t.setData({
                            search: ""
                        }), t.setPosition();
                    }
                });
            },
            fail: function(e) {
                s.info("获取缓存失败"), s.setFilterMsg("clear_search"), t.data.reload && (t.setPosition(), 
                t.setData({
                    reload: !1
                }));
            }
        });
    },
    getBanner: function() {
        var t = this;
        return new Promise(function(e, a) {
            i.getBanner(function(a) {
                200 == a.data.status ? (t.setData({
                    banners: a.data.list
                }), e(!0)) : e(!1);
            }, function(t) {
                e(!1);
            });
        });
    },
    getVaccines: function() {
        var t = this;
        return new Promise(function(e, a) {
            i.getVaccines(function(a) {
                200 == a.data.status && a.data.list.length > 0 ? (a.data.list.unshift({
                    id: 0,
                    cname: "全部"
                }), t.setData({
                    pList: a.data.list
                }), e(!0)) : e(!1);
            }, function(a) {
                t.setData({
                    reloadVisible: !0
                }), e(!1);
            });
        });
    },
    setPosition: function() {
        var t = a.globalData.positionInfo, e = a.globalData.personPosition, i = this;
        t.status < 1 ? wx.getSetting({
            success: function(t) {
                if ("getSetting:ok" != t.errMsg || Boolean(t.authSetting) && null != t.authSetting["scope.userLocation"] && 1 != t.authSetting["scope.userLocation"]) wx.showModal({
                    title: "权限提示",
                    content: "请开启定位权限",
                    confirmText: "去设置",
                    showCancel: !1,
                    success: function(t) {
                        i.setData({
                            reload: !0
                        }), wx.openSetting();
                    }
                }); else {
                    var e = wx.getStorageSync("addr_storage");
                    e ? i.setPositionData(e) : (a.globalData.positionInfo.region = [ "", "", "" ], i.getLoaction());
                }
            },
            fail: function(t) {
                i.getPositionFaild();
            }
        }) : (e.code == t.code ? this.setData({
            ischoose: !1
        }) : this.setData({
            ischoose: !0
        }), this.setChooseCity());
    },
    setPositionData: function(t) {
        var e = 1e4 * t.result.ad_info.adcode.slice(0, 2), i = t.result.ad_info.district;
        a.globalData.positionInfo.name = i, a.globalData.positionInfo.status = 1, a.globalData.positionInfo.code = t.result.ad_info.adcode, 
        a.globalData.positionInfo.pCode = e, a.globalData.personPosition = {
            lat: t.latitude,
            lng: t.longitude,
            name: i,
            code: t.result.ad_info.adcode,
            pCode: e,
            status: 1
        }, t.expire_time = Date.parse(new Date()) + 72e5, wx.setStorageSync("addr_storage", t), 
        this.setChooseCity();
    },
    getPositionFaild: function() {
        this.setData({
            name: "定位失败",
            positionFailed: !0
        }, function() {
            a.globalData.positionInfo.status = -1;
        });
    },
    getLoaction: function() {
        var t = this;
        Boolean(a.globalData.personPosition) ? (a.globalData.positionInfo.status = 1, t.setData({
            lat: a.globalData.personPosition.lat,
            lng: a.globalData.personPosition.lng,
            name: a.globalData.positionInfo.name,
            positionFailed: !1
        }), t.loadData()) : (wx.showLoading({
            title: "定位加载中..."
        }), wx.getLocation({
            type: "gcj02",
            success: function(e) {
                wx.hideLoading(), wx.getStorage({
                    key: "addr_storage",
                    success: function(a) {
                        "getStorage:ok" == a.errMsg && a.data.latitude && a.data.expire_time && a.data.expire_time - Date.parse(new Date()) > 0 && a.data.latitude == e.latitude && a.data.longitude == e.longitude ? t.setPositionData(a.data) : t.reverseGeocoder(e.latitude, e.longitude);
                    },
                    fail: function() {
                        t.reverseGeocoder(e.latitude, e.longitude);
                    }
                });
            },
            fail: function(e) {
                wx.hideLoading(), t.getPositionFaild();
            }
        }));
    },
    reverseGeocoder: function(t, e) {
        var a = this;
        o.ReverseGeocoder(t, e).then(function(t) {
            a.setPositionData(t);
        }, function(t) {
            a.setData({
                isPosition: -1,
                name: "选择城市",
                povlist: []
            });
        });
    },
    loadData: function() {
        var t = this, e = this;
        e.setData({
            povlist: ""
        });
        var a = e.data.region, o = this.data.cityCode;
        this.data.ischoose || (a = [ "", "", "" ], o = 0);
        var s = {
            city: a,
            lat: e.data.lat,
            lng: e.data.lng,
            id: e.data.customerid,
            cityCode: o,
            product: this.data.product
        };
        i.getCDC(s, function(t) {
            if (200 == t.data.status) {
                var a = [];
                t.data.list.forEach(function(t) {
                    t.tags && t.tags.indexOf && -1 != t.tags.indexOf("可预约") ? t.isSubScribe = !0 : t.isSubScribe = !1, 
                    a.push(t);
                }), e.setData({
                    povlist: a
                });
            }
        }, function(e) {
            t.setData({
                reloadVisible: !0
            });
        });
    },
    jump: function(t) {
        var e = t.currentTarget.dataset.url;
        -1 != e.indexOf("tabs") ? wx.switchTab({
            url: e
        }) : wx.navigateTo({
            url: e
        });
    },
    search: function() {
        this.setData({
            isFocus: !0
        });
    },
    onsearch: function(t) {
        var e = t.detail.value, a = this.data.povlist;
        for (var i in a) a[i].cname.indexOf(e) < 0 ? a[i].hide = !0 : a[i].hide = !1;
        this.setData({
            povlist: a,
            search: e,
            searchTip: e.length < 1
        });
    },
    productChange: function(t) {
        this.setData({
            product: t.detail.product,
            pActive: t.detail.pActive,
            cActive: t.detail.cActive,
            cList: t.detail.cList,
            tmVisable: !1
        }), this.loadData();
    },
    tmchange: function(t) {
        this.setData({
            tmVisable: "false" != t.detail
        });
    },
    pagescroll: function(t) {
        var e = this.data.scrolltopVisible;
        !e && t.detail.scrollTop > 70 ? this.setData({
            scrolltopVisible: !0
        }) : e && t.detail.scrollTop <= 80 && this.setData({
            scrolltopVisible: !1
        });
        var a = this.data.productSticky, i = this.data.productStickyScrolltop;
        !a && t.detail.scrollTop >= i ? this.setData({
            productSticky: !0
        }) : a && t.detail.scrollTop < i && this.setData({
            productSticky: !1
        });
    },
    pagescrolltotop: function() {
        this.setData({
            pagescrolltop: "scrolltop",
            scrolltopVisible: !1,
            productSticky: !1
        });
    },
    checkcovid19: function() {
        a.getUserInfo(function(t) {
            !t.doctype || t.idcard.length < 5 ? wx.showToast({
                icon: "none",
                title: "请完善个人信息",
                success: function() {
                    wx.navigateTo({
                        url: "/packages/mine/profile/profile?idcardNsy=true&directurl=/packages/classification/covid19/covid19"
                    });
                }
            }) : wx.navigateTo({
                url: "/packages/classification/covid19/covid19"
            });
        }, function(t) {
            wx.showToast({
                icon: "none",
                title: "获取授权失败"
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: "知苗易约",
            path: "/tabs/tab_1/tab_1"
        };
    },
    bindBannerLoad: function(t) {
        var e = this.data.bannerHeight;
        e[t.currentTarget.dataset.index] = t.detail.height + 64, this.setData({
            bannerHeight: e
        });
    },
    setDeception: function() {
        this.setData({
            deceptiontipVisible: !1
        });
    }
});