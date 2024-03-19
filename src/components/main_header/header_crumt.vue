<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in BreadCrumbList" :key="item.name">
        <el-breadcrumb-item >{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">

import useLoginStore from '@/store/login/login';
import { mapPathToBreadCrumb } from '@/utils/map-menus'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const userMenus = useLoginStore().userMenus
const BreadCrumbList = computed(()=>{
  return mapPathToBreadCrumb(route.path,userMenus)
})
console.log(BreadCrumbList)
</script>

<style scoped>

</style>