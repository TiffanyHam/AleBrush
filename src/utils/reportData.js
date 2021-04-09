/*
 * @Author: your name
 * @Date: 2021-04-07 14:19:00
 * @LastEditTime: 2021-04-09 10:51:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\utils\reportData.js
 */
// 操作云端历史数据对象
const reportData = {};

// 云端唯一 id
reportData.devId = '';
// 获取华为云端唯一id
reportData.getDevId = () => {
    // 获取设备信息
    window.getDevInfoAllCallback = (res) => {
        res = JSON.parse(res);
        console.log('获取华为云端唯一id',res);
        reportData.devId = res.devId;
    }
    window.hilink && window.hilink.getDevInfoAll && window.hilink.getDevInfoAll("0", "", "getDevInfoAllCallback");
}
// 格式化数据

        // {
        //         status: "online",
        //         services: [
        //             {
        //                 ts: "20201222T112003Z",
        //                 sid: "brushingHistory",
        //                 data: {
        //                     logArr: "20201222T112003Z_80_54_1分20秒"
                            
        //                 },
        //             },
        //             {
        //                 ts: "20201223T112003Z",
        //                 sid: "brushingHistory",
        //                 data: {
        //                     logArr: "20201222T112003Z_80_54_2分20秒",
        //                 },
        //             },
        //         ],
        //     };
reportData.formatDataFromMachine = (x,y,z,d) => {
    
    let arr = {}  //数据条数
    let services = [], item = {}, reportTime = new Date().getTime();
    for (let i = 0; i < arr.length; i++) {
        item.ts = reportData.formatTime(reportTime);
        item.sid = 'brushingHistory';
        item.data = {
           logArr:x +'_' + y +'_' + z + '_' + d
        };
        services.push(item);
        item = {};
        reportTime += (1000)
    }
    let res = {
        status: "online",
        services: [...services]
    };
    return res;
}
// 格式化上报时间
reportData.formatTime = (time = null) => { // time 要求时间毫秒数
    time = time ? time : new Date().getTime();
    let date = new Date(time);
    let formatTime = '';
    let M = date.getMonth() + 1;
    M = M.toString().length === 1 ? `0${M}` : `${M}`;
    let D = date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString();
    let H = date.getHours().toString().length === 1 ? '0' + date.getHours().toString() : date.getHours().toString();
    let m = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
    let S = date.getSeconds().toString().length === 1 ? '0' + date.getSeconds().toString() : date.getSeconds().toString();
    formatTime += `${date.getFullYear()}${M}${D}T${H}${m}${S}Z`;
    return formatTime;
}