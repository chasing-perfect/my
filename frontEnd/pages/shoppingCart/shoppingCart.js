// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    data:[
      {
        image:"",
        title:"狼牙枕2",
        price: 238.00,
        color: "白色",
        count: 1,
        checked:false
      },
      {
        image: "",
        title: "狼牙枕3",
        price: 238.00,
        color: "白色",
        count: 2,
        checked: false
      },
      {
        image: "",
        title: "狼牙枕4",
        price: 238.00,
        color: "白色",
        count: 4,
        checked: false
      },
      {
        image: "",
        title: "狼牙枕5",
        price: 238.00,
        color: "白色",
        count: 5,
        checked: false
      },
      {
        image: "",
        title: "狼牙枕6",
        price: 238.00,
        color: "白色",
        count: 6,
        checked: false
      },
      {
        image: "",
        title: "狼牙枕7",
        price: 238.00,
        color: "白色",
        count: 7,
        checked: false
      }
    ],
    allCheck:false,
    totalPrice:0,
    isDisable:false,
    totalCount:0
  },
  //++
  add(e){
    this.data.data[e.currentTarget.dataset.index].count++;
    this.setData({
      data: this.data.data
    })
    this.total()
    this.all()
  },
  //--
  even(e) {
    this.data.data[e.currentTarget.dataset.index].count--;
    if (this.data.data[e.currentTarget.dataset.index].count<=1){
      this.data.data[e.currentTarget.dataset.index].count = 1
    }
    this.setData({
      data: this.data.data
    })
    this.total()
    this.all()
  },
  //全选按钮的bindchang事件
  change(e){
    console.log(e)
    this.data.allCheck = e.detail
    this.data.data.forEach(item => {
      item.checked = e.detail
    })
    this.setData({
      allCheck: this.data.allCheck,
      data: this.data.data
    })
    this.total()
    this.isGo()
  },
  //商品选中按钮的bindchang事件
  changeItem(e){
    this.data.data[e.currentTarget.dataset.index].checked = e.detail
    let isChecked=this.data.data.some(item=>{
      return item.checked==false
    })
    this.setData({
      allCheck: !isChecked,
      data: this.data.data
    })
    this.total()
    this.isGo()
  },
  //求总价格的一个方法
  total(){
    this.data.totalPrice=0
    this.data.data.forEach( item => {
      if(item.checked){
        this.data.totalPrice += item.count * item.price
      }
    })
    this.setData({
      totalPrice: this.data.totalPrice
    })
  },
  //删除
  remove(e){
    this.data.data.splice(e.currentTarget.dataset.index,1)
    if(!this.data.data.length){
      this.setData({
        isShow: true
      })
    }
    this.setData({
      data:this.data.data
    })
    this.total()
    this.isGo()
    this.all()
  },
  gosettlement() {
    this.isGo()
    if (!this.isDisable){
      wx.navigateTo({
        url: '../account/account',
      })
    }
  },
  isGo(){
    var hasChecked = this.data.data.some(item => {
      return item.checked == true
    })
    this.setData({
      isDisable: !hasChecked
    })
  },
  all(){
    let count=0;
    this.data.data.forEach(item => {
      count += item.count
    })
    this.setData({
      totalCount:count
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    
    if(this.data.data){
      this.setData({
        isShow:false
      })
    }else{
      this.setData({
        isShow: true
      })
    }
    this.isGo()
    this.all()
  }
})