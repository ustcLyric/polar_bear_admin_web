import {defineStore} from "pinia";
import {getUserInfoApi, userLoginApi} from "@/api/user";
import type {RouteRecordRaw} from "vue-router";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";
import type {UserLoginRequest} from "@/api/user/type.ts";

interface UserInfo {
    userName: string
}

interface UserStore {
    userinfo: UserInfo,// 用户数据存放
    token: string,//登陆token
    expire: number,// token时间
    lastLoginTime: number // 最后一次登陆时间
    menuList: RouteRecordRaw[], // 可见菜单数据
}

export const useUserStore = defineStore('userStore', {
    state: (): UserStore => <UserStore>({
        userinfo: {
            userName: '',
        },
        token: GET_TOKEN(),
        expire: 0,
        lastLoginTime: 0,
        menuList: [],
    }),
    actions: {

        async userLogin(request: UserLoginRequest) {
            // 1.登陆获取请求数据

            // const userLogin = await userLoginApi(null)
            this.userinfo.userName = 'ustcYang'
            this.token = 'ustc-yang-nb-plus'
            // 由于pinia/vuex存储数据其实利用js并非持久化
            // this.token = (result.token as string)
            // 本地存储持久化
            // localStorage.setItem("TOKEN", (result.data.token as string))
            // SET_TOKEN(result.token as string)
            SET_TOKEN(this.token)
        },

        async initUserStore() {
            // 1.获取用户信息


            // 2.获取菜单信息
        },
        async getUserInfo() {
            const userInfo = await getUserInfoApi()
            // 1.分离数据
        }
    },
})