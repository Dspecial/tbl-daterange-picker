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
  @change="onChange">
</tbl-daterange-picker>

export default {
  data(){
    return {
      defaultValue:['2021-09-14','2021-09-19'], // 默认值
      type:"datetimerange", // 默认是datetimerange, 可填：daterange|monthrange|datetimerange
      align:"left", // 默认是left, 可填： left|cente|right
      format:"yyyy-MM-dd", // 显示在输入框中的格式  默认：yyyy-MM-dd HH:mm:ss|yyyy-MM-dd   ...
      ValueFormat:"yyyy-MM-dd", // 可选，绑定值的格式 默认：yyyy-MM-dd HH:mm:ss|yyyy-MM-dd ...
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
    }
  },
  methods:{
    onChange(val){
      console.log(val,'获取到绑定的时间范围值');
      this.defaultValue = val;
    },
  },
}
	
```

#### 问题解决

btnOption不配置的话默认所有按钮都显示。


