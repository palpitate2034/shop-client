// vuex最核心的管理对象store    ==>     仓库

import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import user from './modules/user';
import search from './modules/search';


Vue.use(Vuex)


const mutations = {
    xxx(state) {    // state是总的状态

    },
    aaa(state) {

    }
}

const actions = {
    yyy({ commit }) {

    }
}

const getters = {
}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {
        home,
        user,
        search
    }
})


/* 
vuex多模块编程的总状态结构
{
    home: {
        categoryList:[]
    },

    user: {
        userInfo:{}     // 用户信息对象
    }
}
*/