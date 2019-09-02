import axios from '../axios/index'

// 正在热映
export const nowPlaying = () => {
    return axios.request({
        url: "/api/movieOnInfoList?cityId=10",
        method: "get"
    });
}

// 即将上映
export const comingSoon = () => {
    return axios.request({
        url: "/api/movieComingList?cityId=10",
        method: "get"
    });
}