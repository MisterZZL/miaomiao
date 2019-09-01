import axios from "axios"

class AjaxRequest {

    constructor() {
        //this.baseURL = process.env.NODE_ENV === "production" ? "/" : " http://39.97.33.178";
        this.baseURL = process.env.API_HOST;
        this.timeout = 3000; // 超时
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
            return config;
        });
        //响应拦截
        instance.interceptors.response.use((res) => {

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