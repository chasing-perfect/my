// pages/recom/recom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //保存用户信息
    user: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取用户信息
  onGotUserInfo: function (e) {
    console.log(e)
    console.log(e.detail.errMsg) //提示信息
    console.log(e.detail.userInfo) //用户信息
    this.setData({
      user: e.detail.userInfo
    })
    console.log(e.detail.rawData)  //
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