// // 对外暴露配置路由
// // 1.静态路由
// import type {RouteRecordRaw} from "vue-router";
//
// export const constantRoute= [
//   // 1.登陆
//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue'),
//     name: 'login',
//     meta: {
//       title: "登陆",
//       hidden: true,
//     },
//   },
//   // 2. 注册
//   {
//     path: '/register',
//     component: () => import('@/views/register/index.vue'),
//     name: 'register',
//     meta: {
//       title: "注册",
//       hidden: true,
//     },
//   },
//   // 3.登陆成功展示home
//   {
//     path: '/',
//     component: () => import('@/layout/layout.vue'),
//     name: 'layout',
//     meta: {
//       title: "",
//       hidden: false,
//       icon: ""
//     },
//     redirect: '/home',
//     children: [
//       {
//         path: '/home',
//         component: () => import('@/views/home/index.vue'),
//         name: 'home',
//         meta: {
//           title: "首页",
//           hidden: false,
//           icon: "House"
//         },
//       }
//     ]
//   },
//   // 4.404
//   {
//     path: '/404',
//     component: () => import('@/views/404/index.vue'),
//     name: '404',
//     meta: {
//       title: "访问错误",
//       hidden: true,
//       icon: "House"
//     },
//
//   },
//   // 4. 随机
//   {
//     path: '/:pathMatch(.*)*',
//     redirect: '/404',
//     name: 'any1',
//     meta: {
//       title: "任意",
//       hidden: true,
//       icon: "House"
//
//     },
//
//   },
//   // 1.权限管理
//   {
//     path: '/acl',
//     component: () => import('@/layout/layout.vue'),
//     name: 'acl',
//     meta: {
//       title: "权限管理",
//       hidden: false,
//       icon: "Lock"
//     },
//     redirect: '/acl/user',
//     children: [
//       {
//         path: '/acl/user',
//         component: () => import('@/views/acl/user/index.vue'),
//         name: 'user',
//         meta: {
//           title: "用户管理",
//           hidden: false,
//           icon: "User"
//         },
//       },
//       {
//         path: '/acl/permission',
//         component: () => import('@/views/acl/permission/index.vue'),
//         name: 'permission',
//         meta: {
//           title: "菜单管理",
//           hidden: false,
//           icon: "Grid"
//         },
//       },
//       {
//         path: '/acl/role',
//         component: () => import('@/views/acl/role/index.vue'),
//         name: 'role',
//         meta: {
//           title: "角色管理",
//           hidden: false,
//           icon: "UserFilled"
//         },
//       },
//     ]
//   },
// ]
//
// // 2.动态路由
// export const asyncRoute = [
//
//   // 1.权限管理
//   {
//     path: '/acl',
//     component: () => import('@/layout/layout.vue'),
//     name: 'acl',
//     meta: {
//       title: "权限管理",
//       hidden: false,
//       icon: "Lock"
//     },
//     redirect: '/acl/user',
//     children: [
//       {
//         path: '/acl/user',
//         component: () => import('@/views/acl/user/index.vue'),
//         name: 'user',
//         meta: {
//           title: "用户管理",
//           hidden: false,
//           icon: "User"
//         },
//       },
//       {
//         path: '/acl/permission',
//         component: () => import('@/views/acl/permission/index.vue'),
//         name: 'permission',
//         meta: {
//           title: "菜单管理",
//           hidden: false,
//           icon: "Grid"
//         },
//       },
//       {
//         path: '/acl/role',
//         component: () => import('@/views/acl/role/index.vue'),
//         name: 'role',
//         meta: {
//           title: "角色管理",
//           hidden: false,
//           icon: "UserFilled"
//         },
//       },
//     ]
//   },
//   // 2.用户管理
//   {
//     path: '/admin',
//     component: () => import('@/layout/layout.vue'),
//     name: 'admin',
//     meta: {
//       title: "个人中心",
//       hidden: false,
//       icon: "Avatar"
//     },
//     redirect: 'admin/userinfo',
//     children: [
//       {
//         path: '/admin/userinfo',
//         component: () => import('@/views/user/info/index.vue'),
//         name: 'userinfo',
//         meta: {
//           title: "用户信息",
//           hidden: false,
//           icon: "Avatar"
//         },
//       },
//       {
//         path: '/admin/setting',
//         component: () => import('@/views/user/setting/index.vue'),
//         name: 'setting',
//         meta: {
//           title: "用户设置",
//           hidden: false,
//           icon: "Avatar"
//         },
//       }
//     ],
//   },
//
// ]
//
