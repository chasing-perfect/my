// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    isShow: false,
    list: [],
    totalprice: 0
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
  shown() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  hide() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单'
    })
    this.data.totalprice = 0;
    console.log(JSON.parse(options.good))
    let list = JSON.parse(options.good);
    list.forEach(item => {
      item.totalPrice = item.count * item.price
      this.data.totalprice += item.totalPrice
    })
    this.setData({
      list: list,
      totalprice: this.data.totalprice
    })
  }
})