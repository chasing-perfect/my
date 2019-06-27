//index.js
//获取应用实例
// const app = getApp()
// import Alls from './index_module.js';
// let alls = new Alls();
import IndexUrl from './index_module.js'
let indexUrl=new IndexUrl();

Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular:true,
    carousel:[],
    ranking:[],
    guessgoods:[],
    recommend:[],
    youLove:[
      {
        img:'',
        title:'泰国美容波浪枕',
        txt:'泰国天然乳胶原料',
        price: 228.00
      },
      {
        img: '',
        title: '泰国美容波浪枕',
        txt: '泰国天然乳胶原料',
        price: 228.00
      }, 
      {
        img: '',
        title: '泰国美容波浪枕',
        txt: '泰国天然乳胶原料',
        price: 228.00
      },
       {
        img: '',
        title: '泰国美容波浪枕',
        txt: '泰国天然乳胶原料',
        price: 228.00
      }

    ]
  },
  onLoad:function (){
    indexUrl.getBanner((res)=>{
      console.log(res)
      this.setData({
          carousel: res.data.data.carousel,
          ranking:res.data.data.ranking,
          guessgoods: res.data.data.guessgoods,
          recommend: res.data.data.recommend
      })
    })
  },
  goParticulars(ev){
    let ids=ev.currentTarget.dataset.id;
    console.log(ids)
    wx.navigateTo({
      url: '../particulars/particulars?id='+ids
    })
  }
})
