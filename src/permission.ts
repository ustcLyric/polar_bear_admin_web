// 登陆路由 ｜ 404 ｜ 权限管理 ｜ 用户信息 ｜ 数据大屏


// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
import router from "@/router";

router.beforeEach(async (to, from, next) => {
    next()
})

router.afterEach((to, from) => {

})


