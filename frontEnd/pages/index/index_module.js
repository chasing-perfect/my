// import Base from '../../utils/base.js'
// let base=new Base();
// class Alls extends Base{
//   constructor(){
//     super()
//   }
//   goods(backData){
//     let respon={
//       url:'goods',
//       type:'get',
//       getData:function (data){
//         backData && backData(data)
//       }
//     }
//     base.baseUrl(respon)
//   }
//   banner(backData){
//     let respon = {
//       url: 'index.php?s=api/v1/index',
//       type: 'get',
//       getData: function (data) {
//         backData && backData(data)
//       }
//     }
//     base.baseUrl(respon)
//   }
// }
// export default Alls

import Base from '../../utils/base.js'
let base=new Base();
class IndexUrl extends Base{
  constructor(){
    super()
  }
  getBanner(callBack){
    let request={
      url:'index.php?s=api/v1/index',
      type:'get',
      backBanner:function (data){
        callBack && callBack(data)
      }
    }
    base.banner(request)
  }

}
export default IndexUrl