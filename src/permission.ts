// 登陆路由 ｜ 404 ｜ 权限管理 ｜ 用户信息 ｜ 数据大屏


// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
import pinia from "./store";
import router from "@/router";
import {useTagStore} from "@/store/tag";
import {useUserStore} from "@/store/user";
import {GET_TOKEN, REMOVE_TOKEN} from "@/utils/token.ts";
import {ElMessage} from "element-plus";

const tagStore = useTagStore(pinia)
const userStore = useUserStore(pinia)
router.beforeEach((to, from, next) => {
    // 存储tag 首先还得先判断是否已经存在 不存在才可添加
    // 存储 tag，如果不存在才添加
    // // to 即将访问的路由
    // console.log('to', to);
    // console.log('toquery', to.query.redirect);
    // // // from 即将前往的路由
    // console.log('from', from);
    // // // next 放行
    // console.log('next', next);
    const token = GET_TOKEN()
    // 1.当不存在token则跳转login
    if (token) {
        if (to.path === '/login') {
            next({path: to.query.redirect as string})
        } else {
            if (userStore.userinfo.userName) {
                next()
            } else {
                try {
                    // 1. 获取用户信息
                    next()
                } catch (err: any) {
                    // 1.移除Token
                    REMOVE_TOKEN()
                    ElMessage.error({
                        showClose: true,
                        message: err.message,
                        type: 'error',
                    })
                    next({path: '/login', query: {redirect: to.path}})

                }
            }
        }

    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({path: '/login', query: {redirect: to.path}})
        }
    }


    // 存储tag 首先还得先判断是否已经存在 不存在才可添加
    tagStore.addTag({name: to.meta.title, path: to.fullPath})

    console.log('after', tagStore.tags)

    next()
})

router.afterEach((to, from) => {

})


