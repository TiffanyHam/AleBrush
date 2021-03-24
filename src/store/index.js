/*
 * @Author: your name
 * @Date: 2021-02-05 16:14:25
 * @LastEditTime: 2021-03-23 15:03:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \brood-pressure-demo - one\src\store\common.js
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,//开启命名空间
  state: {
    bleConnected: false, // 监听设备蓝牙连接结果
  },
  mutations: {
    UPDATED_BLECONNECTED(state,payload) {
      state.bleConnected = payload;
  },
  },
  actions: {
    call_update_bleConnected(content,payload){
      content.commit('UPDATED_BLECONNECTED',payload)
     },
    // resetVuex({ commit }) {
    //   commit("UPDATED_PRESSUREDATA", null);
    // }
  },
  getters: {
     
  },
});
