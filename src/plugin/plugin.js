const plugin = {}

plugin.install = (Vue)=> {

    /**
     * @param {Number}  val=0 正在学习   val=1 已经学习
     * 
     */
    Vue.directive('color',{
        bind(el,val) {
            val.value === 0 ? el.style.color='#FAC62E' : el.style.color='#FF143B'
        }
    })


}

export default plugin