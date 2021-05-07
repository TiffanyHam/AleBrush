/*
 * @Author: your name
 * @Date: 2021-02-05 16:14:25
 * @LastEditTime: 2021-05-07 10:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \brood-pressure-demo - one\src\store\common.js
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
window.isHilinkDark =
  (window.hilink &&
    window.hilink.getDarkMode &&
    window.hilink.getDarkMode()) === 2;
export default new Vuex.Store({
  namespaced: true,//开启命名空间
  state: {
    bleConnected: 1, // 监听设备蓝牙连接结果
    initPosition:0,
    data:'',
    timeLength:"",
    cleanMOde:0,
    vigor:0,
    cloudData:[],
    electric:'',
    isDark: window.isHilinkDark, // 是否是暗黑模式
    isMusic:true
  },
  mutations: {
    UPDATED_BLECONNECTED(state,payload) {
      state.bleConnected = payload;
    },
    UPDATED_POSITION(state,payload) {
      state.initPosition = payload;
    },
    UPDATE_DATA(state,payload){
      state.data = payload;
    },
    UPDATE_CLOUDDATA(state,payload){
      state.cloudData = payload;
    },
    UPDATE_TIME(state,payload){
      state.timeLength = payload;
    },
    UPDATE_Mode(state,payload){
      state.cleanMOde = payload;
    },
    UPDATE_VIGOR(state,payload){
      state.vigor = payload;
    },
    UPDATE_ELEC(state,payload){
      state.electric = payload;
    },
    'CHANGETIP' (state, data) {
      state.noMorereminders = data;    
    },
    UPDATEMUSIC (state, payload) {
      state.isMusic = payload
    }
  },
  actions: {
    call_update_bleConnected(content,payload){
      content.commit('UPDATED_BLECONNECTED',payload)
     },
    call_update_initPosition(content,payload){
    content.commit('UPDATED_POSITION',payload)
    },
    call_update_data(content,payload){
      content.commit('UPDATE_DATA',payload)
    },
    saveMode({commit},data){
      commit('UPDATE_Mode', data);
    },
    saveVigo({commit},data){
      commit('UPDATE_VIGOR', data);
      },
    setCloudData({commit},data){
      commit('UPDATE_CLOUDDATA', data);
    },
    save_time ({commit},data) {
      commit('UPDATE_TIME', data);
   },
   saveMusic ({commit},data) {
    commit('UPDATEMUSIC', data);
   },
   save_elec ({commit},data) {
      commit('UPDATE_ELEC', data);
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
