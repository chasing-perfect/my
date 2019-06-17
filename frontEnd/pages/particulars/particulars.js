// pages/particulars/particulars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShow:false,
      mode:{
          'image':'./image/main.jpg',
          'title':'枕头',
          'des':'新品正品魏太林，泰国正品波 浪按摩枕60*60',
          'color':['红色','粉色','黑色','白色'],
          'size': [27,28,29,30]
      },
      currentColor:'',
      currentSize:'',
      selectAll:{
        'image': './image/main.jpg',
        'title': '枕头',
        'colors':'',
        'sizes':''
      }
  },
  toIndex:function (){
    //去首页
    console.log(1)
      wx.navigateTo({
        url: '../index/index'
      })
  },
  selectSize:function (ev){
      this.setData({
        currentSize:ev.currentTarget.dataset.sizeindex
      })  
  },
  selectColor:function (ev){
    this.setData({
      currentColor: ev.currentTarget.dataset.colorindex,
    })
  },
  oks: function () {
    //确定

    //当前的颜色
    let crs = this.data.mode.color[this.data.currentColor];

    //当前得尺寸
    let sis = this.data.mode.size[this.data.currentSize];
    
    this.setData({
      selectAll: {
        'image': './image/main.jpg',
        'title': '枕头',
        'count':1,
        'colors': crs,
        'sizes': sis
      }
    })
    wx.navigateTo({
      url: '../account/account?data='+JSON.stringify(this.data.selectAll)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  shows:function (){
    this.setData({
      isShow:true
    })
  },
  noShow:function (){
    //关闭
    this.setData({
      isShow:false,
      currentSize:'',
      currentColor:''
    })
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