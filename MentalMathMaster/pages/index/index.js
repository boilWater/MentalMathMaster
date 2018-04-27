//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    total:'1000',
    selectindex: '0',
    honourcolor: 'selectorcolor',
    perseverancecolor: 'unselectorcolor',
    prizecolor:'unselectorcolor',
    honourlists:[
      { index: '1', url: '../resources/images/dog.png', number: '10', name:'白亮' },
      { index: '2', url: '../resources/images/dog.png', number: '9', name:'JackJin' },
      { index: '3', url: '../resources/images/dog.png', number: '8', name:'JackJin'  },
      { index: '4', url: '../resources/images/dog.png', number: '7', name:'JackJin'  },
      { index: '5', url: '../resources/images/dog.png', number: '5', name:'JackJin'  },
      { index: '6', url: '../resources/images/dog.png', number: '2', name:'JackJin'  },
      { index: '7', url: '../resources/images/dog.png', number: '1', name:'JackJin'  },
    ],
    willpowerlists:[
      { index: '1', url: '../resources/images/dog.png', number: '10', name: '白亮' },
      { index: '2', url: '../resources/images/dog.png', number: '9', name: 'JackJin' },
      { index: '3', url: '../resources/images/dog.png', number: '8', name: 'JackJin' },
      { index: '4', url: '../resources/images/dog.png', number: '7', name: 'JackJin' },
      { index: '5', url: '../resources/images/dog.png', number: '5', name: 'JackJin' },
      { index: '6', url: '../resources/images/dog.png', number: '2', name: 'JackJin' },
      { index: '7', url: '../resources/images/dog.png', number: '1', name: 'JackJin' },
    ],
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
  // 选取荣耀帮
  honourTap: function(e) {
    if (this.data.selectindex != 0) {
      this.setData({
        selectindex: '0',
        honourcolor: 'selectorcolor',
        perseverancecolor: 'unselectorcolor',
        prizecolor: 'unselectorcolor'
      });
    }
  },
  //选取毅力榜
  perseveranceTap: function(e) {
    if (this.data.selectindex != 1) {
      this.setData({
        selectindex: '1',
        honourcolor: 'unselectorcolor',
        perseverancecolor: 'selectorcolor',
        prizecolor: 'unselectorcolor'
      });
    }
  },
  //选取娃娃奖品
  prizeTap: function(e) {
    if (this.data.selectindex != 2) {
      this.setData({
        selectindex: '2',
        honourcolor: 'unselectorcolor',
        perseverancecolor: 'unselectorcolor',
        prizecolor: 'selectorcolor'
      });
    }
  },
  goYyCenter: function(e) {
    //个人中心
    wx.navigateTo({
      url: '../mycenter/mycenter',
    })
  }
})
