<template>
  <div class="layout">
    <Classic v-if="layoutMode === 'classic'" />
    <Horizontal v-else />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '@/store/modules/settings';

import Classic from './classic/index.vue';
import Horizontal from './horizontal/index.vue';

const useSettings = useSettingsStore();
const { layoutMode } = storeToRefs(useSettings);
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
}
</style>
