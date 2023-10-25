<template>
  <div>
    <h2>Login</h2>
    <div>
      <h4>token: {{ token }}</h4>
      <button @click="handleToken">设置token</button>
      <button @click="goBack">跳转返回</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
// import { getList } from '@/apis/user';

const useToken = useUserStore();

//storeToRefs 会跳过所有的 action 属性
const { token } = storeToRefs(useToken);

//action 属性直接解构
const { updateToken } = useToken;

const handleToken = () => {
  updateToken('123456');
};
const route = useRoute();
const router = useRouter();
const goBack = () => {
  // 解析query
  const { query } = route;
  router.replace(query.redirect as string);
};

// getList({ id: 2 });
</script>

<style scoped lang="scss">
h2 {
  color: $test-color;
}
</style>
@/store/modules/user
