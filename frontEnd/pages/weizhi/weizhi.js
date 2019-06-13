// pages/weizhi/weizhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg);
    console.log(e.detail.userInfo);
    console.log(e.detail.rawData);
  },
  gotoSetting: function () {
    //设置
    console.log(1)
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)

      }
    })
  },
  shouquan: function () {
    //授权
    wx.authorize({
      scope: 'scope.record',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.startRecord()
      }
    })
  },
  getMap: function () {
    //获取地理位置
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [{
            iconPath: "../../image/gougou.jpg",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }],
          polyline: [{
            points: [{
              longitude: res.longitude,
              latitude: res.latitude
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
          }],
          controls: [{
            id: 1,
            iconPath: '../../image/gougou.jpg',
            position: {
              left: 0,
              top: 300 - 50,
              width: 50,
              height: 50
            },
            clickable: true
          }]
        })

      }
    })
  },

  onLoad: function (options) {
  

  },
  onReady: function() {

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