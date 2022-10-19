// 路由对象模块


import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// 安装vue插件
Vue.use(VueRouter)


// 缓存原本的push
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// 指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    // console.log('push', onResolve, onReject);
    // 如果指定了成功或者失败的回调
    if (onResolve || onReject) {
        // 直接调用原本的push方法
        // originalPush(location,onResolve,onReject)    // this不是router而是undefined
        return originalPush.call(this, location, onResolve, onReject)
    }
    // 没有指定成功或失败的回调，必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        // 如果是重复导航产生的错误
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err  // 产生的是成功的promise，成功promise的value是err
        }
        // 如果是其他原因导致的错误，将错误向下传递
        // rethrow error
        return Promise.reject(err)
    })
}

VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject)
    }
    return originalReplace.call(this, location).catch((err) => {
        if (Router.isNavigationFailure(err)) {
            // resolve err
            return err  // 产生的是成功的promise，成功promise的value是err
        }
        // rethrow error
        return Promise.reject(err)
    })
}



// 向外暴露
export default new VueRouter({
    // 模式
    mode: 'hash',  // history有问题
    // 应用中的所有路由
    routes,
    // 切换新路由,页面滚动到最上方
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})