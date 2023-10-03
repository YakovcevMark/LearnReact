import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "8d09abf8-2a50-4564-8e2f-d00a6cf398df"}

})
export const usersAPI = {
    getUsers(pageSize,currentPage){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(resp => resp.data)
    },
    makeFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(resp => resp.data)
    },
    makeUnFollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(resp => resp.data)
    }
}
export const authAPI = {
    authorization(){
        return instance.get(`auth/me`)
            .then(resp => resp.data)
    },
    login(data){
        return instance.post(`auth/login`,{...data})
            .then(resp => resp.data)
    },
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(resp => resp.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(resp => resp.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
    }
}