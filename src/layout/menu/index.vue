<template>
  <template v-for="(item,index) in menuList" :key="item.path">
    <!--    无子路由-->
    <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path" @click="goRoute">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
    <!--    有一个子路由-->
    <el-menu-item v-if="item.children && item.children.length === 1 && !item.children[0].meta.hidden"
                  :index="item.children[0].path" @click="goRoute">
      <template #title>
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        {{ item.children[0].meta.title }}
      </template>
    </el-menu-item>
    <!--    多个子路由-->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        {{ item.meta.title }}
      </template>
      <Menu :menuList="item.children"/>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import router from "@/router";
import {useTagStore} from "@/store/tag";

defineProps(["menuList"])
const tagStore = useTagStore()

// 路由跳转
const goRoute = (vc: any) => {
  console.log('vc:', vc)
  router.push(vc.index)
}


</script>
<script lang="ts">
export default {
  name: 'Menu',
}

</script>


<style scoped lang="less">

</style>