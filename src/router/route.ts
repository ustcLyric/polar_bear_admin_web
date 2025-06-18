export const constantRoute = [
    // 1.首页
    {
        path: '/',
        component: import('@/layout/index.vue'),
        name: 'index',
        meta: {
            hidden: false,
            title: '首页',
        },
        children: [],
    },
    // 2.登陆页
    {
        path: '/login',
        component: import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            hidden: false,
            title: '登陆',
        },
        children: [],
    },
]