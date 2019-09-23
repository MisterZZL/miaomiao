import axios from '../axios/index'

// 进入管理员页面,获取管理员信息
export const getAdmin = () => {
    return axios.request({
        url: "/api2/admin",
        method: "get"
    });
}

// 进入后台管理页面，获取用户列表
export const get_userList = () => {
    return axios.request({
        url: "/api2/admin/userList",
        method: "get"
    });
}