// pages/mycenter/mycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameinfo:'Jack Bai',
    numberinfo:'15'
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
  ruleTap: function(e) {

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