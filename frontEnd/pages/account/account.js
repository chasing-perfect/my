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
  chance1() {
    this.setData({
      currentIndex: 0
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
  // 求总价格
  sTotal(){
    this.data.list.forEach(item => {
      item.totalPrice = item.count * item.price
      this.data.totalprice += item.totalPrice
    })
    this.setData({
      totalprice: this.data.totalprice
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
    //获取本地存储的内容
    if(options.index=='0'){
      wx.getStorage({
        key: 'goodList',
        success: res => {
          this.setData({
            list: res.data
          })
          console.log(this.data.list)
          this.sTotal()
        }
      })
    }else{
      wx.getStorage({
        key: 'cartGood',
        success: res => {
          res.data.forEach(item => {
            if (item.checked) {
              this.data.list.push(item);
              this.setData({
                list: this.data.list
              })
            }
          })
          this.sTotal()
        },
      })
    }
      
    
  }
})