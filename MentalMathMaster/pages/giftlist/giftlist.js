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
    glistcolor: 'selectcolor',
    recordcolor: 'unselectcolor',
    msgPrompt: false,
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

  }
})