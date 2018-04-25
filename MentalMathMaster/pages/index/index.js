//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    total:'1000',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  startTap: function(e) {
    //开始挑战
    wx.navigateTo({
      url: '../customspass/customspass',
    })
  },
  inviteTap: function(e) {
    //邀请好友
    wx.navigateTo({
      url: '',
    })
  },
  honourTap: function(e) {
    //荣誉榜
    wx.navigateTo({
      url: '',
    })
  },
  perseveranceTap: function(e) {
    //毅力榜
    wx.navigateTo({
      url: '',
    })
  },
  prizeTap: function(e) {
    //挖完奖品
    wx.navigateTo({
      url: '',
    })
  },
  goYyCenter: function(e) {
    //个人中心
    wx.navigateTo({
      url: '../mycenter/mycenter',
    })
  }
})
