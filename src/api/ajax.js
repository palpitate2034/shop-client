/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

import store from '@/store';


// 配置通用的基础路径和超时
const service = axios.create({
    baseURL: '/api',  // 基础路径
    timeout: 20000   // 超时时间
})


// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 显示请求进度条 在请求拦截器里做
    nprogress.start()

    let userTempId = store.state.user.userTempId
    if (userTempId) {
        config.headers.userTempId = userTempId
    }

    // 需要携带token
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }

    return config
})



// 添加响应拦截器
service.interceptors.response.use((response) => { // 请求成功返回的回调
    // 隐藏请求进度条
    nprogress.done()

    // return response
    return response.data
}, (err) => {  // 请求失败返回的回调
    // 隐藏请求进度条
    nprogress.done()

    // 统一处理请求错误
    alert(err.message || '未知请求错误')

    // throw err
    return Promise.reject(err)
})

// 向外暴露service
export default service
