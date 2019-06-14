// pages/ding/ding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    complete:[
      {
        'image':'',
        'title':'枕头',
        'del':'POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕',
        'dels':'天然乳胶',
        'price':'299.0',
        'count':1
      },
      {
        'image': '',
        'title': '枕头',
        'del': 'POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕',
        'dels': '天然乳胶',
        'price': '400.0',
        'count': 2
      },
     
    ],
    noComplete:[
     {
        'image': '',
        'title': '枕头',
        'del': 'POKALEN乳胶枕英国原装进口颈椎天然橡胶枕',
        'dels': '天然乳胶',
        'price': '300.0',
        'count': 1
     },
     {
       'image': '',
       'title': '枕头',
       'del': 'POKALEN乳胶枕头美国原装进口颈椎天然橡胶枕',
       'dels': '天然乳胶',
       'price': '400.0',
       'count': 1
     }
   
    ]
  },
  delCur:function (ev){
    //删除
 
    this.data.complete.splice(ev.currentTarget.dataset.index,1);
    this.setData({
      complete:this.data.complete
    })
  },
  goPay:function (ev){
    //去支付
  let index=ev.currentTarget.dataset.index;

    wx.navigateTo({
      url: '../account/account?data='+JSON.stringify(this.data.noComplete[index])
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.data)
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