/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-11-11 11:25:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-01 14:16:27
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
            position1:'左上区',
            position2:'右上区',
            position3:'左下区',
            position4:'右下区',
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
        headerTitle: '刷牙步骤',
        subtip: '将牙刷头按正确方向插入输入轴，刷头鱼主体之间需保留一些缝隙，以免影响震动效果。',
        subtip2: '为防止牙刷飞溅，可取少量牙刷在刷头上。',
        subtip3: '先将其浸湿放入口中，再启动牙刷。*需先启动牙刷，再放入口中。',
        subtipMore:'*需先启动牙刷，再放入口中。',
        subtip4: '刷毛与牙龈线呈45度缓慢移动牙刷。',
        subtip5: '轻握牙刷主体，以圆周运动缓慢移动，切勿用力按压或擦洗。',
        subtip6: '刷完牙请用清水漱口。',
        headerTitle2: '使用方法',
        tip7: '1、了解我们的口腔',
        subtip7: '汇优尚品依据科学的巴氏刷牙发，将口腔分为6区16个牙面，实时语音引导，帮您清洁每个牙面，守护牙齿健康。',
        tip8: '2、智能牙刷使用流程',
        subtip8: '①牙刷连接成功后，启动牙刷即可进入实时引导界面。',
        subtip9: '② 将牙刷放在起始牙区开始清洁牙区的每个牙面。磨牙区分3个牙面，切牙区分2个牙面。每个牙面都要均匀清洁，才能清洁牙齿获得更高得分哦。',
        subtip10:'③ 牙面清洁时，请在当前牙区刷牙。',
        subtip11:'④ 根据清洁牙区方向及提示切换一牙区，暂停牙刷后可结束刷牙，结算本次刷牙分数。',
        subtip12:'PS：每次刷牙要保持2分钟以上的时间，低于30秒的刷牙结果不会被计算哦。'

    },
    //常见问题
    CommonProbl: {
        title2: '常见问题',
        tip: '1、蓝牙已开启，搜索不到蓝牙',
        subtip: '同一账号在搜索牙刷时，已被此账号绑定的牙刷将不能再次在搜索列表中显示。',
        tip2: '2、数据缺失',
        subtip2: '刷牙时间低于30秒的刷牙数据为无效刷牙数据，无法保存及同步；',
        tip3: '3、历史数据存储与保留',
        subtip3: '为保护用户隐私，已被绑定的牙刷在被另一账号绑定时，会清除机身离线刷牙数据;同一账号在删除已绑定的牙刷时，将会清除所有云端历史数据刷牙数',
        tip4: '4、为什么APP没有数据',
        subtip4: '1、APP未连接蓝牙：请确保蓝牙时打开状态',
        subtipMore:'2、请确保手机蓝牙没有连接其他蓝牙设备；',
        tip5: '5、实时引导注意事项',
        subtip5: '实时引导时不建议将智慧生活APP置于后台运行，此行为将会导致刷牙时间与实际不符，实时引导期如需离开可将牙刷暂停后结束刷牙。',
        tip6: '6、特别提醒',
        subtip6: '请勿在修改手机系统内日期/时间后连接牙刷使用，此做法会造成刷牙记录时间混乱，或离线数据无法同步。如遇此问题请校正系统时间后通过删除设备重新添加解决',

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

        tipTitle2: '暂停倒计时',
        tipText5: '重新启动牙刷可继续刷牙',
        tipText6: '还没达到您设置的时间哦',
        tipText7: '时间不足30S，数据不予保存',
        tipText8: '倒计时结束后，退出页面',
        quit:'退出实时引导',
        
    },
    //实时引导
    brushing: {
        header: '实时引导',
        tipTextI30: '超过30s即被记录为一次有效时间',
        charge: '请暂停牙刷后退出页面',
        tipText: '手动返回或后台运行会造成刷牙数据丢失',
        top:'up',
        bottom:'below',
        left:'left',
        right:'right',
        stop:'请暂停牙刷后退出页面'
    },
    //充电提示
    Reconnection: {
        index: '电量较低，请及时充电',
        index1: '刷头使用天数不足{days}天，请及时更换',
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
        header: '刷牙记录',
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
        tip: '仅保留最近3个月的刷牙记录'
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
        range: '刷牙得分参考范围',
        level: {
            low: {
                title: '有待改善',
                price: '0-59'
            },
            mid: {
                title: '一般',
                price: '60-79'
            },
            hig: {
                title: '好',
                price: '80-100'
            },
        }
    }
};
export default en;
