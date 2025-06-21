// 请求包

import axios from "axios";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/store/user";

// 1.创建请求
const request = axios.create({
    // 基本请求路径
    baseURL: '/',
    // 超时时间配置
    timeout: 1000,
})

// 2.请求拦截器
request.interceptors.request.use(config => {
    // TODO 建议去识别用户身份然后登录
    let userStore = useUserStore()
    // config配置对象，heads属性请求头，经常给服务器端携带公共参数
    config.headers.set('token', userStore.token)
    return config;
})

// 3.添加响应拦截器
request.interceptors.response.use(response => {
    // 成功回调

    // 简化数据
    return response.data;
}, (error) => {
    // 失败回调 处理http网络错误

    // 定义一个变量：存储网络错误信息
    let message = "";
    // http状态码
    const status = error.response.status;
    switch (status) {
        case 401:
            message = "Token过期";
            break;
        case 403:
            message = "无权访问";
            break;
        case 404:
            message = "请求地址错误";
            break;
        case 500:
            message = "服务器出现错误";
            break;
        default:
            message = "网络出现问题";
            break;
    }
    // 提示错误信息
    ElMessage({
        type: "error",
        message
    })
    return Promise.reject(error)

})

export default request;