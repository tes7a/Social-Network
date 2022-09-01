import axios from 'axios';

//userAPI types

type UserAPIType = {
    items: UserType[],
    totalCount: number,
    error: string,
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string,
    },
    followed: boolean,
}

//profileAPI type 

type ProfileAPIType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    },
    photos: {
        small: string,
        large: string,
    },
}

//universal type

export type ResponseType <T> = {
    resultCode: number
    messages: string[],
    data: T
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '48fd56ac-8cc3-45ea-82e5-98928a417a7f'
    }
})

export const userAPI = {
    getUsers(pageNumber?: number, pageSize?: number) {
        return instance.get<UserAPIType>(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post<ResponseType<{}>>(`follow/${id}`, {})
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType<{}>>(`follow/${id}`)
            .then(res => res.data)
    },
}

export const profileAPI = {
    profile(userId: number) {
        return instance.get<ProfileAPIType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<{}>>(`profile/status`, { status })
    }
}


export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string } >>(`auth/me`)
    },
    login(email?: string, password?: string, rememberMe?: boolean) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete<ResponseType<{}>>(`auth/login`)
    }
}