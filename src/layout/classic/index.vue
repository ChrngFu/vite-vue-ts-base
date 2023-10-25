<template>
  <div class="classic">
    <Header />
    <div class="page-content">
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
</script>
<style scoped lang="scss">
.classic {
  width: 100%;
  height: 100%;
  .page-content {
    width: 100%;
    height: calc(100% - 64px);
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
