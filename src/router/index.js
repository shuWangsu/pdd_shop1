// 引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home/Home.vue'
import Me from './../pages/Me/Me.vue'
import Login from './../pages/Login/Login.vue'
import Search from './../pages/Search/Search.vue'
import Recommend from './../pages/Recommend/Recommend.vue'
import Chat from './../pages/Chat/Chat.vue'
import Hot from './../pages/Home/Children/Hot/Hot.vue'
import Box from './../pages/Home/Children/Box.vue'
import Dress from './../pages/Home/Children/Dress.vue'
import Ele from './../pages/Home/Children/Ele.vue'
import Food from './../pages/Home/Children/Food.vue'
import General from './../pages/Home/Children/General.vue'
import Man from './../pages/Home/Children/Man.vue'
import Mbaby from './../pages/Home/Children/Mbaby.vue'
import Shirt from './../pages/Home/Children/Shirt.vue'

// 2.声明使用
Vue.use(VueRouter)

// 3.输出路由对象
export default new VueRouter({
  mode: "history",
  // 3.1配置一级路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'hot', component: Hot, meta: { showBottomTabBar: true } },
        { path: 'box', component: Box },
        { path: 'dress', component: Dress },
        { path: 'ele', component: Ele },
        { path: 'food', component: Food },
        { path: 'general', component: General },
        { path: 'man', component: Man },
        { path: 'mbaby', component: Mbaby },
        { path: 'shirt', component: Shirt },
        { path: '/', redirect: '/home/hot' },
      ]
    },
    { path: '/me', component: Me, meta: { showBottomTabBar: true } },
    { path: '/search', component: Search, meta: { showBottomTabBar: true } },
    { path: '/recommend', component: Recommend, meta: { showBottomTabBar: true } },
    { path: '/chat', component: Chat, meta: { showBottomTabBar: true } },
    { path: '/', redirect: '/home', meta: { showBottomTabBar: true } },
    { path: '/login', component: Login, meta: { showBottomTabBar: false } }
  ]
})