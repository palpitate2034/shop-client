import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";
// import 'swiper/css/swiper.css'
import './plugins/swiper';  // 加载swiper的配置
import '@/mock/mockServer'

Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)

// 将全局事件总线对象(vm)保存到Vue原型对象上
// Vue.prototype.$bus = new Vue()

new Vue({
  beforeCreate() {
    // 将全局事件总线对象(vm)保存到Vue原型对象上
    Vue.prototype.$bus = this
  },

  render: h => h(App),
  router,   // 注册路由   ==>   所有组件都可以直接访问2个对象:$router与$route
  store,  // 注册vuex   ==>   所有组件都可以直接访问1个对象:$store
}).$mount('#app')


/* eslint-disable no-unused-vars */
// const a = 123


/* 
store对象的功能
读取数据
  store.state.xxx
  store.getters.yyy
更新数据
  store.dispatch(action名称,data)
  store.commit(mutation名称,data)
*/
