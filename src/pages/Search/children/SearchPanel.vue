<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png"
             width="20"
             alt="">
        <input type="search"
               placeholder="输入搜索内容" ref="mysearch">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" width="25" alt="">
        <span>热门搜索</span>
      </div>
      <ul>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowSearchPanel: Function
  },
  mounted(){
    this.$refs.mysearch.focus()
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl";
.search-panel 
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  .search-nav
    width 100%
    height 60px
    border-bottom-1px #ddd
    display flex
    justify-content space-between
    align-items center
    .search-input
      display flex
      align-items center
      background-color #ededed
      width 85%
      height 38px
      border-radius 10px
      padding 0 10px
      input 
        width 90%
        height 90%
        padding-left 10px
        font-size 16px
        background-color transparent
        outline none
    button 
      background-color transparent
      color #aaa
      font-size 16px
      padding-right 10px
  .search-content
    padding 30px 15px
    .title
      display flex
      align-items center
      color #aaaaaa
      margin-bottom 10px
    ul
      display flex
      flex-wrap wrap
      li
        background-color #ededed
        color #aaaaaa
        margin 5px 10px
        padding 5px
        border-radius 8px
        font-weight lighter
        font-size 12px
</style>