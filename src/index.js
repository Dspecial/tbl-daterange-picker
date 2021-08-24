/*
 * @Author: dxx
 * @Email: dingxixi@techbloom.net
 * @Date: 2021-08-21 14:14:54
 * @LastEditors: dxx
 * @LastEditTime: 2021-08-23 18:31:24
 */
import TblComponent from './components/TblDaterangePicker.vue'
//定义一个对象 需要install方法
const TblDaterangePicker = { // 下面的TblComponent.name 值要写成组件名称 TblDaterangePicker ，要区分大小写的
  install(Vue,options) {
    if(typeof window !== 'undefined' && window.Vue){
      Vue = window.Vue
    }
    //全局注册组件（组件名，组件）
    Vue.component(TblComponent.name, TblComponent);

    if(typeof window !== 'undefined' && window.Vue){
      window.Vue.use(TblComponent)
    }
  }
}

export default TblDaterangePicker;
