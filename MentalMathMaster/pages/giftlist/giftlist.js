// pages/giftlist/giftlist.js
// var selectEnable;

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { name: '你好a-0', url:'../resources/images/u579.png' },
      { name: 'aaa-1', url:'../resources/images/u579.png' },
      { name: 'aaa-2', url: '../resources/images/u579.png'},
      { name: 'aaa-3', url: '../resources/images/u579.png'},
      { name: 'aaa-4', url: '../resources/images/u579.png'},
      { name: 'aaa-5', url: '../resources/images/u579.png'},
      { name: 'aaa-6', url: '../resources/images/u579.png'},
      { name: 'aaa-7', url: '../resources/images/u579.png'}
    ],
    lists: [
      { giftname: 'aaa-0', url: '../resources/images/u579.png', applytime: '2018-4-27', sendtime: ' 2018-4 - 27', senddetail: '中通快递', receivor: 'JackJin', telephone: '15875391643', address:'中华广场 A座 15 楼 久邦信息科技' },
      { giftname: 'aaa-0', url: '../resources/images/u579.png', applytime: '2018-4-27', sendtime: ' 2018-4 - 27', senddetail: '中通快递', receivor: 'JackJin', telephone: '15875391643', address: '中华广场 A座 15 楼 久邦信息科技' },
      { giftname: 'aaa-0', url: '../resources/images/u579.png', applytime: '2018-4-27', sendtime: ' 2018-4 - 27', senddetail: '中通快递', receivor: 'JackJin', telephone: '15875391643', address: '中华广场 A座 15 楼 久邦信息科技' }
    ],
    glistcolor: 'selectcolor',
    recordcolor: 'unselectcolor',
    // 奖品选项框: false -> 挑战领奖 true -> 领奖记录
    msgPrompt: false,
    // 领取礼物详细信息页：
    // false : 没有礼物信息
    // true : 有礼物信息
    receivelist: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 点击礼物的列表
   */
  glistTap: function(e) {
    // if (!this.data.msgPrompt) {
    //   console.log('select is false');
    //   this.setData({
    //     msgPrompt: !this.data.msgPrompt,
    //     glistcolor: 'selectcolor',
    //     recordcolor: 'unselectcolor'
    //   })
    // } 
    if (this.data.msgPrompt) {
     console.log('select is true');
      this.setData({
        msgPrompt: !this.data.msgPrompt,
        glistcolor: 'selectcolor',
        recordcolor: 'unselectcolor'
      })
    }
  },
  /**
   * 领取记录
   */
  recordTap: function(e) {
    // console.log("here-0");
    if (!this.data.msgPrompt) {
      console.log('here-1');
      this.setData({
        msgPrompt: !this.data.msgPrompt,
        glistcolor : 'unselectcolor',
        recordcolor : 'selectcolor'
      })
    }
  },
  goReceiveTap: function(e) {
    wx.navigateTo({
      url: '../reveivegift/reveivegift',
    })
  }
})