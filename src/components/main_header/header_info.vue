<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        size="20"
      />
      {{ userInfo.name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="quitLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants';
import useLoginStore from '@/store/login/login';
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useLoginStore()
const userInfo = store.userInfo
const quitLogin = () =>{
    localCache.removeCache(LOGIN_TOKEN)
    router.push('/login')
  }
</script>

<style scoped>
.el-dropdown-link{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>