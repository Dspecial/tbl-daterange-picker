<!--
 * @Author: dxx
 * @Email: dingxixi@techbloom.net
 * @Date: 2021-08-24 16:41:09
 * @LastEditors: dxx
 * @LastEditTime: 2021-11-06 13:58:42
-->
# tbl-daterange-picker
基于`element-ui`，改造DateTimePicker组件,范围选择
添加了昨日、今日、上周、本周、上月、本月、过去7天、过去30天、过去90天等快捷按钮
希望大家喜欢！

[项目地址](https://github.com/Dspecial/tbl-daterange-picker.git)

#### 安装

```
npm i element-ui -S; // 先安装element-ui
npm i tbl-daterange-picker;
```

#### 全局注册

`main.js`中注册

```
import TblDaterangePicker from 'tbl-daterange-picker';

Vue.use(TblDaterangePicker);
```

#### 使用

```
<tbl-daterange-picker v-model="defaultValue" 
  :type="type"
  :align="align"
  :format="format" 
  :value-format="ValueFormat" 
  :btnOption="btnOption"
  :picker-options="pickerOptions"
  :clearable="clearable"
  @change="onChange">
</tbl-daterange-picker>

<el-button type="primary" @click="clear">清空</el-button>

export default {
  data(){
    return {
      defaultValue:['2021-09-14','2021-09-19'], // 默认值
      type:"datetimerange", // 日期类型，默认：datetimerange，可填：daterange|monthrange|datetimerange
      align:"left", // 对齐方式，默认：left, 可填：left|cente|right
      format:"yyyy-MM-dd", // 显示在输入框中的格式，默认：yyyy-MM-dd HH:mm:ss，可填：yyyy-MM-dd HH:mm:ss|yyyy-MM-dd   ...
      ValueFormat:"yyyy-MM-dd", // 绑定值的格式，默认：yyyy-MM-dd HH:mm:ss，可填：yyyy-MM-dd HH:mm:ss|yyyy-MM-dd ...
      clearable:true, // 是否显示清除按钮，默认：true，可填 true|false,
      btnOption: {
        isYesterday:true, // 显示 昨日 按钮
        isToday:true, // 今日
        isPreWeek:true, // 上周
        isThisWeek:true, // 本周
        isPreMonth:true, // 上月
        isThisMonth:true, // 本月
        isLast7days:true, // 过去7天
        isLast30days:true, // 过去30天
        isLast90days:true, // 过去90天
      },
      pickerOptions:{
        shortcuts: [], // 如需快捷按钮，必须配置此参数
        disabledDate(date) {
          return date.getTime() > Date.now();
        }
      },
    }
  },
  methods:{
    onChange(val){
      console.log(val,'获取到绑定的时间范围值');
      this.defaultValue = val;
    },

    // 清空所选日期
    clear(){
      this.defaultValue = [];
    },
  },
}
	
```

#### 问题解决

1.btnOption不配置的话默认所有按钮都显示。 

2.如使用picker-options来限制日期选择范围，或者设置周起始日firstDayOfWeek，或者设置日期的类名cellClassName时，当需要显示快捷按钮，则必须加上shortcuts: []，否则无快捷按钮；  

不配置picker-options时，默认是有快捷按钮的。 
 
3.picker-options 所有属性和参数 详见 [参考地址](https://element.eleme.cn/#/zh-CN/component/datetime-picker#picker-options)

