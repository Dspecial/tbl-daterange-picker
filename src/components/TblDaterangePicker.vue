<template>
  <!-- 继承el-date-picker的所有属性和方法 -->
  <el-date-picker
    v-model="currentValue"
    :picker-options="pickerOptions"
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
  >
    <template #[slotName]="slotProps" v-for="(slot, slotName) in $slots">
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </el-date-picker>
</template>

<script>
export default {
  name: 'TblDaterangePicker',
  components: {},
  props: {
    value: {
      type: [Array, String],
      default: () => {
        return [];
      },
    },
    type: {
      type: String,
      default: 'datetimerange', // daterange|mouthrange|datetimerange
    },
    rangeSeparator: {
      type: String,
      default: '至',
    },
    startPlaceholder: {
      type: String,
      default: '开始日期',
    },
    endPlaceholder: {
      type: String,
      default: '结束日期',
    },
    btnOption: {
      type: [Object, Boolean],
      default: function() {
        return {
          isYesterday: true,
          isToday: true,
          isPreWeek: true,
          isThisWeek: true,
          isPreMonth: true,
          isThisMonth: true,
          isLast7days: true,
          isLast30days: true,
          isLast90days: true,
        };
      },
    },
    PickerOptions: {
      type: [Array, String, Object],
      default: () => {
        return {
          shortcuts: [],
          disabledDate(date) {
            return date.getTime() > Date.now();
          },
        };
      },
    },
  },

  data() {
    return {
      currentValue: this.value,
      pickerOptions: this.PickerOptions,
      yesterdayBtn: {
        text: '昨天',
        onClick(picker) {
          const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
          const end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
          end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
          picker.$emit('pick', [start, end]);
        },
      },
      todayBtn: {
        text: '今日',
        onClick(picker) {
          const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
          const end = new Date();
          picker.$emit('pick', [start, end]);
        },
      },
      preWeekBtn: {
        text: '上周',
        onClick(picker) {
          const o_sDate = new Date(new Date(new Date().toLocaleDateString()).getTime());
          o_sDate.setTime(o_sDate.getTime() - 3600 * 1000 * 24 * 7);
          const o_eDate = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
          o_eDate.setTime(o_eDate.getTime() - 3600 * 1000 * 24 * 7);

          var day = o_sDate.getDay();

          const end = new Date();
          const start = new Date();
          if (day == 0) {
            start.setDate(o_sDate.getDate());
            end.setDate(o_eDate.getDate() + 6);
          } else {
            start.setTime(o_sDate.getTime() - 3600 * 1000 * 24 * day);
            end.setTime(o_eDate.getTime() + 3600 * 1000 * 24 * (6 - day));
          }
          picker.$emit('pick', [start, end]);
        },
      },
      thisWeekBtn: {
        text: '本周',
        onClick(picker) {
          const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
          const end = new Date();
          var thisDay = start.getDay();
          var thisDate = start.getDate();
          if (thisDay != 0) {
            start.setDate(thisDate - thisDay + 1);
          }
          picker.$emit('pick', [start, end]);
        },
      },
      preMonthBtn: {
        text: '上月',
        onClick(picker) {
          const oDate = new Date();
          var year = oDate.getFullYear();
          var month = oDate.getMonth();
          var start, end;
          if (month == 0) {
            year--;
            start = new Date(new Date(new Date(year, 11, 1).toLocaleDateString()).getTime());
            end = new Date(new Date(new Date(year, 11, 31).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
          } else {
            start = new Date(new Date(new Date(year, month - 1, 1).toLocaleDateString()).getTime());
            end = new Date(new Date(new Date(year, month, 0).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
          }
          picker.$emit('pick', [start, end]);
        },
      },
      thisMonthBtn: {
        text: '本月',
        onClick(picker) {
          const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
          const end = new Date();
          start.setDate(1);
          picker.$emit('pick', [start, end]);
        },
      },
      last7daysBtn: {
        text: '过去7天',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        },
      },
      last30daysBtn: {
        text: '过去30天',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        },
      },
      last90daysBtn: {
        text: '过去90天',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        },
      },
    };
  },
  created() {},
  mounted() {
    if (this.btnOption.isYesterday) {
      this.pickerOptions.shortcuts.push(this.yesterdayBtn);
    }
    if (this.btnOption.isToday) {
      this.pickerOptions.shortcuts.push(this.todayBtn);
    }
    if (this.btnOption.isPreWeek) {
      this.pickerOptions.shortcuts.push(this.preWeekBtn);
    }
    if (this.btnOption.isThisWeek) {
      this.pickerOptions.shortcuts.push(this.thisWeekBtn);
    }
    if (this.btnOption.isPreMonth) {
      this.pickerOptions.shortcuts.push(this.preMonthBtn);
    }
    if (this.btnOption.isThisMonth) {
      this.pickerOptions.shortcuts.push(this.thisMonthBtn);
    }
    if (this.btnOption.isLast7days) {
      this.pickerOptions.shortcuts.push(this.last7daysBtn);
    }
    if (this.btnOption.isLast30days) {
      this.pickerOptions.shortcuts.push(this.last30daysBtn);
    }
    if (this.btnOption.isLast90days) {
      this.pickerOptions.shortcuts.push(this.last90daysBtn);
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        this.currentValue = newVal;
      },
      deep: true,
    },
  },

  methods: {},
};
</script>
<style scoped></style>
