/*
 * @Author: your name
 * @Date: 2021-04-07 14:19:00
 * @LastEditTime: 2021-04-12 19:12:16
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
       // console.log('获取华为云端唯一id',res);
        reportData.devId = res.devId;
    }
    window.hilink && window.hilink.getDevInfoAll && window.hilink.getDevInfoAll("0", "", "getDevInfoAllCallback");
}

reportData.formatDataFromMachine = (dayY,timeY,record,score) => {
        
        let arr = [],services = [],item = {},reportTime = new Date().getTime();
       // arr.push(score);  //数据条数
      //  console.log(arr)
        // for (let i = 0; i < arr.length; i++) {
        item.ts = reportData.formatTime(reportTime);
        item.sid = "brushingHistory";
        item.data = {
        logArr: dayY + "_" + timeY + '_' + record + "_" + score,
        };
        services.push(item);
        item = {};
        //   }
        let res = {
        status: "online",
        services: [...services],
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

// 上报数据到华为云端
reportData.report = (onlyId, Data = null, func = null) => {
    let json_body = JSON.stringify(Data);
    window.reportDeviceProfileImpermanencyCallback = (res) => {
        if (window.ios) {
            let data = getIOSDevid(res);
            if (data.errCode == 0) {
                let resData = { errcode: 200 };
                if (func) {
                    func(resData)
                }
            }
        } else {
            res = JSON.parse(res);
            if (func) {
                func(res)
            }
        }

    }
    window.hilink && window.hilink.reportDeviceProfileImpermanency && window.hilink.reportDeviceProfileImpermanency(
        onlyId,
        json_body,
        "reportDeviceProfileImpermanencyCallback"
    );
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
// 获取历史记录
reportData.getHistoryLog = (func = null) => {
    //获取历史记录回调
    let data = null;
    let nowDate = new Date();
    let endTime = reportData.formatTime();
    let startTime = reportData.formatTime(nowDate.setMonth(nowDate.getMonth() - 7));
    window.getDevHistoryCallBack = (res) => {
        res = JSON.parse(res);
        data = reportData.filterData(res.list);
        if (func) {
            func(data)
        }
    };
    window.hilink && window.hilink.getDevHistory && window.hilink.getDevHistory(
        reportData.devId, // 华为分配的id  
        "0",
        "1000",
        startTime,
        endTime,
        "brushingHistory",
        "binCode",
        "getDevHistoryCallBack"
    );
}

// 获取历史记录
// reportData.filterData = (data) => {
//     //获取历史记录回调
//     let formatData = [];
//     try {
//         data.forEach((item, index) => {
            
//             if (item.data.logStr === 'XXXXXX') {
//                 debugger
//                 throw new Error('stop')
//             }
//             formatData.push(item.data.logStr)
//         })
//     } catch (e) {
//         console.log('');
//     }
//     return formatData;
// }


// 特殊数据 用于分割重置后的刷牙历史数据
reportData.resize = (time) => {
    let specialData = {
        status: "online",
        services: [
            {
                ts: reportData.formatTime(time),
                sid: "brushingHistory",
                data: {
                    logStr: "XXXXXX",
                },
            },
        ]
    };
    reportData.report(reportData.devId, specialData)
}


reportData.getDevId()
export default reportData