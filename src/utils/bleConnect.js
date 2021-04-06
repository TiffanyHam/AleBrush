/*
 * @Author: your name
 * @Date: 2021-02-04 14:13:29
 * @LastEditTime: 2021-04-06 17:31:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \brood-pressure-demo\src\mixins\bleConnect.js
 */
import { mapActions } from 'vuex'
import Vue from 'vue'

const deviceId = null,
// const serviceId =  "0000ffb0-0000-1000-8000-00805f9b34fb",
// const writeCharacteristicId =  "0000ffb1-0000-1000-8000-00805f9b34fb",
// const readCharacteristicId =  "0000ffb2-0000-1000-8000-00805f9b34fb",

  
    function init(){
            onBLEConnectionStateChange();
            onBluetoothAdapterStateChange();
            getBluetoothAdapterState();
            openBluetoothAdapter()
         }
    //   ...mapActions({
    //     call_update_bleConnected: 'call_update_bleConnected',
    //   }),
       /**
         * @description: 蓝牙连接第一步 获取设备蓝牙模块状态
         * @param {*}
         * @return {*}
         */
        function getBluetoothAdapterState() {
          window.hilink && window.hilink.getBluetoothAdapterState && window.hilink.getBluetoothAdapterState(
              "getBluetoothAdapterStateCallback"
          );
          window.getBluetoothAdapterStateCallback = (res) => {
              let data = JSON.parse(res);
              if (data.available) {
                  getCurrentRegisteredDevice();
                  searchDevices()
              } else {
                  console.log('555');
              }
          }
      }
        /**
         * @description: 打开蓝牙
         * @param {*}
         * @return {*}
         */
         function openBluetoothAdapter() {
          window.hilink && window.hilink.openBluetoothAdapter && window.hilink.openBluetoothAdapter();
      }

      /**
       * @description: 去注册设备 第二步
       * @param {*}
       * @return {*}
       */
       function getCurrentRegisteredDevice() {
          // 注册前先监听发现设备
          window.getCurrentRegisteredDeviceCallBack = res => {
              //console.log('注册前先监听发现设备', res);
              let data;
              if (window.ios) {
                  data = getIOSDevid(res)
              } else {
                  data = JSON.parse(res)
              }
              deviceId = data.deviceId;
              window.devId = data.deviceId;
              window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(deviceId)
          }
          window.hilink && window.hilink.getCurrentRegisteredDevice && window.hilink.getCurrentRegisteredDevice('getCurrentRegisteredDeviceCallBack')
      }
     /**
         * @description: 监听连接设备结果
         * @param {*}
         * @return {*}
         */
      function onBLEConnectionStateChange() {
        window.hilink && window.hilink.onBLEConnectionStateChange && window.hilink.onBLEConnectionStateChange('onBLEConnectionStateChangeCallBack')
        window.onBLEConnectionStateChangeCallBack = res => {
            res = JSON.parse(res)
            if (res.connected) {
                call_update_bleConnected(true)
                // 通知上层
                onBLEServicesDiscovered()
                //监听低功耗蓝牙设备的特征值变化
                onBLECharacteristicValueChange()

            } else {
                // 连接不成功 重新连接
                searchDevices()
                call_update_bleConnected(false)
            }
        }
    }
     /**
         * @description: 监听蓝牙是否打开
         * @param {*}
         * @return {*}
         */
      function onBluetoothAdapterStateChange() {
        window.hilink && window.hilink.onBluetoothAdapterStateChange && window.hilink.onBluetoothAdapterStateChange('onBluetoothAdapterStateChangeCallBack')
        window.onBluetoothAdapterStateChangeCallBack = res => {
            res = JSON.parse(res);
            console.log(' 4.监听连接设备结果', res);
            window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(g.deviceId)
            if (res.available) {
                getCurrentRegisteredDevice()
            } else {
                openBluetoothAdapter()
                // 蓝牙未打开
                searchDevices()
            }
        }
    }
 /**
         * @description: // 通知上层
         * @param {*}
         * @return {*}
         */
  function onBLEServicesDiscovered() {
    let that = this;
    let status;
    window.onBLEServicesDiscoveredCallback = res => {
        if (window.ios) {
            if (res == 0) {
                status = window.hilink && window.hilink.notifyBLECharacteristicValueChange && window.hilink.notifyBLECharacteristicValueChange(
                    g.deviceId,
                    g.serviceId,
                    g.readCharacteristicId,
                    true
                );
                if (status === 0) {
                    //监听低功耗蓝牙设备的特征值变化
                    onBLECharacteristicValueChange();
                    //writeData('55');
                }
            }
        } else {
            let data = JSON.parse(res);
            if (data.errCode === 0) {
                window.t3 = new Date().getTime()
                status = window.hilink && window.hilink.notifyBLECharacteristicValueChange && window.hilink.notifyBLECharacteristicValueChange(
                    deviceId,
                    serviceId,
                    readCharacteristicId,
                    true
                );
                if (status === 0) {
                    onBLECharacteristicValueChange();
                   // writeData('55');
                }
            }
        }
    }
    window.hilink && window.hilink.onBLEServicesDiscovered && window.hilink.onBLEServicesDiscovered("onBLEServicesDiscoveredCallback")
   }
    /**
         * @description: //监听低功耗蓝牙设备的特征值变化
         * @param {*}
         * @return {*}
         */
     function onBLECharacteristicValueChange() {
      window.onBLECharacteristicValueChangeCallback = res => {
          let result = JSON.parse(res);
         // historyLog += result.data;
         // acceptType58Data(historyLog)
         // acceptType55Data(historyLog)
      }
      window.hilink && window.hilink.onBLECharacteristicValueChange && window.hilink.onBLECharacteristicValueChange("onBLECharacteristicValueChangeCallback");
  }
   /**
         * @description: 搜索蓝牙设备
         * @param {*}
         * @return {*}
         */
    function searchDevices() {
      let _ = this;
      window.onBluetoothDeviceFoundCallback = (res) => {
          let data;
          if (window.ios) {
              data = _.getIOSDevid(res);
              if (deviceId == data.deviceId) {  // ios
                  window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(data.deviceId)
                  window.hilink && window.hilink.stopBluetoothDevicesDiscovery && window.hilink.stopBluetoothDevicesDiscovery()
              }
          } else {
              if (deviceId == JSON.parse(res)[0].deviceId) {  // 安卓
                  window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(deviceId)
                  window.hilink && window.hilink.stopBluetoothDevicesDiscovery && window.hilink.stopBluetoothDevicesDiscovery()
              }
          }
      }
      window.hilink && window.hilink.onBluetoothDeviceFound && window.hilink.onBluetoothDeviceFound("onBluetoothDeviceFoundCallback")
      if (window.ios) {
          window.hilink && window.hilink.startBluetoothDevicesDiscovery && window.hilink.startBluetoothDevicesDiscovery([], false, 1)
      } else {
          window.hilink && window.hilink.startBluetoothDevicesDiscovery && window.hilink.startBluetoothDevicesDiscovery([], true, 1)
      }
     }
  /**
   * @description: 解析ios devID
   * @param {*}
   * @return {*}
   */
   function getIOSDevid(res) {
      let data = undefined;
      let dataStr = res;
      dataStr = dataStr.replace(/"{/g, '{');
      dataStr = dataStr.replace(/}"/g, '}');
      dataStr = dataStr.replace(/\\|\n|\r|\t|\f|\t/g, '');
      data = JSON.parse(dataStr);
      return data;
   }
/**
 * @description:  蓝牙设备操控：对蓝牙设备发送数据
 * @param {*}
 * @return {*}
 */
 function writeData(data) {
  // if (data === '57' || data === '59') {
  //     window.type58 = true;
  //     window.type55 = false;
  // } else {
  //     window.type58 = false;
  //     window.type55 = true;
  // }
  ////console.log('蓝牙设备操控：对蓝牙设备发送数据');
  window.hilink && window.hilink.writeBLECharacteristicValue && window.hilink.writeBLECharacteristicValue(
      deviceId,
      serviceId,
      writeCharacteristicId,
      data,
      "writeBLECharacteristicValueCallBack"
  );
  window.writeBLECharacteristicValueCallBack = (res) => {
      let resVal = JSON.parse(res);
  };


  }
//}
export default {
    init
  }