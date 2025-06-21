import '@/style/index.less'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
// 导入Element组件
import ElementPluse from 'element-plus'
// 导入Element组件样式
import 'element-plus/dist/index.css'
// 导入Element国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import '@/permission'
import {useUserStore} from "@/store/user";
import {constantRoute} from "@/router/route.ts";
import globalComponents from "@/component";
import pinia from "@/store";

const init = () => {
    const app = createApp(App)
    // 1.安装自定义注册插件
    app.use(globalComponents)
    // 2.ElementUi
    app.use(ElementPluse, {
        locale: zhCn
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(pinia)
    app.use(router)
    const userStore = useUserStore()
    userStore.menuList = constantRoute
    app.mount('#app')
}

init()
