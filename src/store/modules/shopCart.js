import { reqAddOrUpdateCart, reqCartList, reqUpdateCartChecked, reqDeleteCart } from "@/api";

const state = {
    shopCartList: []
}

const mutations = {
    RECEIVESHOPLIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}

const actions = {
    async addOrUpdateCart({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)
        // 如果和以下写法一样，那么这个异步函数的Promise只有成功
        // if (result.code === 200) {
        //     return 'ok'
        // } else {
        //     return 'failed'
        // }

        // 下面的写法会让Promise有成功也有失败
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getCartList({ commit }) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('RECEIVESHOPLIST', result.data[0].cartInfoList)
        }
    },
    async updateCartChecked({ commit }, { skuId, isChecked }) {
        const result = await reqUpdateCartChecked(skuId, isChecked)

        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async updateCartCheckedAll({ commit, dispatch, state }, isChecked) {
        let promises = []
        state.shopCartList.forEach(item => {
            if (item.isChecked === isChecked) return
            let promise = dispatch('updateCartChecked', { skuId: item.skuId, isChecked: isChecked })
            promises.push(promise)
        })

        return Promise.all(promises)
    },
    async deleteCart({ commit }, skuId) {
        const result = await reqDeleteCart(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async deleteCartAll({ commit, dispatch, state }) {
        let promises = []
        state.shopCartList.forEach(item => {
            if (!item.isChecked) return
            let promise = dispatch('deleteCart', item.skuId)
            promises.push(promise)
            return Promise.all(promises)
        });
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}