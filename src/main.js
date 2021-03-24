/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-24 16:51:04
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import '@/style/reset.css';
import '@/style/icon.scss';
import '@/style/color.scss';
// 组件自动注册
import component from '@/components/index';
Vue.use(component);

import eruda from "eruda/eruda.js"; // 测试工具
import globalData from "@/utils/index"; //引入全局组件
// 引入国际化
import i18n from "./i18n/index";
Vue.prototype.GLOBAL = globalData; //修改原型

// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 蓝牙未连接弹窗
import dialog from "./components/dialog/index"
 Vue.prototype.$dialog = dialog
// 路由守卫
import g from './utils/index'
g.overallSituation(router)

Vue.config.productionTip = false;
eruda.init(); // eruda初始化
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
