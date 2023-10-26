<template>
  <el-aside :width="menuCollapse ? '65px' : '201px'" class="sidebar">
    <div class="logo">
      <img src="/public/logo.png" alt="logo" />
      <div v-if="!menuCollapse">后台管理</div>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="menuCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><House /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><House /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/modules/settings';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();

const { menuCollapse } = storeToRefs(settingsStore);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.sidebar {
  overflow: hidden;
  transition: width 0.3s;
  border-right: 1px solid var(--el-border-color);
  .logo {
    width: 100%;
    height: 60px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    img {
      width: 40px;
    }
    div {
      padding-left: 12px;
      // 文字不换行
      white-space: nowrap;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
