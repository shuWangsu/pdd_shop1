<template>
  <div class="search">
    <!-- 搜索导航 -->
    <search-nav :isShowSearchPanel="isShowSearchPanel"></search-nav>
    <!-- 联动列表 -->
    <div class="shop">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item"
              v-for="(goods,index) in searchgoods"
              :key="index"
              :class="{ current:index === currentIndex}"
              @click="clickLeftItem(index)"
              ref="menulist">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li class="shops-li"
              v-for="(goods,index1) in searchgoods"
              :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多</a>
            </div>
            <ul class="phone-type"
                v-if="goods.tag === 'phone'">
              <li v-for="(phone,index3) in goods.category"
                  :key="index3">
                <img :src="phone.icon"
                     alt="">
              </li>
            </ul>
            <ul class="shops-item">
              <li v-for="(item,index2) in goods.items"
                  :key="index2">
                <img :src="item.icon"
                     alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索的面板 -->
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"></search-panel>
  </div>
</template>

<script>
import SearchNav from './children/SearchNav'
import SearchPanel from './children/SearchPanel'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  data () {
    return {
      scrollY: 0, //右侧列表滑动的Y轴坐标(实时更新)
      rightLiTops: [],  //所有分类的头部位置
      isShow:false
    }
  },
  components: {
    SearchNav,
    SearchPanel
  },
  mounted () {
    this.$store.dispatch('reqSearchGoods')
  },
  methods: {
    // 左边初始化
    _initLeftScroll () {
       this.leftScroll = new BScroll('.menu-wrapper', {
        scrollY: true,
        click: true
      })
    },
    // 右边初始化
    _initRightScroll () {
      this.rightScroll = new BScroll('.shop-wrapper', {
        scrollY: true,
        click: true,
        probeType: 3
      })
      this.rightScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
      })
      // this.rightScroll.on('scrollEnd', (pos) => {
      //   this.scrollY = Math.abs(pos.y)
      // })
    },
    //求出右边所有版块的头部位置
    _initRightLiTops () {
      // 设置临时数组
      const tempArr = []
      // 定义变量记录li的高度
      let top = 0
      tempArr.push(top)
      // 遍历li标签，取出高度
      let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li')
      // console.log(allLis);
      Array.prototype.slice.call(allLis).forEach(li => {
        top += li.clientHeight
        tempArr.push(top)
      });
      // 更新数据
      this.rightLiTops = tempArr


    },
    // 点击左侧切换
    clickLeftItem (index) {
      this.scrollY = this.rightLiTops[index]
      this.rightScroll.scrollTo(0, -this.scrollY, 300)
    },
    // 左侧联动
    _leftScroll(index){
      let menulist = this.$refs.menulist
      // console.log(menulist)
      let el = menulist[index]
      this.leftScroll.scrollToElement(el,300,0,-100)
    },
    // 设置搜索面板的显示
    isShowSearchPanel(flag){
      this.isShow = flag
    }
  },
  computed: {
    ...mapState(['searchgoods']),
    // 用于动态决定左侧哪个选项被选中
    currentIndex () {
      // 获取数据
      const { scrollY, rightLiTops } = this
      // 取出索引
      return rightLiTops.findIndex((LiTop, index) => {
        this._leftScroll(index)
        return scrollY >= LiTop && scrollY < rightLiTops[index + 1]
      })
    }
  },
  watch: {
    searchgoods () {
      this.$nextTick(() => {
        // 1.左边
        this._initLeftScroll()
        // 右边
        this._initRightScroll()
        // 求出右边所有版块的头部位置
        this._initRightLiTops()
      })
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.search {
  width: 100%;
  height: 100%;
  background: #f5f5f5;

  .shop {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;

    .menu-wrapper {
      width: 80px;
      background-color: #e0e0e0;
      flex: 0 0 80px;

      .menu-item {
        width: 100%;
        height: 60px;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
        color: #666666;
        position: relative;
      }

      .current {
        color: #e02e24;
      }

      .current::before {
        content: '';
        background-color: #e02e24;
        width: 4px;
        height: 30px;
        position: absolute;
        left: 0;
      }
    }

    .shop-wrapper {
      flex: 1;
      background-color: #fff;

      .shops-title {
        display: flex;
        padding: 0 10px;
        height: 44px;
        align-items: center;
        justify-content: space-between;
        color: #999999;

        a {
          color: #999999;
          text-decoration: none;
          font-weight: lighter;
        }
      }

      .shops-item {
        display: flex;
        flex-wrap: wrap;

        li {
          display: flex;
          flex-direction: column;
          width: 33.3%;
          height: 90px;
          justify-content: center;
          align-items: center;
          color: #666666;
          font-weight: lighter;
          font-size: 14px;

          img {
            width: 60%;
            height: 60%;
            margin-bottom: 5px;
          }
        }
      }

      .phone-type {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        border-bottom-1px: #cccccc;

        li {
          width: 33.3%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px 0;

          img {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>