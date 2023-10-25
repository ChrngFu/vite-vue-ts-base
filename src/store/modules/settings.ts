// 全局的设置
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  // id: 'settings', // id必填，且需要唯一
  state: () => {
    return {
      menuCollapse: false, // 是否水平折叠收起菜单
      // 布局方式 classic 经典布局  horizontal 单行布局
      layoutMode: 'classic',
    };
  },
  actions: {
    changeMenuCollapse(collapse: boolean) {
      this.menuCollapse = collapse;
    },
    changeLayoutMode(mode: string) {
      this.layoutMode = mode;
    },
  },
  persist: true,
});
