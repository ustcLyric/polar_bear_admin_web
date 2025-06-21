<template>
  <div style="display: flex;justify-content: space-between">
    <div class="left" style="display: flex;align-items: center;justify-content: left">
      <!--      <img src="@/assets/img/logo.png" style="width: 50px;height: 50px">-->
      <div style="margin-left: 20px">
        Polar Bear Admin
      </div>
    </div>
    <div class="right" style="display: flex;align-items: center">
      <el-icon style="margin-right: 8px">
        <component :is="FullScreen"/>
      </el-icon>
      <el-icon style="margin-right: 8px">
        <component :is="Switch"/>
      </el-icon>
      <!--  个人信息管理    -->
      <div style="margin-right: 8px">
        <el-dropdown>
          <el-avatar size="default">
            杨欢
          </el-avatar>
          <template #dropdown>
            <div style="width: 200px;height: 200px">

              <el-dropdown-menu>
                <el-dropdown-item>1</el-dropdown-item>
                <el-dropdown-item>2</el-dropdown-item>
                <el-dropdown-item>
                  <span>
                    <el-icon>
                      <component :is="Shop"/>
                    </el-icon>
                  </span>
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </div>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {FullScreen, Shop, Switch} from "@element-plus/icons-vue";
</script>


<style scoped lang="less">

</style>