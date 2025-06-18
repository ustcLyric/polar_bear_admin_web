<template>
  <!--  header-->
  <!--  -->
  <!--  <Header/>-->
  <!--  &lt;!&ndash;  catalog&ndash;&gt;-->
  <!--  <router-view/>-->
  <!--  &lt;!&ndash;  content&ndash;&gt;-->
  <!--  &lt;!&ndash;  footer&ndash;&gt;-->
  <!--  <Footer/>-->
  <div class="container">
    <div class="header"></div>
    <div class="menu">

    </div>


    <div class="content">
    </div>


  </div>
</template>
<script setup lang="ts">

import Header from "@/layout/header.vue";
import Catalog from "@/layout/catalog.vue";
import Footer from "@/layout/footer.vue";
</script>


<style scoped lang="less">
.container {
  height: @layout-container-height;
  width: @layout-container-width;
  background-color: pink;
}

.header {
  width: @layout-header-width;
  height: @layout-header-height;
  background-color: yellow;
}

.content {
  width: @layout-content-width;
  height: @layout-content-height;
  background-color: white;
  position: absolute;
  top: @layout-header-height;
  left: @layout-menu-width;
  padding-top: 20px;
  padding-left: 20px;
}

.menu {
  background-color: #165DFF;
  width: @layout-menu-width;
  height: @layout-menu-height;
  position: absolute;
  left: 0;
  top: @layout-header-height;


}
</style>