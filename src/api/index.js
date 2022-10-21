// 包含应用的所有接口的接口请求函数
// 函数内部调用ajax函数发送请求
// 函数返回的是Promise对象
import { method } from 'lodash';
import ajax from './ajax';

import mockAjax from './mockAjax';


// 首页三级分类 /api/product/getBaseCategoryList

export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
    return ajax({
        // method: "get",   // 默认get
        url: "/product/getBaseCategoryList"
    })
}

// 首页广告轮播
export const reqBannerList = () => mockAjax("/banners")

// mock接口
export const reqRecommends = () => mockAjax("/recommends")

export const reqFloors = () => mockAjax("/floors")

/* reqFloors().then(result => {
    console.log('result--', result);
}) */

// 搜索分页列表
// api/list     POST
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

// 详情页
// api/item/{ skuId }     GET
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/item/${skuId}`,
        method: "get"
    })
}

// 添加购物车(修改购物车的商品数量)
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: "post"
    })
}

// 购物车列表
export const reqCartList = () => {
    return ajax({
        url: '/cart/cartList',
        method: 'get'
    })
}

// 修改购物车的选中状态
// /cart/checkCart/{skuID}/{isChecked}  get
export const reqUpdateCartChecked = (skuId, isChecked) => {
    return ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

// 删除购物车
// /cart/deleteCart/{skuId}
// DELETE
export const reqDeleteCart = (skuId) => {
    return ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

// 注册
// /user/passport/register
// POST
export const reqUserRegister = (userInfo) => {
    return ajax({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo
    })
}

// 获取验证码
export const reqGetCode = (phone) => {
    return ajax({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}


// 登录
export const reqUserLogin = (userInfo) => {
    return ajax({
        url: '/user/passport/login',
        method: 'post',
        data: userInfo
    })
}

// 获取用户登录信息     需要带着用户的token向服务器发送请求
// /api/user/passport/auth/getUserInfo
export const reqUserInfo = () => {
    return ajax({
        url: '/user/passport/auth/getUserInfo',
        method: 'get'
    })
}

// 退出登录
export const reqLogout = () => {
    return ajax({
        url: '/user/passport/logout',
        method: 'get'
    })
}

// 获取用户地址信息
// /user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => {
    return ajax({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get'
    })
}

// 获取订单交易页信息
// /order/auth/trade
export const reqOrderInfo = () => {
    return ajax({
        url: '/order/auth/trade',
        method: 'get'
    })
}