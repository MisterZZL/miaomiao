import { getUser } from "../../../api/center"
import { setToken } from "../../../axios/set_and_get_Token"

const state = {
    isShowLodingOrNot: true,
    isAdmin: ""
}

const mutations = {
    showLoding(state) {
        state.isShowLodingOrNot = true
    },
    hideShowLoding(state) {
        state.isShowLodingOrNot = false
    },
    SaveUserInfo(state, isAdmin) {
        state.isAdmin = isAdmin

    }
}

const actions = {
    async GET_USERINFO(state) {
        let res = await getUser()
        if (res.status === 0) {
            // 将用户名和用户权限保存在本地
            // setToken("username",res.data.username)
            // setToken("isAdmin",res.data.isAdmin)
            state.commit("SaveUserInfo", res.data.isAdmin)
        }else {
            this.userInfo = "未登录";
          }
       
    },

}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}