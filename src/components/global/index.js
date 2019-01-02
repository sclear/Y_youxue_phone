import likeHr from './children/likehr.vue'
import bor from './children/bor.vue'
import back from './children/backtitle.vue'
import topmenu from './children/topmenu.vue'


const _global = {}

_global.install = (Vue) => {
    /**
     * 统一的Hr分割线
     */
    Vue.component('likeHr',likeHr);

    /**
     * 文本前两个字默认拥有下border
     */
    Vue.component('bor',bor);

    /**
     * 3个文本区域    { 返回  title  全部清空(可选,默认无)  }
     */
    Vue.component('back',back);

    /**
     * 3个文本区域    { 返回  title  全部清空(可选,默认无)  }
     */
    Vue.component('topMenu',topmenu);
}


export default _global