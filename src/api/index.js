import ajax from './ajax'
// 1.基础路径
const BASE_URL = 'http://127.0.0.1:3000'
// 2.请求方法
// 2.请求首页轮播图
export const getHomeCasual = () =>ajax(BASE_URL + '/api/homecasual')

// 2.2请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')
// 2.3首页商品数据
export const getHomeShopLit = () => ajax(BASE_URL + '/api/homeshoplist')
// 2.4请求推荐的商品数据
export const getRecommendShopList = (params) => ajax(BASE_URL + '/api/recommendshoplist',params)
// 2.5请求搜索的列表数据
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods')
// 2.6请求短信验证码
export const getPhoneCode= (phone) => ajax(BASE_URL + '/api/send_code',{phone})

// 2.7手机验证码登录
export const phoneCodeLogin= (phone,code) => ajax(BASE_URL + '/api/login_code',{phone,code},'POST')