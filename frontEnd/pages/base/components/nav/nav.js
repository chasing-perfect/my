// pages/base/components/nav/nav.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    bgColor:{
      type:String,
      value:'rgba(0,0,0,0)'
    },
    title:{
      type:String,
      value:''
    }
  },
  onLoad(){
    console.log(this.data.bgColor)
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    let {
      statusBarHeight,navBarHeight
    } = app.globalData
    this.setData({
      statusBarHeight,
      navBarHeight
    })
    console.log(this.data.bgColor)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})
