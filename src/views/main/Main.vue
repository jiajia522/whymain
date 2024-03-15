<template>
  <div>
    <el-container class="main-content">
      <el-aside width="200px">
          <main_menu></main_menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main_header> </main_header>
        </el-header>
        <el-main>
          <button @click="quitLogin">退出登录</button>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants';
import router from '@/router';
import { localCache } from '@/utils/cache';
import main_menu from '@/components/main_menu/main_menu.vue';
import main_header from '@/components/main_header/main_header.vue';
  const quitLogin = () =>{
    localCache.removeCache(LOGIN_TOKEN)
    router.push('/login')
  }
</script>

<style scoped>
.main-content{
  height:100vh;
}
</style>