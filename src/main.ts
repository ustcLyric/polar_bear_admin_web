import '@/style/index.less'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
// 导入Element组件
import ElementPluse from 'element-plus'
// 导入Element组件样式
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPluse)
app.use(createPinia())
app.use(router)
app.mount('#app')
