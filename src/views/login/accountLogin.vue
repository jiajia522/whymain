<template>
  <div>
    <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password"/>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import useLoginStore from '@/store/login/login';
import { localCache } from '@/utils/cache';

const formSize = ref('default')
const ruleForm = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入账户', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password:[
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'},
  ]
})
const loginStore = useLoginStore()
const login = (isRemPwd:boolean)=>{
  const name = ruleForm.name
  const password = ruleForm.password
  // ({name, password}).then( res =>{
  //   console.log(res)
  // })
    // 记住密码
    // 缓存姓名和密码
    loginStore.loginAccountAction({name,password}).then(()=>{
      if(isRemPwd) {
        console.log(isRemPwd)
        // localCache.setCache('isRemPwd',isRemPwd)
        localCache.setCache('name',name)
        localCache.setCache('password',password)
      } else {
        console.log(isRemPwd)
        localCache.removeCache('isRemPwd')
        localCache.removeCache('name')
        localCache.removeCache('password')
      }
    }) 
  
  // 
}
defineExpose({
  login
})
</script>

<style scoped>

</style>