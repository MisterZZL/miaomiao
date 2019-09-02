const state = {
    isShowLodingOrNot: ""
}
const actions = {

}
const mutations = {
    SHOWLODING(state) {
        state.isShowLodingOrNot = true
    },
    HIDESHOWLODING(state) {
        state.isShowLodingOrNot = false
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}