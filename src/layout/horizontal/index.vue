<template>
  <div class="horizontal">
    <Sidebar />

    <div class="page-content">
      <Header />
      <!-- 路由视图 -->
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
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
  justify-content: flex-start;
  border: 1px dashed red;

  .page-content {
    flex: 1;
    height: 100%;
    border: 1px dashed skyblue;
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
