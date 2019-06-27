import  Base from '../../utils/base.js'
let base =new Base();
console.log(base)
class Particular extends Base{
  constructor(){
    super()
  }
  particulars(callBack,id){
    
    let request = {
      url: 'index.php?s=api/v1/detail/'+id,
      type: 'get',
      backBanner: function (data) {
        callBack && callBack(data)
      }
    }
    base.banner(request)
  }
}
export default Particular

