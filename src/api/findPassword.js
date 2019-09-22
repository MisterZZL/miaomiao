import axios from '../axios/index'

//登录
export const find_password = (password, email, verify) => {
    return axios.request({
        url: "/api2/users/findPassword",
        method: "post",
        data: {        
            password,
            email,
            verify
        }
    });
}