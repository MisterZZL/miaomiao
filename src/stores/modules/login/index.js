import { login, validate } from "../../../api/login"
import { setToken } from "../../../axios/set_and_get_Token"

const state = {
    isShowLodingOrNot: true,
    username: "",
}

const mutations = {
    showLoding(state) {
        state.isShowLodingOrNot = true
    },
    hideShowLoding(state) {
        state.isShowLodingOrNot = false
    },
    setUser(state, username) {
        state.username = username
    }
}

const actions = {
    async TO_LOGIN(state, options) {
        let res = await login(options.username, options.password)
        if (res.status === 0) {
            // 登录成功，刷新本地保存的用户信息
            state.commit("setUser", res.username)
            // 登录成功，保存token，也就是跟新保存的token时间
            setToken("token", res.token)
        }  return res
       
    },
    async TO_VALIDATE(state) {
        let res = await validate()
        if (res.status === 0) {
            // 验证成功，保存token
            setToken("token", res.token)
        }
        // 当res.status=0时返回true，不等于是返回false
        return res.status === 0
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}