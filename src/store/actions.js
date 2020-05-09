import { 
  getHomeCasual,
  getHomeNav,
  getHomeShopLit,
  getRecommendShopList,
  getSearchGoods 
} from '../api'
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO
} from './mutation-types'
export default {
  // 获取首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual()
    // console.log(result)
    commit(HOME_CASUAL,{homecasual:result.message})
  },
  // 获取首页导航
  async reqHomeNav({commit}){
    const result = await getHomeNav()
    // console.log(result)
    commit(HOME_NAV,{homenav:result.message.data})
  },
  // 获取首页数据
  async reqHomeShopList({commit}){
    const result = await getHomeShopLit()
    // console.log(result)
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  },
  // 获取推荐的商品数据
  async reqRecommendShopList({commit},params){
    const result = await getRecommendShopList(params)
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:result.message})
    params.callback && params.callback()
  },
  // 获取搜索也的商品数据
  async reqSearchGoods({commit}){
    const result = await getSearchGoods()
    console.log(result)
    commit(SEARCH_GOODS,{searchgoods:result.message.data})
  },
  // 同步用户信息
  syncUserInfo({commit},userInfo){
    commit(USER_INFO,{userInfo})
  }
}