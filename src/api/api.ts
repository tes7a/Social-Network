import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '48fd56ac-8cc3-45ea-82e5-98928a417a7f'
    }
})

export const userAPI = {
    getUsers(pageNumber?: number, pageSize?: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    profile(userId: string){
        return instance.get(`profile/${userId}`)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}