<template>
    <div class="recommend-item">
      <img :src="item.thumb_url" width="100%" alt="" v-if="item.thumb_url">
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{item.price / 100}}</span>
          <span class="item-sales">{{item.sales_tip}}</span>
          <button class="item-btn">找相关</button>
        </div>
    </div>
</template>

<script>
export default {
  props:{
    item:Object
  }
}
</script>
<style lang="stylus" scoped ref="stylesheet/stylus">
  .recommend-item:nth-child(2n-1)
    margin-right 1%
  .recommend-item
    width 49.5%
    background #fff
    padding-bottom 15px
    margin-bottom 10px
    .item-title
      line-height 20px
      font-size 13px
      font-weight lighter
      height 20px
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      display flex
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-weight bolder
        font-size 12px
      .item-sales
        flex 4
        font-size 10px
        color #666
      .item-btn
        flex 2
        color red
        border 1px solid orangered
        height 26px
        border-radius 5px
        font-size 10px
        background-color transparent
</style>