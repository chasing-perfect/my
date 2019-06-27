// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    data: [],
    checkGood: [],
    allCheck: false,
    totalPrice: 0,
    isDisable: false,
    totalCount: 0,
    isCart:''
  },
  //++
  add(e) {
    this.data.data[e.currentTarget.dataset.index].count++;
    this.setData({
      data: this.data.data
    })
    this.reStorage()
    this.total()
    this.all()
  },
  //--
  even(e) {
    this.data.data[e.currentTarget.dataset.index].count--;
    if (this.data.data[e.currentTarget.dataset.index].count <= 1) {
      this.data.data[e.currentTarget.dataset.index].count = 1
    }
    this.setData({
      data: this.data.data
    })
    this.reStorage()
    this.total()
    this.all()
  },
  //全选按钮的bindchang事件
  change(e) {
    console.log(e)
    this.data.allCheck = e.detail
    this.data.data.forEach(item => {
      item.checked = e.detail
    })
    this.setData({
      allCheck: this.data.allCheck,
      data: this.data.data
    })
    this.reStorage()
    this.total()
    this.isGo()
  },
  //商品选中按钮的bindchang事件
  changeItem(e) {
    this.data.data[e.currentTarget.dataset.index].checked = e.detail
    let isChecked = this.data.data.some(item => {
      return item.checked == false
    })
    this.setData({
      allCheck: !isChecked,
      data: this.data.data
    })
    this.reStorage()
    this.total()
    this.isGo()
  },
  //求总价格的一个方法
  total() {
    this.data.totalPrice = 0
    this.data.data.forEach(item => {
      if (item.checked) {
        this.data.totalPrice += item.count * item.price
      }
    })
    this.setData({
      totalPrice: this.data.totalPrice
    })
  },
  //删除
  remove(e) {
    this.data.data.splice(e.currentTarget.dataset.index, 1)
    if (!this.data.data.length) {
      this.setData({
        isShow: true
      })
    }
    this.setData({
      data: this.data.data
    })
    this.reStorage()
    this.total()
    this.isGo()
    this.all()
  },
  gosettlement() {
    this.isGo()
    this.data.checkGood.length = 0
    this.data.data.forEach(item => {
      if (item.checked) {
        this.data.checkGood.push(item)
      }
    })
    this.setData({
      checkGood: this.data.checkGood
    })
    if (!this.isDisable) {
      wx.navigateTo({
        url: '../account/account?index=' + this.data.isCart
      })
    }
  },
  // 判断是否有被选中的商品
  isGo() {
    var hasChecked = this.data.data.some(item => {
      return item.checked == true
    })
    this.setData({
      isDisable: !hasChecked
    })
  },
  // 求所有商品的数量
  all() {
    let count = 0;
    this.data.data.forEach(item => {
      count += item.count
    })
    this.setData({
      totalCount: count
    })
  },
  reStorage(){
    wx.setStorage({
      key: 'cartGood',
      data: this.data.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isCart:options.index
    })
    console.log(options)
    wx.getStorage({
      key: 'cartGood',
      success: res=> {
        console.log(res.data)
        res.data.forEach(item=>{
          item.isChecked=false
        })
        wx.setStorage({
          key: 'cartGood',
          data:res.data
        })
        
      },
    })
    // this.setData({
    //   data: wx.getStorageSync('cartGood')
    // })
   
    this.setData({
      data: wx.getStorageSync('cartGood')
    })
    // wx.setNavigationBarTitle({
    //   title: '购物车'
    // })
    console.log(this.data.data)
    if (!this.data.data.length==0) {
      this.setData({
        isShow: false
      })
    } else {
      this.setData({
        isShow: true
      })
    }
    this.isGo()
    this.all()
    let allChecks=this.data.data.every(item => {
      return item.checked==true
    })
    this.setData({
      allCheck: allChecks
    })
  }
})