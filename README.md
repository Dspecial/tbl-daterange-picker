# tbl-daterange-picker
基于`element-ui`，改造DateTimePicker组件
添加了昨日、今日、上周、本周、上月、本月、过去7天、过去30天、过去90天等快捷按钮
希望大家喜欢！

[项目地址](https://github.com/Dspecial/tbl-daterange-picker.git)

#### 安装

```
npm i element-ui -S; // 先安装element-ui
npm i tbl-daterange-picker -S;
```

#### 全局注册

`main.js`中注册

```
import TblDaterangePicker from 'tbl-daterange-picker';

Vue.use(TblDaterangePicker);
```

#### 使用

```
<tbl-daterange-picker :btnOption="btnOption"></tbl-daterange-picker>

export default {
	data() {
		return {
			btnOption:{
				isYesterday:true, // 显示 昨日 按钮
				isToday:true, // 显示 今日 按钮
				isPreWeek:true, // 显示 上周 按钮
				isThisWeek:true, // 显示 本周 按钮
				isPreMonth:true, // 显示 上月 按钮
				isThisMonth:true, // 显示 本月 按钮
				isLast7days:true, // 显示 过去7天 按钮
				isLast30days:true, // 显示 过去30天 按钮
				isLast90days:true, // 显示 过去90天 按钮
			},
		}
	}
}
	
```


#### 问题解决

btnOption不配置的话默认所有按钮都显示。


