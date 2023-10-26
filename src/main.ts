import { createApp } from 'vue';
import router from './router/index';
import store from './store';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/dark/css-vars.css';

import './assets/styles/common.scss';
import './assets/styles/element.scss';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router); //注册路由
app.use(store); //注册pinia

app.mount('#app');
