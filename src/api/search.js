import axios from '../axios/index'


// 获取城市列表
export const search = (keyword, cancelTokens) => {

    return axios.request({
        url: "/api/searchList?cityId=10&kw=" + keyword,
        method: "get",
        cancelToken: cancelTokens.cancelToken
    });


}