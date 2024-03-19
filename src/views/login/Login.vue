<template>
  <div class="login">
    <div class="login-panel">
      <div class="login_tabs">
        <el-tabs v-model="activeName"  stretch type="border-card" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane  name="account">
          <template #label>
            <div class="label">
                <el-icon><UserFilled /></el-icon>             
                <span class="text">帐号登录</span>
              </div>
          </template>
          <accountLogin ref="accountRef"></accountLogin>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="phone">
        </el-tab-pane>  
        </el-tabs>
      </div>
      <div class="controls">
        <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" @click="login" class="login-btn">login</el-button>
    </div>
  </div>  
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import accountLogin from './accountLogin.vue';
import type { TabsPaneContext } from 'element-plus'
import { localCache } from '@/utils/cache';
const activeName = ref('account')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const isRemPwd = ref(localCache.getCache('isRemPwd') ?? false)

watch(isRemPwd,(newValue)=>{
  isRemPwd.value = newValue
  // console.log(newValue)
  // localCache.setCache('isRemPwd',newValue)
})
const accountRef = ref()
const login = ()=>{
  accountRef.value.login(isRemPwd.value)
}
</script>

<style scoped>
.login{
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-panel {
  width: 330px;
  margin-bottom: 150px;
}
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .text {
      margin-left: 5px;
    }
  

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    
  }

</style>