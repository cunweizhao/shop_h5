import Vue from 'vue'
import Router from 'vue-router'
/**
 * @Description: 路由配置
 * @author zhaocunwei
 * @date 2019/12/31
*/
import Index from '@/views/shops/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    }
  ]
})
