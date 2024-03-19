<template>
  <div class="main-header">
    <div class="menu-icon">
      <el-icon size="20px" @click="changeNav">
        <!-- <Fold /> -->
        
        <component :is=" flogRef ? 'fold':'expand'"></component>
      </el-icon>

    </div>
    <div class="content">
      <header_crumt></header_crumt>
      <header_info></header_info>
    </div>
  </div>
</template>

<script setup lang="ts">
import header_crumt from "./header_crumt.vue";
import header_info from "./header_info.vue";
import { ref } from "vue";
  const emit =  defineEmits(['changeNavFlag'])
  const flogRef = ref(false)
  const changeNav = ()=>{
    flogRef.value = !flogRef.value
    emit('changeNavFlag',flogRef.value)
  }
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>