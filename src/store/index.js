/*
 * @Author: your name
 * @Date: 2021-02-05 16:14:25
 * @LastEditTime: 2021-04-01 11:47:39
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
    initPosition:'2'
  },
  mutations: {
    UPDATED_BLECONNECTED(state,payload) {
      state.bleConnected = payload;
    },
    UPDATED_POSITION(state,payload) {
      state.initPosition = payload;
    },
    'CHANGETIP' (state, data) {
      state.noMorereminders = data;    
    }
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
    },
    changeTip ({commit},data) {
      commit('CHANGETIP', data);
   },
  },
  getters: {
     
  },
});
