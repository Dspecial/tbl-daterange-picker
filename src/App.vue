<template>
  <div id="app">
    <p>时间范围选择：</p>
    <tbl-timerange-picker :btnOption="btnOption" @rangeValueChange="onChange"></tbl-timerange-picker>
  </div>
</template>

<script>
import TblTimerangePicker from './components/index'
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
    TblTimerangePicker
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
