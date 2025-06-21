<script setup lang="ts">

</script>

<template>
  <!-- 路由组件出口 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--    渲染layout一级路由组件的子路由    -->
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped lang="less">

</style>