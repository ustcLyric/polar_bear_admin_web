import {defineStore} from "pinia";


interface UserStore {
    userinfo: string,// 用户数据存放
    token: string,//登陆token
    expire: number,// token时间
    lastLoginTime: number // 最后一次登陆时间
}

const useUserStore = defineStore('userStore', {
    state: (): UserStore => ({
        userinfo: '',
        token: '',
        expire: 0,
        lastLoginTime: 0
    }),
    actions: {},
})