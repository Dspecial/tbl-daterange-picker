<template>
  <div id="app" style="margin-left:500px">
    <p>时间范围选择：</p>
    <tbl-daterange-picker v-model="defaultValue"
    type="monthrange"
    align="left"
    format="yyyy-MM-dd HH:mm:ss" 
    value-format="yyyy-MM-dd HH:mm:ss"
    :btnOption="btnOption"  
    @change="onChange">
    </tbl-daterange-picker>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      defaultValue:[this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],
      btnOption: {
        isYesterday:true, // 显示 昨日 按钮
        isToday:true, // 今日
        isPreWeek:true, // 上周
        isThisWeek:true, // 本周
        isPreMonth:true, // 上月
        isThisMonth:true, // 本月
        isLast7days:true, // 过去7天
      },
    }
  },
  components:{
    
  },
  methods:{
    onChange(val){
      console.log(val,'获取到绑定的时间范围值');
      this.defaultValue = val;
    },
  },
}
</script>

<style>
</style>
