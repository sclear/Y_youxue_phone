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
    {
      title: '个人中心',
      path: '/center',
      name: 'center',
      component: resolve => require(['@/components/center/center.vue'],resolve)
    },
    {
      title: '测评',
      path: '/evals',
      name: 'evals',
      component: resolve => require(['@/components/center/children/evals.vue'],resolve)
    },
    {
      title: '课程管理',
      path: '/course',
      name: 'course',
      component: resolve => require(['@/components/course/course.vue'],resolve)
    },
    {
      title: '订单',
      path: '/order',
      name: 'order',
      component: resolve => require(['@/components/order/order.vue'],resolve)
    },
    {
      title: '收藏',
      path: '/collect',
      name: 'collect',
      component: resolve => require(['@/components/collect/collect.vue'],resolve)
    },
  ]
})
