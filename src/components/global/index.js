import likeHr from './children/likehr.vue'
import bor from './children/bor.vue'
import back from './children/backtitle.vue'


const _global = {}

_global.install = (Vue) => {
    Vue.component('likeHr',likeHr);
    Vue.component('bor',bor);
    Vue.component('back',back);
}


export default _global