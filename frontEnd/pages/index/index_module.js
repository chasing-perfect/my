
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