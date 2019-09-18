import axios from '../axios/index'

//登录
export const register = (username, password, email, verify) => {
    return axios.request({
        url: "/api2/users/register",
        method: "post",
        data: {
            username,
            password,
            email,
            verify
        }
    });
}

export const get_verify = (email) => {
    return axios.request({
        url: "/api2/users/verify?email=" + email,
        method: "get",

    });
}