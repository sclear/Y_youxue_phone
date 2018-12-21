import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home.vue'],resolve)
    },
    {
      path: '/classify',
      name: 'classify',
      component: resolve => require(['@/components/classify/classify.vue'],resolve)
    },
    {
      path: '/classmain',
      name: 'classmain',
      component: resolve => require(['@/components/classify/classmain.vue'],resolve)
    },
    {
      path: '/serch',
      name: 'serch',
      component: resolve => require(['@/components/serch/serchs.vue'],resolve)
    },
    {
      path: '/good',
      name: 'good',
      component: resolve => require(['@/components/good/good.vue'],resolve)
    },
  ]
})
