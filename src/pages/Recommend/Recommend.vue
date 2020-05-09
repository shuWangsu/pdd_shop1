<template>
  <div class="recommend-container"
       v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <shop-list v-for="(item,index) in recommendshoplist"
                 :key="index"
                 :item="item"></shop-list>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopList from './../../components/ShopList/ShopList'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  name: 'Recommend',
  data () {
    return {
      pagenum: 1,
      pagesize: 20
    }
  },
  mounted () {
    Indicator.open({
      text: '正在加载...',
      spinnerType: 'fading-circle'
    });
    this.getData()
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  components: {
    ShopList
  },
  watch: {
    recommendshoplist () {
      this.$nextTick(() => {
        this._initBScroll()
        this.pagenum++
      })
    }
  },
  methods: {
    _initBScroll () {
      // 1.1初始化
      this.listScroll = new BScroll('.recommend-container', {
        scrollY: true,
        probeType: 3
      })
      // 1.2监听列表的滚动
      this.listScroll.on('touchEnd', (pos) => {
        // 1.2.1监听下拉
        if (pos.y >= 50) {
          
        }
        // 1.2.1监听上拉
        if (pos.y < this.listScroll.maxScrollY - 20) {
          Indicator.open({
            text: '正在加载...',
            spinnerType: 'fading-circle'
          });
          this.getData()
        }
      })
      // 1.3列表滚动结束
      this.listScroll.on('scrollEnd', () => {
        this.listScroll.refresh()
      })
    },
    getData () {
      this.$store.dispatch('reqRecommendShopList', {        page: this.pagenum, count: this.pagesize, callback: () => {
          Indicator.close()
        }      })
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
.recommend-container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;

  .recommend {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    margin-bottom: 50px;
  }
}
</style>