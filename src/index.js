/*
 * @Author: dxx
 * @Email: dingxixi@techbloom.net
 * @Date: 2021-08-24 16:55:55
 * @LastEditors: dxx
 * @LastEditTime: 2021-08-24 16:56:03
 */
import {version} from "../package.json";
import TblDaterangePicker from './components/TblDaterangePicker.vue'

// 定义install方法
const install = function (Vue, options = {}) {
  // 全局注册组件（组件名，组件）
  Vue.component(TblDaterangePicker.name, TblDaterangePicker);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: version,
  install,
  TblDaterangePicker,
}