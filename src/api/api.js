import { fetch } from './http'
import { ipUrl } from './env'


class api  {
    //获取首页轮播图片
    getBanner(data) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Banner/getBanner`,data)
    }
    //获取首页课程分类
    getList(data) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Listname/getList`,data)
    }
    //分类id获取 分类信息
    getLists(data) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Course/getList`,data)
    }
}



export default new api()

