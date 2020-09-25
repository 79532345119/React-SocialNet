import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '63a35e59-4989-4619-99e4-f77b746495a2'}
});



export const usersAPI ={
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`/follow/${userId}`)
        .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`,{},)
        .then(response => response.data)
    }
}

export const authApi =() =>{
    return instance.get(`/auth/me`)
    .then(response => response.data)
}