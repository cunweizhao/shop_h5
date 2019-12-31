# shop_h5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# shop_h5
为了追求快速上线，项目组决定去掉传统项目中的用户注册和用户登录界面，
直接使用微信授权来实现。
* 用户的微信浏览器会把当前微信用户的open_id 传递给后台服务器。
* 后台服务器给微信服务器发送请求，获得当前微信用户的信息
* 后台服务器为该用户生成一个用户文件
* 后台服务器告知H5端已经成功注册该用户。
* H5端为该用户展示对应的页面。


#总结
*  使用Vuex记录系统常量（远程服务器的地址）
* 使用Vuex记录用户的信息（新增了一个对象user_info）
* 使用了一个独立的页面，（等待微信授权页面）
* 每次打开首页之前，都要判断该用户是否登录。
* 后端让该用户在微信授权并自动注册，然后把数据返回给前端。
* 增加路由：src/router/index.js

#模块介绍
* 首页轮播图
* 底部Tab
* 商品列表
* 商品详情
* 购物车
* 微信支付
