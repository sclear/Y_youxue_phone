// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import 'swiper/dist/css/swiper.min.css';
import './assets/public.css'  //公用css
import './assets/usanimate.css'   //css3 animate
import _globalComponents from './components/global/index' //全局组件
Vue.use(_globalComponents)
import plugin from './plugin/plugin'
Vue.use(plugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
