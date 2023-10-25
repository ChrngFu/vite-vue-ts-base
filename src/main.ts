import { createApp } from 'vue';
import router from './router/index';
import store from './store';
import App from './App.vue';

import './assets/styles/common.scss';

const app = createApp(App);

app.use(router); //注册路由
app.use(store); //注册pinia

app.mount('#app');
