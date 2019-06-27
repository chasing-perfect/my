// pages/particulars/particulars.js
import Particular from './particular_module.js'
let part=new Particular();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShow:false,
      mode:{
      },
      judge:'-1',
      allSelectData:{
          allSize:[25,23,43,22],
          allColor:['红色','白色','黑色','粉色','橙色'],
          allNum:1
      },
      currentColor:'',
      currentSize:'',
      selectAll:[{
        'image': './image/main.jpg',
        'title': '枕头',
        'colors':'',
        'sizes':'',
        'count':1,
        'price':128
      }]
  },
  toIndex:function (){
    //去首页
    console.log(1)
      wx.navigateTo({
        url: '../index/index'
      })
  },
  selectSize:function (ev){
    //选择大小
      this.setData({
        currentSize:ev.currentTarget.dataset.sizeindex
      })  
  },
  selectColor:function (ev){
    //选择颜色
    this.setData({
      currentColor: ev.currentTarget.dataset.colorindex,
    })
  },
  oks:function () {
    //确定 订单
  
    //当前的颜色
    let crs = this.data.allSelectData.allColor[this.data.currentColor];

    //当前得尺寸
    let sis = this.data.allSelectData.allSize[this.data.currentSize];

    //details
    let curMode=this.data.mode
    //数量
    let curNum=this.data.allSelectData.allNum

   if(crs && sis){
     //如果有尺寸，数量
      //路由跳转
      if (this.data.judge=='0'){
        //发起拼单

        let storage = wx.getStorageSync('share').storage;
        storage[0].count = curNum
        storage[0].colors = crs
        storage[0].sizes = sis
        //存储
        wx.setStorage({
          key: 'share',
          data: {
            storage
          }
        })
        wx.navigateTo({
          url: '../settle/settle',
        })
      }else if(this.data.judge=='1'){
        //单独购买
        let storage = wx.getStorageSync('addOrder').storage;
        storage[storage.length - 1].count = curNum
        storage[storage.length - 1].colors = crs
        storage[storage.length - 1].sizes = sis
        //存储
        wx.setStorage({
          key: 'addOrder',
          data: {
            storage
          }
        })
        wx.switchTab({
          url: '../shoppingCart/shoppingCart'
        })

      }
   }else{
     console.log('请选择尺寸，大小')
   }
    
  },
  remove:function (){
    //数量减减
    if(this.data.allSelectData.allNum<=1){
      this.data.allSelectData.allNum=1;
     
    }else{
      this.data.allSelectData.allNum--
    }
    this.setData({
      allSelectData: this.data.allSelectData
    })
  },
  add:function (){
    //数量加加
    this.data.allSelectData.allNum++
    this.setData({
      allSelectData: this.data.allSelectData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
    part.particulars((res)=>{
      this.setData({
        mode:res.data.data.goods
      })
    },options.id)
  },
  shows:function (el){
    //单独购买 发起拼单
    //获取index 判断是点击的谁
    this.setData({
      judge:el.currentTarget.dataset.index
    })
    //点击单独购买
    this.setData({
      isShow: true
    })

    if(el.currentTarget.dataset.index=='0'){
      //发起拼单
      let storage = [
        {
          img: this.data.mode.goods_thumb,
          title: this.data.mode.goods_name,
          price: this.data.mode.shop_price
        }
      ]
      //存储img title price
      wx.setStorage({
        key: 'share',
        data: {
          storage
        }
      })
    } else if (el.currentTarget.dataset.index == '1'){
      //单独购买 去购物车
      let storage = [];
      if (wx.getStorageSync('addOrder')) {
        //如果有数据
        storage = wx.getStorageSync('addOrder').storage
        storage.push({
          img: this.data.mode.goods_thumb,
          title: this.data.mode.goods_name,
          price: this.data.mode.shop_price,
          isChecked:false
        })
      } else {
        //如果没有
        storage = [
          {
            img: this.data.mode.goods_thumb,
            title: this.data.mode.goods_name,
            price: this.data.mode.shop_price,
            isChecked:false
          }
        ]
      }
      wx.setStorage({
        key: 'addOrder',
        data: {
          storage
        }
      })
    }
  },
  noShow:function (){
    //关闭    
    this.data.allSelectData.allNum=1
    this.setData({
      isShow:false,
      currentSize:'',
      currentColor:'',
      allSelectData: this.data.allSelectData
    })
    if (this.data.judge=='0'){
      //发起拼单
      wx.removeStorageSync('share')

    }else if(this.data.judge=='1'){
     wx.getStorage({
       key: 'addOrder',
       success: function(res) {
        res.data.storage.splice(res.data.storage.length-1,1)
        wx.setStorage({
          key: 'addOrder',
          data: {
            storage: res.data.storage
          }
        })
       }
     })
    }
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