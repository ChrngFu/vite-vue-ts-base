<template>
  <el-header class="header">
    <div v-if="layoutMode === 'classic'" @click="toggleCollapse">
      <el-icon v-if="menuCollapse" size="28"><Expand /></el-icon>
      <el-icon v-else size="28"><Fold /></el-icon>
    </div>
    <div class="user-container">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />

      <div>
        <el-dropdown trigger="click">
          <div class="user-name">Administration</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="setting">
      <el-icon size="28" @click="showSetting = true"><Setting /></el-icon>
    </div>
  </el-header>
  <el-drawer v-model="showSetting" title="系统设置" direction="rtl" size="300px" :append-to-body="false">
    <el-divider> 主题颜色 </el-divider>
    <div class="toggle-theme">
      <el-switch v-model="isDark" size="large" active-text="Light" inactive-text="Dark" @change="toggleDark" />
    </div>
    <el-divider> 布局方式 </el-divider>
    <div class="layout">
      <div :class="layoutMode === 'classic' ? 'classic active' : 'classic'" @click="changeLayout('classic')">经典</div>
      <div
        :class="layoutMode === 'horizontal' ? 'horizontal active' : 'horizontal'"
        @click="changeLayout('horizontal')"
      >
        水平
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '@/store/modules/settings';

import { useDark, useToggle } from '@vueuse/core';

const useSettings = useSettingsStore();
const { layoutMode, menuCollapse } = storeToRefs(useSettings);

// 切换折叠
const toggleCollapse = () => {
  menuCollapse.value = !menuCollapse.value;
};

const showSetting = ref(false);
// 主题颜色模式
const isDark = useDark();
const toggleDark = useToggle(isDark);

// 切换布局
const { changeLayoutMode } = useSettings;
const changeLayout = (mode: string) => {
  changeLayoutMode(mode);
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px red dashed;
  position: relative;
  .el-icon {
    cursor: pointer;
  }
  .user-container {
    width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    position: absolute;
    right: 60px;
    background-color: #dfdfdf;
    & > div {
      // width: 100px;
      margin-left: 8px;
      .user-name {
        width: 100px;
        font-size: 20px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .setting {
    position: absolute;
    right: 12px;
  }
}
.toggle-theme {
  width: 100%;
  text-align: center;
}
.layout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #000;
  & > div {
    display: block;
    width: 108px;
    height: 90px;
    box-sizing: border-box;
    text-align: center;
    line-height: 90px;
    user-select: none;
    cursor: pointer;
  }

  .active {
    border: 1px solid #409eff;
  }
  .classic {
    background: url('/public/classical.png') no-repeat;
    background-size: 100% 100%;
  }
  .horizontal {
    background: url('/public/horizontal.png') no-repeat;
    background-size: 100%;
  }
}
</style>
