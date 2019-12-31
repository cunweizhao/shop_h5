import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/wait_to_shouquan',
      name: 'wait_to_shouquan',
      component: require('../vuew/wait_to_shouquan.vue')
    }
  ]
})
