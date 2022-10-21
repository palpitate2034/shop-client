import { reqAddressInfo, reqOrderInfo } from '@/api';

const state = {
    address: {},
    orderInfo: {}
}
const mutations = {
    GETADDRESS(state, address) {
        state.address = address
    },
    GETORDER(state, orderInfo) {
        state.orderInfo = orderInfo.detailArrayList
    }
}
const actions = {
    async getAddress({ commit }) {
        let result = await reqAddressInfo()
        if (result.code === 200) {
            commit('GETADDRESS', result.data)
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code === 200) {
            commit('GETORDER', result.data)
        }
    },
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}