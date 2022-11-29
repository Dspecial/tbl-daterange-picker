<template>
  <div id="app" style="margin-left:500px">
    <p>时间范围选择：</p>
    <tbl-daterange-picker
      v-model="defaultValue"
      type="datetimerange"
      align="left"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      :btnOption="btnOption"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="onChange"
    ></tbl-daterange-picker>
    <el-button type="primary" @click="clear">清空</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultValue: [this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],
      btnOption: {
        isYesterday: true, // 显示 昨日 按钮
        isToday: true, // 今日
        isPreWeek: true, // 上周
        isThisWeek: true, // 本周
        isPreMonth: true, // 上月
        isThisMonth: true, // 本月
        isLast7days: true, // 过去7天
      },
      pickerOptions: {
        shortcuts: [],
        disabledDate(date) {
          return date.getTime() > Date.now();
        },
      },
    };
  },
  components: {},
  methods: {
    onChange(val) {
      console.log(val, '获取到绑定的时间范围值');
      this.defaultValue = val;
    },
    // 清空
    clear() {
      this.defaultValue = [];
    },
  },
};
</script>

<style></style>
