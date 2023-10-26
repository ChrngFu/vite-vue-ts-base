<template>
  <div class="horizontal">
    <Sidebar />
    <el-main class="page-content">
      <Header />
      <router-view v-slot="{ Component }" style="height: calc(100% - 64px)">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </el-main>
  </div>
</template>
<script setup lang="ts">
import Header from '../header/index.vue';
import Sidebar from '../sidebar/index.vue';
</script>
<style scoped lang="scss">
.horizontal {
  width: 100%;
  height: 100%;
  display: flex;

  .page-content {
    height: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
