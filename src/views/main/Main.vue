<template>
  <div>
    <el-container class="main-content">
      <el-aside :width="navFlag?'60px':'210px'" >
          <main_menu :navFlag="navFlag" ></main_menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main_header @changeNavFlag = 'handleChangeNav'> </main_header>
        </el-header>
        <el-main>
          <router-view></router-view>
          
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
import { ref } from 'vue';
  
  const navFlag = ref(false)
  const handleChangeNav = (flag:boolean) =>{
    navFlag.value = flag
  }
</script>

<style scoped>
.main-content{
  height:100vh;
}
.el-aside{
  transition: width 0.3s ease;
}
.el-main{
  background: #f0f2f5;
  /* padding: 20px */
}
</style>