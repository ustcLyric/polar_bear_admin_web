// 对外暴露插件对象
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 加载自定义组件

// const gloableComponent = {};
export default {
    install(app: any) {
        // 注册自定义组件
        // Object.keys(gloableComponent).forEach(key => {
        //     app.component(key, gloableComponent[key])
        // })
        // Element Icon全局注册
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}