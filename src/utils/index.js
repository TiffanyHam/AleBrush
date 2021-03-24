/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-08-26 18:02:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-22 18:05:02
 */
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
 function overallSituation(r) {
  if (r) {
      r.beforeEach((to, from, next) => {
          if (to.path === '/') {
              window.hilink && window.hilink.setTitleVisible && window.hilink.setTitleVisible(true);
              let isDark = window.hilink && window.hilink.getDarkMode && window.hilink.getDarkMode() === 2;
              isDark ? window.hilink && window.hilink.modifyTitleBar && window.hilink.modifyTitleBar(true, '0', '') : window.hilink && window.hilink.modifyTitleBar && window.hilink.modifyTitleBar(false, '0', '');
          } else {
              window.hilink && window.hilink.setTitleVisible && window.hilink.setTitleVisible(false);
          }
          if (to.path === '/guide_adult' && from.path === '/logDetail') {
              next('/');
              return true;
          } else if (to.path === '/guide_adult' && from.path === '/' && g.overWrite) {
              window.hilink.finishDeviceActivity()
              return true;
          } else {
              next();
              return true;
          }
      });
  }
}
const g = {
  overWrite: false,
  serviceId: "0000ffb0-0000-1000-8000-00805f9b34fb",
  writeCharacteristicId: "0000ffb1-0000-1000-8000-00805f9b34fb",
  readCharacteristicId: "0000ffb2-0000-1000-8000-00805f9b34fb",
  overallSituation: overallSituation,

}
export default g