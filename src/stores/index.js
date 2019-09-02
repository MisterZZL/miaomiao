import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowLodingOrNot: "",
    },
    mutations: {
        showLoding(state) {
            state.isShowLodingOrNot = true
        },
        hideShowLoding(state) {
            state.isShowLodingOrNot = false
        },
    },
    actions: {

    }
})