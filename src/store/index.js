/*
 * @Author: your name
 * @Date: 2021-02-05 16:14:25
 * @LastEditTime: 2021-03-25 17:56:27
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
    initPosition:null
  },
  mutations: {
    UPDATED_BLECONNECTED(state,payload) {
      state.bleConnected = payload;
    },
    UPDATED_POSITION(state,payload) {
      state.initPosition = payload;
    },
  },
  actions: {
    call_update_bleConnected(content,payload){
      content.commit('UPDATED_BLECONNECTED',payload)
     },
    call_update_initPosition(content,payload){
    content.commit('UPDATED_POSITION',payload)
    },
    resetVuex({ commit }) {
      commit("UPDATED_POSITION", null);
    }
  },
  getters: {
     
  },
});
