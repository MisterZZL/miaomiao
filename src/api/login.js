import axios from '../axios/index'


export const login = (username,password)=>{
    return axios.request({
        url: "/api2/users/login",    
        method: "post",
        data:{
            username, 
            password
        }
    });
}