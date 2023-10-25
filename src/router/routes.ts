import Home from '@/pages/home.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const auth = () => {
  if (!localStorage.getItem('token')) {
    // 未登陆,重定向到登录页面
    return '/login';
  }
};

const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login.vue'), //路由懒加载
  },
  {
    path: '/',
    // beforeEnter: auth, //路由独享守卫
    name: 'Home', //增加name，动态路由通过name挂载到该子路由下
    meta: {
      title: '系统首页', // 页面标题
      auth: true, //需要登录权限
    },
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue'),
  },
];

export default routes;
