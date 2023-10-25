import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

import { useUserStore } from '@/store/user';

const router = createRouter({
  history: createWebHashHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

export default router;

router.beforeEach((to) => {
  // 这样做是可行的，因为路由器是在其被安装之后开始导航的，
  // 而此时 Pinia 也已经被安装。
  const userStore = useUserStore();

  if (to.path === '/login') {
    //在登录页做清除操作，如清除token等
  }

  if (!userStore.token && to.meta.auth) {
    console.error('该路径 ', to.path, ' 需要鉴权');
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
});
