<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
      <img :src="'./../../../static/img/icon_home'+($route.path.includes('/home') ? '_selected.png':'.png')" alt="首页">
      <span :class="{ on: $route.path.includes('/home') }">首页</span>
    </span>
    <span class="tab-item" @click="switchTo('/recommend')">
      <img :src="'./../../../static/img/icon_intro'+($route.path.includes('/recommend') ? '_selected.png':'.png')" alt="推荐">
      <span :class="{ on: $route.path.includes('/recommend') }">推荐</span>
    </span>
    <span class="tab-item" @click="switchTo('/search')">
      <img :src="'./../../../static/img/icon_search'+($route.path.includes('/search') ? '_selected.png':'.png')" alt="搜索">
      <span :class="{ on: $route.path.includes('/search') }">搜索</span>
    </span>
    <span class="tab-item" @click="switchTo('/chat')">
      <img :src="'./../../../static/img/icon_chat'+($route.path.includes('/chat') ? '_selected.png':'.png')" alt="聊天">
      <span :class="{ on: $route.path.includes('/chat') }">聊天</span>
    </span>
    <span class="tab-item" @click="switchTo('/me')">
      <img :src="'./../../../static/img/icon_mine'+($route.path.includes('/me') ? '_selected.png':'.png')" alt="我的">
      <span :class="{ on: $route.path.includes('/me') }">我的</span>
    </span>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  methods: {
    switchTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .bottom-tab
    width 100%
    height 50px
    background-color #fff
    position fixed
    left 0
    bottom 0
    display flex
    z-index 999
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 14px
      color #666
      img 
        width 35%
        margin-bottom 2px
      .on
        color red
</style>