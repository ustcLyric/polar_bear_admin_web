<template>
  <div class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="menu">
      <el-scrollbar class="scrollbar">
        <el-menu :default-active="$route.path">
          <Menu :menuList="userStore.menuList"/>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="content">
      <Content/>
    </div>
    <div class="tag">
      <Tag/>
    </div>

  </div>
</template>
<script setup lang="ts">

import Header from "@/layout/header/index.vue";
import Content from "@/layout/content/index.vue"
import Menu from "@/layout/menu/index.vue"
import Tag from "@/layout/tag/index.vue"
import {useUserStore} from "@/store/user";

const userStore = useUserStore()
const menuList = [
  {
    path: '/home',
    meta: {
      title: '首页',
      icon: 'HomeIcon', // 假设这是一个图标组件的名称
      hidden: false
    },
    children: []
  },
  {
    path: '/about',
    meta: {
      title: '关于我们',
      icon: 'AboutIcon',
      hidden: false
    },
    children: []
  },
  {
    path: '/services',
    meta: {
      title: '服务',
      icon: 'ServicesIcon',
      hidden: false
    },
    children: [
      {
        path: '/services/design',
        meta: {
          title: '设计服务',
          icon: 'DesignIcon',
          hidden: false
        }
      },
      {
        path: '/services/development',
        meta: {
          title: '开发服务',
          icon: 'DevelopmentIcon',
          hidden: false
        }
      }
    ]
  },
  {
    path: '/contact',
    meta: {
      title: '联系我们',
      icon: 'ContactIcon',
      hidden: true // 这个菜单项会被隐藏
    },
    children: []
  }
];
</script>


<style scoped lang="less">
.container {
  height: @layout-container-height;
  width: @layout-container-width;
  //background-color: pink;
}

.header {
  width: @layout-header-width;
  height: @layout-header-height;
  //background-color: yellow;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); // 添加阴影效果
}

.content {
  border-top: 1px solid grey;
  width: @layout-content-width;
  height: @layout-content-height;
  background-color: white;
  position: absolute;
  top: calc(@layout-header-height + @layout-tag-height);
  left: @layout-menu-width;
  padding-top: 20px;
  padding-left: 20px;
}

.menu {
  //background-color: #165DFF;
  width: @layout-menu-width;
  height: @layout-menu-height;
  position: absolute;
  left: 0;
  top: @layout-header-height;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  .scrollbar {
    width: 100%;
    height: @layout-menu-height;

    .el-menu {
      border-right: none;
    }
  }
}

.tag {
  position: absolute;
  left: @layout-menu-width;
  top: @layout-header-height;
  width: @layout-tag-width;
  height: @layout-tag-height;
  //background-color: aqua;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); // 添加阴影效果

}

:deep(.el-divider--horizontal) {
  margin: 0;
}

.divider {
  .el-divider--horizontal {
    margin: 0;
  }
}
</style>