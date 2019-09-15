import axios from "axios"
import store from "../stores"

import { getToken } from "../axios/set_and_get_Token"



class AjaxRequest {


    constructor() {
        //this.baseURL = process.env.NODE_ENV === "production" ? "/" : " http://39.97.33.178";
        this.baseURL = process.env.API_HOST;
        this.timeout = 3000; // 超时
        this.queue = {} //用于保存每次请求记录
    }

    //合并参数
    merge(options) {
        // console.log(this._pending)
        return {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout,
        };
    }
    //拦截器
    setInterceptor(instance, url) {
        //请求前拦截
        instance.interceptors.request.use((config) => {

            //判断queue是否为空，如果为空，则表示是第一次请求（避免多次请求重复触发loding效果）
            if (Object.keys(this.queue).length == 0) {
                //请求前触发Loding效果
                store.commit("loadding/SHOWLODING");   
            }
            this.queue[url] = url;           
            config.headers.Authorization = getToken("token");
            return config;
        });
        //响应拦截
        instance.interceptors.response.use((res) => {

            // 每次请求响应前，删除queue中的url
            delete this.queue[url];
            // 当queue是否为空的时候，表示是最后一次请求
            if (Object.keys(this.queue).length == 0) {
                //请求响应前结束Loding效果
                store.commit("loadding/HIDESHOWLODING");
            }
            return res.data;
        });
    }


    request(options) {
        let instance = axios.create();
        //整合后的axios配置选项，传递给axios的实例instance
        let config = this.merge(options);
        this.setInterceptor(instance, options.url);
        return instance(config); // 返回一个promise
    }
}

export default new AjaxRequest