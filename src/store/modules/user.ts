import { defineStore } from 'pinia';

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore('user', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      username: 'admin',
      password: 23,
      token: '',
    };
  },
  actions: {
    //更新基础数据类型
    updateToken(token: string) {
      this.token = token;
    },
  },

  // 开始数据持久化
  persist: true,
  // persist: {
  // key: 'user', // 修改存储的键名，默认为当前 Store 的 id
  // storage: window.sessionStorage, // 存储位置修改为 sessionStorage
  // paths: ['userInfo.name'], //存储userInfo的name
  // },
});
