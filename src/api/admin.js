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

// 账号冻结的相关操作
export const updateFreeze = (email, isFreeze) => {
    return axios.request({
        url: "/api2/admin/updateFreeze",
        method: "post",
        data: {
            email,
            isFreeze
        }
    });
}

export const deleteUser = (email, isFreeze) => {
    return axios.request({
        url: "/api2/admin/deleteUser",
        method: "post",
        data: {
            email
        }
    });
}