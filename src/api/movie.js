import axios from '../axios/index'

export const nowPlaying = ()=>{
    return axios.request({
        url: "/api/movieOnInfoList?cityId=10",
        method: "get"
    });
}