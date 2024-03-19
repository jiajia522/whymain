<template>
  <div>
over
<button @click="quitLogin">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN } from '@/global/constants';
import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<style scoped>

</style>