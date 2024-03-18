<template>
  <div class="main-menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" />
      <h2 class="title" v-show="!navFlag">系统</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="navFlag"
      >
      <template v-for="(item) in userMenus" :key="item.id" >
        <el-sub-menu :index="item.id+''" >
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for='(subitem) in item.children' :key="subitem.id">
            <el-menu-item :index="subitem.id+''" @click="handleItemClick(subitem)">{{ subitem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
       
      </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';
// import { ref } from 'vue';
import { useRouter } from 'vue-router';
  defineProps({
    'navFlag':{
      type: Boolean,
      default: false
    }
    }
  )
const loginStore = useLoginStore()
const router = useRouter()
const userMenus = loginStore.userMenus;


const handleItemClick = (subitem:any) => {
    router.push(subitem.url)
  }
</script>

<style scoped lang="less">
.main-menu{
  background-color: #001529;
  height:100%
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}

</style>