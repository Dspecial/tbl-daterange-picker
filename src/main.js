// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });// 声明使用ElementUI

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'; // element-ui样式表

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
