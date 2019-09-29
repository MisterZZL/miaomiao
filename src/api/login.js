import axios from '../axios/index'

//登录
export const login = (username, password,verifyImg) => {
    return axios.request({
        url: "/api2/users/login",
        method: "post",
        data: {
            username,
            password,
            verifyImg
        }
    });
}

//登出
export const loginOut = () => {
    return axios.request({
        url: "/api2/users/logout",
        method: "get",
    });
}


//判断是否登录
export const validate = () => {
    // console.log("进入到api下validate")
    return axios.request({
        url: "/api2/users/validate",
        method: "get"
    });
}