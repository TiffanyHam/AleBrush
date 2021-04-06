/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-11-11 11:25:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-06 11:33:38
 */
const en = {
    index: {
        noConnect: 'not connected',
        connect: 'are connected',
        connected: 'The connected',
        again:'Even choose again',
        score: 'points',
        day: 'day',
        lastScore: 'score',
        restDay: 'Brush head rest',
        brushmode: 'model',
        brushLen:'time',
        inPosition:'starting',
        MoreSet:'More',
        brushLog: 'record',
        more: 'More',
        Log: {
            year: '年',
            month: '月',
            date: '日',
            minute: '分',
            second: '秒',
            score: '分',
            week: {
                Mon: '星期一',
                Tus: '星期二',
                Wed: '星期三',
                Thu: '星期四',
                Fri: '星期五',
                Sat: '星期六',
                Sun: '星期天',
            },
            day: {
                Mon: '周一',
                Tus: '周二',
                Wed: '周三',
                Thu: '周四',
                Fri: '周五',
                Sat: '周六',
                Sun: '周日',
            },
            brushLen: '刷牙时长',
            tip: '仅保留最近3个月的刷牙记录',
        },
    },
        //刷牙模式
        BrushTeethModel: {
            level1: 'clean',
            level2: 'soft',
            level3: 'Message',
            level4: 'strong'
        },
        //刷牙时长
        BrushTeethLen:{
            length1:'2min',
            length2:'2.5min',
            length3:'3min',
        },
        //起始位置
        BrushTeethPosition:{
            position1:'左下区',
            position2:'右下区',
            position3:'右上区',
            position4:'左上区',
            header:'starting position',
            top:'maxillary',
            bottom:'lower jaw',
            left:'left',
            right:'right',
            select:'Please select a starting position'
        },
        //更多设置
        setting: {
            header: 'More Settings',
            otherOptions: {
                methodsU: 'Brush your teeth steps',
                methodsI: 'Methods of use',
                title2: 'common problem',
                see:'view',
            }
        },
    //刷牙步骤
    brushMethods: {
        headerTitle: 'steps',
        subtip: 'Insert the toothbrush head in the right direction input shaft, brush a head sh need to keep some gap between main body, so as not to aect the vibration eect.',
        subtip2: 'To prevent toothbrush splash, recommend a small amount of tooth brush in the brush head.',
        subtip3: 'It soaks into the mouth, and then start the toothbrush.',
        subtipMore:'* need to start the toothbrush, and then in your mouth.',
        subtip4: 'the bristles should be moved at a 45-degree Angle to the gum line.',
        subtip5: "Light hold a toothbrush body, moves in the weeks to move slowly, don't you push hard on the or scrub.",
        subtip6: 'after brushing teeth, gargle with water, please.',
        headerTitle2: 'use method',
        tip7: '1、to understand our oral cavity',
        subtip7: '汇优尚品依据科学的巴氏刷牙发，将口腔分为6区16个牙面，实时语音引导，帮您清洁每个牙面，守护牙齿健康。',
        tip8: '2、intelligent toothbrush use process',
        subtip8: '① toothbrush after the connection is successful, start the toothbrush can real-time guide into the interface.',
        subtip9: '② 将牙刷放在起始牙区开始清洁牙区的每个牙面。磨牙区分3个牙面，切牙区分2个牙面。每个牙面都要均匀清洁，才能清洁牙齿获得更高得分哦。',
        subtip10:'③ tooth surface cleaning, please in the current tooth brushing your teeth.',
        subtip11:'④ According to clean tooth area direction and prompt switch a tooth area, suspended toothbrush can end after brushing your teeth, settle the score brushing your teeth.',
        subtip12:'PS: each time you brush your teeth to keep more than 2 minutes time, less than 30 seconds of brushing the results will not be calculated.'

    },
    //常见问题
    CommonProbl: {
        title2: 'common problems',
        tip: "1、bluetooth has open, can't search the bluetooth",
        subtip: '同一账号在搜索牙刷时，已被此账号绑定的牙刷将不能再次在搜索列表中显示。',
        tip2: '2、lack of data',
        subtip2: 'Time less than 30 seconds to brush your teeth brushing your teeth brushing their teeth as invalid data, unable to save and synchronization',
        tip3: '3、historical data storage and reserved',
        subtip3: '为保护用户隐私，已被绑定的牙刷在被另一账号绑定时，会清除机身离线刷牙数据;同一账号在删除已绑定的牙刷时，将会清除所有云端历史数据刷牙数',
        tip4: "4、why didn't the APP data",
        subtip4: '1、the APP does not connect bluetooth: please make sure that the bluetooth when open',
        subtipMore:'2、please make sure that mobile phone bluetooth to connect to other bluetooth device',
        tip5: '5、real-time guidance note',
        subtip5: '实时引导时不建议将智慧生活APP置于后台运行，此行为将会导致刷牙时间与实际不符，实时引导期如需离开可将牙刷暂停后结束刷牙。',
        tip6: '6、special remind',
        subtip6: 'Please do not in modied mobile phone system date/time connect the toothbrush after use, this approach can lead to chaos, recording time to brush your teeth or oine data cannot be synchronized. In case of this problem by removing equipment after calibration system time, please add',

    },
    // 刷牙剩余使用时间 重置
    RemainTime: {
        header: 'Brush head rest',
        day: 'day',
        doctorWord: '牙医建议: 每2-3个月更换一次刷头',
        proposal:'每次刷牙时间超过30秒即被记录为一次有效刷牙次数，每只刷头可用120次（每天两次可用60天），超过使用天数及时更换刷头',
        rest: '刷头剩余',

        resetDay: 'Reset the time',
        btnTip: '重置后, 刷头使用剩余天数将重新从60天开始计算, 是否重置？',
        cancle: 'cancel',
        sure: 'determine',
    },
    // 倒计时  超时弹窗  
    Hint: {
        tipTitle: '连接超时',
        tipText: '请尝试一下操作：',
        tipText1: '1. 请确认牙刷电量充足，并处于关机状态；',
        tipText2: '2. 将牙刷靠近要连接的手机（10米以内）；',
        tipText3: '3. 关闭手机蓝牙，再重新开启（尤其是安卓设备）。',
        sure: '继续使用',
        conn:'立即连接',

        tipTitle1: '刷头更换',
        tipText4: '您的智能牙刷刷头已使用超过60天，请立即更换刷头。',
        change:'已更换',
        close:'关闭',

        tipTitle2: 'Suspend the countdown',
        tipText5: 'restart the toothbrush may continue to brush your teeth',
        tipText6: "Oh haven't reached you to set the time",
        tipText7: 'time is less than 30 s, the data will not be saved',
        tipText8: 'After the end of the countdown,the exit pages',
        quit:'quit the page',
        
    },
    //实时引导
    brushing: {
        header: 'Real-time guide',
        tipTextI30: 'More than 30 s is recorded as a valid time',
        charge: 'Please pause the toothbrush after exiting the page',
        tipText: 'Please stop the toothbrush after exit pagesManual return or background will cause data loss. Brushing your teeth',
        top:'up',
        bottom:'below',
        left:'left',
        right:'right',
    },
    //充电提示
    Reconnection: {
        index: '电量较低，请及时充电',
        index1: 'brush head using days had less than {days} days, please change in time',
    },
    history: {
        titleName: 'history record',
        tabs: ["day","week","month"],
        delete: "delete",
        day: "day",
        week: "week",
        month: "month",
        exerciseTimes: "Workouts",
        exerciseUnit: "X",
        statistics: "statistics",
        historyData: "history data",
        deleteRecord: "Are you sure you want to delete this record?",
        noRecord: "No records",
        emptyRecord: "Or data has been emptied",
        startTraining: "Start a training session!",
        average: "average",
        point: "point"
    },
    //历史记录
    Log: {
        header: 'record',
        year: '年',
        month: '月',
        date: '日',
        minute: '分',
        minutes: '分',
        score: '分',
        second: '秒',
        week: {
            Mon: '星期一',
            Tus: '星期二',
            Wed: '星期三',
            Thu: '星期四',
            Fri: '星期五',
            Sat: '星期六',
            Sun: '星期天',
        },
        day: {
            Mon: '周一',
            Tus: '周二',
            Wed: '周三',
            Thu: '周四',
            Fri: '周五',
            Sat: '周六',
            Sun: '周日',
        },
        brushLen: '刷牙时长',
        tip: '*hold only the last three months of brushing your teeth'
    },
    //评分
    LogDetail: {
        tip1: '小朋友，请认真刷牙哦',
        tip2: '太遗憾了，下次继续加油',
        tip3: '不错，请继续保持！',
        header: '刷牙详情',
        minute: '分',
        brushLen: '刷牙时长：',
        brushTime: '刷牙时间：',
        range: 'score reference range',
        level: {
            low: {
                title: 'To change it',
                price: '0-59'
            },
            mid: {
                title: 'normal',
                price: '60-79'
            },
            hig: {
                title: 'Good',
                price: '80-100'
            },
        }
    }
};
export default en;
