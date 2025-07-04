import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRoute} from "@/router/route.ts";

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute,
    // 滚动行为配置
    scrollBehavior: () => ({left: 0, top: 0}),
})

export default router
