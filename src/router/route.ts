export const constantRoute = [
    // 1.首页
    {
        path: '/',
        component: import('@/layout/index.vue'),
        name: 'index',
        meta: {
            hidden: false,
            title: 'layout',
            icon: "House"
        },
        children: [
            {
                path: '/home',
                component: import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    hidden: false,
                    title: '首页',
                    icon: "House",
                }
            }
        ],
    },
    // 2.登陆页
    {
        path: '/login',
        component: import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            hidden: true,
            title: '登陆',
            icon: "House"
        },

    },
    // 3.权限管理
    {
        path: '/setting',
        component: import('@/layout/index.vue'),
        redirect: '/setting/permission',
        name: 'setting',
        meta: {
            hidden: false,
            title: '设置',
            icon: "Setting"

        },
        children: [

            {
                path: '/setting/role',
                component: import('@/views/setting/role/index.vue'),
                name: 'role',
                meta: {
                    hidden: false,
                    title: '角色管理',
                    icon: "Avatar"
                },
            },
            {
                path: '/setting/permission',
                component: import('@/views/setting/permission/index.vue'),
                name: 'permission',
                meta: {
                    hidden: false,
                    title: '菜单管理',
                    icon: 'Operation',
                },
            },

            {
                path: '/setting/user',
                component: import('@/views/setting/user/index.vue'),
                name: 'user',
                meta: {
                    hidden: false,
                    title: '用户管理',
                    icon: "UserFilled"
                },
            },
        ]

    }
]