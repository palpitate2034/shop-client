// 管理登录用户数据的vuex子模块

import { reqUserRegister, reqGetCode, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
import { getUserTempId, setToken, getToken, removeToken } from "@/utils/userAbout";

const state = {
    // getUserTempId()获取临时标识id
    userTempId: getUserTempId(),
    code: '',
    token: getToken(),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    USERLOGOUT(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const actions = {
    async userRegister({ commit }, userInfo) {
        const result = await reqUserRegister(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code === 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
        // console.log(result);
    },
    async userLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo)
        // console.log(result);
        if (result.code === 200) {
            // 服务器下发的token是某一个用户的唯一标识
            commit('USERLOGIN', result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        // console.log(result);
        if (result.code === 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getLogout({ commit }) {
        let result = await reqLogout()
        console.log(result)
        if (result.code === 200) {
            commit('USERLOGOUT')
            return 'ok'
        }
    }
}
const getters = {}




export default {
    state,
    mutations,
    actions,
    getters
}