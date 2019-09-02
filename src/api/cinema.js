import axios from '../axios/index'

// 获取城市列表
export const cinema = () => {
    return axios.request({
        url: "/api/cinemaList?cityId=10",
        method: "get"
    });
}