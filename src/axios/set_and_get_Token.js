export const setToken = (key, value) => {
    if (typeof value === Object) {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}
export const getToken = (key) => {
    return window.localStorage.getItem(key)
}