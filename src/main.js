import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'


import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* 请求图片url的过滤器 */
Vue.filter("setWH", (url, arg) => {
    return url.replace(/w\.h/, arg)
})
/* loading效果 */
import Loading from './components/Loading'
Vue.component('Loading', Loading)

/* better-scroll */
import Scroller from './components/Scroller'
Vue.component('Scroller', Scroller)


router.beforeEach(async (to, from, next) => {
    //判断验证是否通过
    let isLogin = await store.dispatch("login/TO_VALIDATE")
    // 获取需要登录的页面路由
    let needLogin = to.matched.some(match => match.meta.needLogin)
    if (needLogin) {//需要登录
        if (isLogin) {
            console.log("已经登录")
            next()
        } else {
            console.log("还未登录")
            next("/mine/login")
        }
    } else {//不需要登录
        next()
    }


    next()
})

let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')