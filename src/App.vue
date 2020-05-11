<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  },
  created(){
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scope>
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
