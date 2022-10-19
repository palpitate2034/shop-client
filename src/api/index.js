// 包含应用的所有接口的接口请求函数
// 函数内部调用ajax函数发送请求
// 函数返回的是Promise对象
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