// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  items: [
    { id: 0, value: '欺诈', checked: 0 },
    { id: 1, value: '色情', checked: 0 },
    { id: 2, value: '政治谣言', checked: 0 },
    { id: 3, value: '诱导分享', checked: 0 },
    { id: 4, value: '恶意营销', checked: 0 },
    { id: 5, value: '隐私信息收集', checked: 0 }
  ],
  desc: [
    "欺诈",
    "色情",
    "政治谣言",
    "诱导分享",
    "恶意营销",
    "隐私信息收集"
  ],
  descStr: '请选择',
  descContent: '',
  index: -1,
  inputPhone: '',
  inputWXID: '',
  redpackNo: '',
  page: '',
  redirectFlag: false
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

  submitReport: function(e) {
    
  }
})