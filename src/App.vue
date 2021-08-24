<!--
 * @Author: dxx
 * @Email: dingxixi@techbloom.net
 * @Date: 2021-08-20 18:07:55
 * @LastEditors: dxx
 * @LastEditTime: 2021-08-24 15:29:34
-->
<template>
  <div id="app">
    <p>时间范围选择：</p>
    <tbl-daterange-picker :btnOption="btnOption" @rangeValueChange="onChange"></tbl-daterange-picker>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      btnOption: {
        isYesterday:true, // 显示 昨日 按钮
        isToday:true, // 今日
        isPreWeek:true, // 上周
        isThisWeek:true, // 本周
        isPreMonth:true, // 上月
        isThisMonth:true, // 本月
        isLast7days:true, // 过去7天
      }
    }
  },
  components:{
    
  },
  methods:{
    onChange(val){
      console.log(val,'获取到绑定的时间范围值');
    },
  },
}
</script>

<style>
</style>
