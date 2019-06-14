// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  discount(){
    wx.navigateTo({
      url: '../discount/discount'
    })
  },
  commoditydetails(){
    wx.navigateTo({
      url: '../commoditydetails/commoditydetails'
    })
  },
  browsing() {
    wx.navigateTo({
      url: '../browsing/browsing'
    })
  },
  refund(){
    wx.navigateTo({
      url: '../refund/refund'
    })
  },
  coupon(){
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  order(){
    wx.navigateTo({
      url: '../order/order'
    })
  },
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

  }
})