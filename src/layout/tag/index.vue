<template>
  <el-tag v-for="tag in tagStore.tags" :key="tag.name" type="primary" closable @close="tagClose(tag)">
    {{ tag.name }}
  </el-tag>
</template>

<script setup lang="ts">

import {type Tag, useTagStore} from "@/store/tag";

const tagStore = useTagStore()

const tagClose = (tag: Tag) => {
  tagStore.removeTag(tag)
}

</script>


<style scoped lang="less">

</style>