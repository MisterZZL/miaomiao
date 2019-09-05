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


let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')