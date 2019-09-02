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

/* better-scroll */
import Scroller from './components/Scroller'
Vue.component ('Scroller',Scroller)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')