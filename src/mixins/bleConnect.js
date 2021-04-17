/*
 * @Author: your name
 * @Date: 2021-02-04 14:13:29
 * @LastEditTime: 2021-04-17 10:11:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \brood-pressure-demo\src\mixins\bleConnect.js
 */
import { mapActions } from 'vuex'
export default {
    data() {
        return {
          deviceId: null,
          serviceId: "0000ffb0-0000-1000-8000-00805f9b34fb",
          writeCharacteristicId: "0000ffb1-0000-1000-8000-00805f9b34fb",
          readCharacteristicId: "0000ffb2-0000-1000-8000-00805f9b34fb",
          historyLog: '',
          initGetData58: true,
        }
    },
    mounted() {
      this.init()
    },
     methods: {
         init(){
            this.onBLEConnectionStateChange();
            this.onBluetoothAdapterStateChange();
            this.getBluetoothAdapterState();
            this.openBluetoothAdapter()
         },
      ...mapActions(["call_update_bleConnected"]),
       /**
         * @description: 蓝牙连接第一步 获取设备蓝牙模块状态
         * @param {*}
         * @return {*}
         */
        getBluetoothAdapterState() {
          window.hilink && window.hilink.getBluetoothAdapterState && window.hilink.getBluetoothAdapterState(
              "getBluetoothAdapterStateCallback"
          );
          window.getBluetoothAdapterStateCallback = (res) => {
              let data = JSON.parse(res);
              if (data.available) {
                  this.getCurrentRegisteredDevice();
                  this.searchDevices()
              } else {
                  console.log('555');
              }
          }
      },
        /**
         * @description: 打开蓝牙
         * @param {*}
         * @return {*}
         */
         openBluetoothAdapter() {
          window.hilink && window.hilink.openBluetoothAdapter && window.hilink.openBluetoothAdapter();
      },

      /**
       * @description: 去注册设备 第二步
       * @param {*}
       * @return {*}
       */
      getCurrentRegisteredDevice() {
          // 注册前先监听发现设备
          window.getCurrentRegisteredDeviceCallBack = res => {
              //console.log('注册前先监听发现设备', res);
              let data;
              if (window.ios) {
                  data = this.getIOSDevid(res)
              } else {
                  data = JSON.parse(res)
              }
              this.deviceId = data.deviceId;
              window.devId = data.deviceId;
              window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(this.deviceId)
          }
          window.hilink && window.hilink.getCurrentRegisteredDevice && window.hilink.getCurrentRegisteredDevice('getCurrentRegisteredDeviceCallBack')
      },
     /**
         * @description: 监听连接设备结果
         * @param {*}
         * @return {*}
         */
      onBLEConnectionStateChange() {
        window.hilink && window.hilink.onBLEConnectionStateChange && window.hilink.onBLEConnectionStateChange('onBLEConnectionStateChangeCallBack')
        window.onBLEConnectionStateChangeCallBack = res => {
            res = JSON.parse(res)
            if (res.connected) {
                this.call_update_bleConnected(true)
                // 通知上层
                this.onBLEServicesDiscovered()
                //监听低功耗蓝牙设备的特征值变化
                this.onBLECharacteristicValueChange()

            } else {
                // 连接不成功 重新连接
                this.searchDevices()
                this.call_update_bleConnected(false)
            }
        }
    },
     /**
         * @description: 监听蓝牙是否打开
         * @param {*}
         * @return {*}
         */
      onBluetoothAdapterStateChange() {
        window.hilink && window.hilink.onBluetoothAdapterStateChange && window.hilink.onBluetoothAdapterStateChange('onBluetoothAdapterStateChangeCallBack')
        window.onBluetoothAdapterStateChangeCallBack = res => {
            res = JSON.parse(res);
            console.log(' 4.监听连接设备结果', res);
            window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(this.deviceId)
            if (res.available) {
                this.getCurrentRegisteredDevice()
            } else {
                this.openBluetoothAdapter()
                // 蓝牙未打开
                this.searchDevices()
            }
        }
    },
 /**
         * @description: // 通知上层
         * @param {*}
         * @return {*}
         */
  onBLEServicesDiscovered() {
    let that = this;
    let status;
    window.onBLEServicesDiscoveredCallback = res => {
        if (window.ios) {
            if (res == 0) {
                status = window.hilink && window.hilink.notifyBLECharacteristicValueChange && window.hilink.notifyBLECharacteristicValueChange(
                    that.deviceId,
                    that.serviceId,
                    that.readCharacteristicId,
                    true
                );
                if (status === 0) {
                    //监听低功耗蓝牙设备的特征值变化
                    that.onBLECharacteristicValueChange();
                    //that.writeData('55');
                }
            }
        } else {
            let data = JSON.parse(res);
            if (data.errCode === 0) {
                window.t3 = new Date().getTime()
                status = window.hilink && window.hilink.notifyBLECharacteristicValueChange && window.hilink.notifyBLECharacteristicValueChange(
                    that.deviceId,
                    that.serviceId,
                    that.readCharacteristicId,
                    true
                );
                if (status === 0) {
                    that.onBLECharacteristicValueChange();
                   // that.writeData('55');
                }
            }
        }
    }
    window.hilink && window.hilink.onBLEServicesDiscovered && window.hilink.onBLEServicesDiscovered("onBLEServicesDiscoveredCallback")
   },
    /**
         * @description: //监听低功耗蓝牙设备的特征值变化
         * @param {*}
         * @return {*}
         */
     onBLECharacteristicValueChange() {
      window.onBLECharacteristicValueChangeCallback = res => {
          let result = JSON.parse(res);
         // this.historyLog += result.data;
         // this.acceptType58Data(this.historyLog)
         // this.acceptType55Data(this.historyLog)
      }
      window.hilink && window.hilink.onBLECharacteristicValueChange && window.hilink.onBLECharacteristicValueChange("onBLECharacteristicValueChangeCallback");
  },
   /**
         * @description: 搜索蓝牙设备
         * @param {*}
         * @return {*}
         */
    searchDevices() {
      let _ = this;
      window.onBluetoothDeviceFoundCallback = (res) => {
          let data;
          if (window.ios) {
              data = _.getIOSDevid(res);
              if (this.deviceId == data.deviceId) {  // ios
                  window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(data.deviceId)
                  window.hilink && window.hilink.stopBluetoothDevicesDiscovery && window.hilink.stopBluetoothDevicesDiscovery()
              }
          } else {
              if (this.deviceId == JSON.parse(res)[0].deviceId) {  // 安卓
                  window.hilink && window.hilink.createBLEConnection && window.hilink.createBLEConnection(this.deviceId)
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
     },
  /**
   * @description: 解析ios devID
   * @param {*}
   * @return {*}
   */
   getIOSDevid(res) {
      let data = undefined;
      let dataStr = res;
      dataStr = dataStr.replace(/"{/g, '{');
      dataStr = dataStr.replace(/}"/g, '}');
      dataStr = dataStr.replace(/\\|\n|\r|\t|\f|\t/g, '');
      data = JSON.parse(dataStr);
      return data;
   },
/**
 * @description:  蓝牙设备操控：对蓝牙设备发送数据
 * @param {*}
 * @return {*}
 */
 writeData(data) {
  // if (data === '57' || data === '59') {
  //     window.type58 = true;
  //     window.type55 = false;
  // } else {
  //     window.type58 = false;
  //     window.type55 = true;
  // }
  ////console.log('蓝牙设备操控：对蓝牙设备发送数据');
  window.hilink && window.hilink.writeBLECharacteristicValue && window.hilink.writeBLECharacteristicValue(
      this.deviceId,
      this.serviceId,
      this.writeCharacteristicId,
      data,
      "writeBLECharacteristicValueCallBack"
  );
  window.writeBLECharacteristicValueCallBack = (res) => {
      let resVal = JSON.parse(res);
  };
},


  }
}