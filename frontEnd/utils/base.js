// import  config from './config.js';
// class Base{
//   constructor(){
//     this.restUrl =config.restUrl
//     this.bannerUrl=config.bannerUrl
//   }
//   baseUrl(respon){
//     if(!respon.type){
//       respon.type='get'
//     }
//     respon.url = this.bannerUrl+respon.url;
//     wx.request({
//       url: respon.url,
//       method: respon.type,
//       data:respon.data,
//       success:function (res){
//         respon.getData && respon.getData(res)
//       }
//     })
//   }

// }
// export default Base

import Config from './config.js'
class Base{
  constructor(){
    this.bannerUrl=Config.bannerUrl
  }
  banner(request){
    request.url=this.bannerUrl+request.url;
    if(!request.type){
      request.type='get'
    }
    wx.request({
      url: request.url,
      method:request.type,
      data:request.data,
      success:function (data){
        request.backBanner && request.backBanner(data)
      }
    })
  }
}
export default Base















// import Config from './config.js'
// class Base{
//   constructor(){
    
//   }
//   request(params){
//     let url=Config.baseUrl
//     if(!params.type){
//       params.type='get'
//     }
//     wx.request({
//       url:url+params.url,
//       method:params.type,
//       header:{
//         'content-type':'application/json'
//       },
//       success:function(res){
//         params.scallBack && params.scallBack(res.data)
//       },
//       fail:err=>{
//         console.log(err)
//       }
//     })
//   }
// }
// export default Base