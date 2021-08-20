/*
* @Author: dxx
* @Email: dxxtalking@163.com
* @Date:   2020-12-24 16:11:11
* @Last Modified by:   dxx
* @Last Modified time: 2020-12-24 16:15:07
*/
import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import VueCookie from 'vue-cookie';
import router from '@/router/index.js';

import 'element-ui/lib/theme-chalk/index.css';
import { Loading } from 'element-ui';

axios.defaults.timeout = 20000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = ''; //配置接口地址

let loadingInstance;
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  loadingInstance  = Loading.service({
     lock: true,
     text: '请求数据中...',
     spinner: 'el-icon-loading',
     background: 'rgba(0, 0, 0, 0.7)'
  });
  //在发送请求之前做某件事
  if (config.method === 'post') {
    let curPost = config.url.split("/")[config.url.split("/").length - 1];
    // 这里对上传文件/图片的 api 不做传参序列化处理
    if (curPost.startsWith("upload")){
      config.headers.post['Content-Type'] =  'multipart/form-data'; //配置请求头
      return config;
    }else{
      config.headers.post['Resquest-Token']=VueCookie.get("token");
      // config.data.token = VueCookie.get("token");
      config.data = qs.stringify(config.data, { indices: false });

      if (config.url.indexOf("/") == -1) {
        config.url = this.GLOBAL.baseURL + "/client/invoke?transcode=" + config.url;
      }
      if (config.url.indexOf("?") == -1) {
        config.url = config.url + "?_=" + new Date().getTime();
      } else {
        config.url = config.url + "&_=" + new Date().getTime();
      }
      var language = localStorage.lang == undefined?'cn':localStorage.lang;
      config.url = config.url + "&lang=" + language;
    }
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  loadingInstance.close();
  if (res.data.code == -99) {
    VueCookie.delete("token");
    router.push("/login");
    return false;
  } else {
    return Promise.resolve(res.data);
  }
}, (error) => {
  loadingInstance.close();
  if (typeof(error.response)=='undefined'||typeof(error.response.status)=='undefined') {

  }else if(error.response.status==401){
    //  返回状态码为401时  表示没有权限登录
    //console.log(error.response.status);
    VueCookie.delete("token");
    router.push("/enterpriselogin");
    return false;
  }
  return Promise.reject("请求数据异常...");
});

//返回一个Promise(发送post请求)
export function post(url, params) {
  if (typeof(params) == "undefined"){
      params = {}
  }
  return  new Promise((resolve, reject) => {
     axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  post,
  get
}
