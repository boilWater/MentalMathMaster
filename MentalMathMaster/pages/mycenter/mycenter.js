// pages/mycenter/mycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameinfo:'Jack Bai',
    numberinfo:'15',
    bottomIndex: '1',
    bottomImageSelect: '../resources/images/challenge-normal.png',
    challengeColor: 'bottomColorunSelect',
    bottomCenterSelect: '../resources/images/center-select.png',
    centerColor: 'bottomColorSelect',
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
  * 炫耀成绩
  */
  shareTap: function(e) {
    
  },
  /** 
  * 获取挑战机会
  */
  getchanceTap: function(e) {

  },
  /** 
  * 客服微信
  */
  contactcustomerTap: function(e) {

  },
  /** 
  * 去挑战
  */
  gochallengeTap: function(e) {

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
    wx.switchTab({
      url: '../index/index',
    })
  },
  goYyCenter: function (e) {
    if (this.data.bottomIndex != 1) {
      this.setData({
        bottomIndex: '1',
        bottomImageSelect: '../resources/images/challenge-normal.png',
        challengeColor: 'bottomColorunSelect',
        bottomCenterSelect: '../resources/images/center-select.png',
        centerColor: 'bottomColorSelect'
      });
    };
  },
  // 挑战规则 按钮
  ruleTap: function(e) {
    wx.navigateTo({
      url: '../report/report',
    })
  },
  goGiftTap: function(e) {
    wx:wx.navigateTo({
      url: '../giftlist/giftlist',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})