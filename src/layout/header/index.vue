<template>
  <div class="header">
    <span>当前布局：{{ layoutMode }}</span>
    <span> </span>
    <button @click="changeLayout">切换布局</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '@/store/modules/settings';
const useSettings = useSettingsStore();
const { layoutMode } = storeToRefs(useSettings);
const { changeLayoutMode } = useSettings;
// 切换布局
const changeLayout = () => {
  const mode = layoutMode.value === 'classic' ? 'horizontal' : 'classic';
  changeLayoutMode(mode);
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 64px;
  border: 1px solid pink;
}
</style>
