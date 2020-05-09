import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LyTab from 'ly-tab'

Vue.use(LyTab)

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
})  