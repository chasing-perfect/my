// pages/prc/prc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //保存用户信息
    user: {},
    //关于地图

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  map() {
    wx.getLocation({
      success: res => {
        console.log(res);
        this.setData({
          markers: [{
            iconPath: "/1.jpg",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 100,
            height: 100
          }],
          polyline: [{
            points: [{
              latitude: res.latitude,
              longitude: res.longitude,
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
          }],
          controls: [{
            id: 1,
            iconPath: "/1.jpg",
            position: {
              left: 0,
              top: 0,
              width: 50,
              height: 50
            },
            clickable: true
          }]

        })
      }
    })
  },
  //关于地图
  // markertap(e) {
  //   console.log(e.markerId)
  // },
  // controltap(e) {
  //   console.log(e.controlId)
  // },
  // regionchange(e) {
  //   console.log(e.type)
  // },
  onTapSetting() {
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  onTapLocation() {
    wx.authorize({
      scope: 'scope.record',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.startRecord()
      }
    })
  },
  getLocal() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
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