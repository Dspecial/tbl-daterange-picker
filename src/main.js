// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import 'element-ui/lib/theme-chalk/index.css'; //element-ui样式表

import ElementUI from 'element-ui';
import moment from 'moment';
import TblDaterangePicker from './index.js';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });// 声明使用ElementUI
Vue.use(TblDaterangePicker);

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
