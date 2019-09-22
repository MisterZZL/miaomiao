import Vue from 'vue'
import Vuex from 'vuex'

import city from './modules/city'
import login from './modules/login'
import loadding from './modules/loadding'
import mine from'./modules/mine'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        
    },
    modules: {
        city,
        loadding,
        login,
        mine,

    }
})