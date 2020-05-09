<template>
  <div class="shop-container" v-if="homeshoplist.length > 0">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(list,index) in homeshoplist" :key="index">
        <img :src="list.image_url" width="100%" alt="">
        <h4 class="list-item-title">{{list.goods_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{list.normal_price / 100}}</span>
          <span class="item-count">{{list.sales_tip}}</span>
          <span class="item-user">
            <img :src="ava.avatar" alt="" v-for="(ava,index1) in list.bubble" :key="index1">
          </span>
          <span class="item-buy">
            <button>去拼单></button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['homeshoplist'])
  }
}
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .shop-container
    margin-bottom 50px
    background-color #f5f5f5
    .shop-list
      .shop-list-item
        display flex
        flex-direction column
        margin-bottom 10px
        background-color #fff
        .list-item-title
          line-height 22px
          width 94%
          margin-left 3%
          height 44px
          overflow hidden
        .list-item-bottom
          margin 10px 0
          display flex
          justify-content space-around
          align-items center
          .item-price
            color red
            font-size 18px
            text-align center
            font-weight bolder
            flex 1
          .item-count
            flex 2
            font-size 12px
            color #cccccc
          .item-user
            display flex
            justify-content center
            align-items center
            flex 1
            img 
              width 35px
              border-radius 50%
            img:nth-child(2)
              margin-left -6px
          .item-buy
            flex 2
            button 
              width 80%
              border none 
              height 34px
              color #ffffff
              display flex
              justify-content center
              align-items center
              margin-left 15px
              background-color red
              border-radius 5px
</style>