import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({command, mode}) => {

    // 1.获取环境变量
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            vue(),
            vueDevTools(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        css: {
            preprocessorOptions: {
                // 配置全局共享变量less
                less: {
                    additionalData: '@import "@/style/variables.less";',
                },
            }
        },
        server: {
            proxy: {
                // 1.用户代理服务
                '/api': {
                    target: "http://127.0.0.1:18001", // 目标地址
                    changeOrigin: true, // 改变跨域
                    rewrite: (path) => path.replace(/^\/api/, '/trpc.polarBear.user.PolarBearUserService'), // 重写路径
                }
            }
        }
    }

})
