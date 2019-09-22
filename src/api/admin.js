import axios from '../axios/index'

// 进入管理员页面
export const getAdmin = () => {
    return axios.request({
        url: "/api2/admin",
        method: "get"
    });
}