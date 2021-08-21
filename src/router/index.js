import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
		  component: resolve => require(['@/components/index'], resolve),
		  name: 'index',
		  meta: {
		    title: '时间范围选择'
		  },
  	},
  ]
})