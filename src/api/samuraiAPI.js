import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "8d09abf8-2a50-4564-8e2f-d00a6cf398df"}
})
export const usersAPI = {
    async getUsersRequest(pageSize, currentPage) {
        const resp = await instance.get(`users?count=${pageSize}&page=${currentPage}`)
        return resp.data;
    },
    async makeFollow(userId) {
        const resp = await instance.post(`follow/${userId}`)
        return resp.data
    },
    async makeUnFollow(userId) {
        const resp = await instance.delete(`follow/${userId}`)
        return resp.data
    }
}
export const authAPI = {
    async authorization() {
        const resp = await instance.get(`auth/me`)
        return resp.data
    },
    async login(data) {
        const resp = await instance.post(`auth/login`, {...data})
        return resp.data
    },
    async logout() {
        const resp = await instance.delete(`auth/login`)
        return resp.data
    },
}
export const profileAPI = {
    async getProfile(userId) {
        const resp = await instance.get(`profile/${userId}`)
        return resp.data
    },
    async getStatus(userId) {
        const resp = await instance.get(`profile/status/${userId}`)
        return resp.data
    },
    async updateStatus(status) {
        return await instance.put(`profile/status`, {status})
    }
}