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
    recrivelists:[
      { url: '../resources/images/u579.png', name:'泰迪熊'},
      { url: '../resources/images/u579.png', name: '泰迪熊' },
      { url: '../resources/images/u579.png', name: '泰迪熊' },
      { url: '../resources/images/u579.png', name: '泰迪熊' },
      { url: '../resources/images/u579.png', name: '泰迪熊' },
      { url: '../resources/images/u579.png', name: '泰迪熊' },
      { url: '../resources/images/u579.png', name: '泰迪熊' },
    ],
    bottomIndex: '0',
    bottomImageSelect:'../resources/images/challenge-select.png',
    challengeColor: 'bottomColorSelect',
    bottomCenterSelect: '../resources/images/center-normal.png',
    centerColor: 'bottomColorunSelect',
    isToastShow: false,
    ruleList:[
      {index:'0', rule:'每天自动获取一次挑战机会，每天最多分享到10个不同的群，免费获得10次挑战机会。'},
      { index: '0', rule: '挑战过程中答题时间会随着挑战践行而缩短。'},
      { index: '0', rule: '在规定的时间内，连续判断对50道简单的数字加减题即为挑战成功。' },
      { index: '0', rule: '挑战成功后，您可以获取选娃娃（如挑选的娃娃取货择随机发货），填写领取信息，客服会在10个工作日内发货，娃娃包邮。' },
    ]
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
  inviteTap: function(e) {
    //邀请好友
    // wx.navigateTo({
    //   // url: '../customspass/customspass',
    // })
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
  startTap: function (e) {
    if (this.data.bottomIndex != 0) {
      this.setData({
        bottomIndex: '0',
        bottomImageSelect: '../resources/images/challenge-select.png',
        challengeColor: 'bottomColorSelect',
        bottomCenterSelect: '../resources/images/center-normal.png',
        centerColor: 'bottomColorunSelect'
      });
    };
    //开始挑战
    wx.navigateTo({
      url: '../customspass/customspass',
    })
  },
  goYyCenter: function(e) {
    if (this.data.bottomIndex != 1) {
      this.setData({
        bottomIndex: '1',
        bottomImageSelect: '../resources/images/challenge-normal.png',
        challengeColor: 'bottomColorunSelect',
        bottomCenterSelect: '../resources/images/center-select.png',
        centerColor: 'bottomColorSelect'
      });
    }
  },
  goReceiveTap: function(e) {
    wx.navigateTo({
      url: '../giftlist/giftlist',
    })
  },
  ruleTap: function() {
    this.setData({
      isToastShow: !this.data.isToastShow
    });
  },
  // 空的方法，阻止事件冒泡
  noFun() {
    console.log('阻止事件冒泡');
  },
  //联系客服
  goContactTap: function () {
    console.log('点击联系客服！')
  }
})
