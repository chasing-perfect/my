// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0  
  },
  chance1(){
    this.setData({
      currentIndex:0
    })
  },
  chance2() {
    this.setData({
      currentIndex: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单'
    })
  }
})