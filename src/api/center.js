import axios from '../axios/index'

// 获取城市列表
export const getUser = () => {
    return axios.request({
        url: "/api2/users/getUser",
        method: "get"
    });
}