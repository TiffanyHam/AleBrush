/*
 * @Description:   //中文翻译
 * @version:
 * @Author: HeZhen
 * @Date: 2020-10-30 10:13:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-25 15:39:57
 */
const zh = {
    Header: {
        headerTitle: '爱伟杰音乐智能电动牙刷',
    },
    index: {
        noConnect: '未连接',
        connect: '正在连接',
        connected: '已连接',
        again:'重新连接',
        brushModule: '刷头选配',
        miniBrush: '迷你刷头',
        uBrush: 'U型刷头',
        brushLen: '刷牙模式',
        cleaning:'清洁',
        inPosition:'起始位置',
        leftD:'左下区',
        MoreSet:'更多设置',
        day: '天',
        brushDay: '刷头天数',
        restDay: '刷头剩余天数',
        lastScore: '上次刷牙得分',
        score: '分',
        music: '音乐',
        open: '已开启',
        brushLog: '刷牙记录',
        more: '更多',
        setting: '更多设置',
        greem: '已关闭',
        newest: '最新',
        Log: {
            header: '刷牙记录',
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
            the:"第",
            times:'次'
            

        },


    },
    Log: {
        newest: '最新',
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
    RemainTime: {
        header: '刷头剩余使用时间',
        day: '天',
        doctorWord: '牙医建议: 每2-3个月更换一次刷头',
        rest: '刷头剩余',
        please: '请选择正在使用的刷头',
        resetDay: '重置时间',
        btnTip: '重置后, 刷头使用剩余天数将重新从60天开始计算, 是否重置？',
        reset: '重置时间'
    },
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
    },
    BrushTeethModel: {
        header: '刷牙模式',
        model: {
            level1: '护龈模式',
            level2: '清洁模式'
        },
        lockTip: '锁定后设备无法进行档位更换',
        lockBtn: '档位锁定'
    },
    setting: {
        header: '更多设置',
        other: '其他',
        options: {
            set1: {
                title: '刷牙时动画引导',
                subTitle: '开启时，可防止刷头上的水渍、牙膏意外甩出',
                on: ''
            },
            set2: {
                title: '固件升级',
                subTitle: '',
                on: '1.0'
            }
        },
        otherOptions: {
            methodsU: '刷牙步骤',
            methodsI: '使用方法',
            title2: '常见问题',
        }
    },
    position:{
        header: '起始位置',
    },
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
        // subtip4: '2、手机GPS定位未打开，请确保GPS定位在打开状态；',
        // subtip4: '3、请确保手机蓝牙没有连接其他蓝牙设备；',
        tip5: '5、实时引导注意事项',
        subtip5: '实时引导时不建议将智慧生活APP置于后台运行，此行为将会导致刷牙时间与实际不符，实时引导期如需离开可将牙刷暂停后结束刷牙。',
        tip6: '6、特别提醒',
        subtip6: '请勿在修改手机系统内日期/时间后连接牙刷使用，此做法会造成刷牙记录时间混乱，或离线数据无法同步。如遇此问题请校正系统时间后通过删除设备重新添加解决',

    },
    brushing: {
        header: '实时引导',
        battery: '牙刷电量不足20%了哦，萌小牛红灯闪烁',
        charge: '提醒您该充电啦',
        tipText: '牙刷无电，请充电。',
        self: '好   的',
        title: '萌小牛温馨提示：',
        tipText2: '您已连续使用牙刷刷牙两次以上，频繁过度刷牙会对牙龈健康有影响哦。',
        cancle: '继续刷牙',
        sure: '结束刷牙',
        title2: '暂停倒计时',
        tipText3: '你的刷牙时间还没有达到45秒',
        tipText4: '刷牙时间不足10秒，数据不予保存',
        subtipText: '启动牙刷可继续刷牙',
        boothTip1: '萌小牛为您的牙齿保驾护航',
        boothTip2: '保护牙齿，从小开始',
        boothTip3: '手握牙刷左右缓慢摇动',
        boothTip4: '小萌牛提醒您，记得早晚刷牙哦',
        boothTip5: '小朋友，一定要认真刷牙哦',
        tipTextI30: '刷牙时间不足30秒，数据不予保存',
        tipTextI120: '你的刷牙时间还没有达到2分钟',
    },
    brushMethods: {
        headerTitle: '刷牙步骤',
        headerTitle2: '使用方法',
        tip: '正确安装刷头',
        subtip: '对准动力轴插入刷头即可，无需旋转。',
        tip2: '取适量牙膏于刷头',
        subtip2: '防飞溅模式关闭时，牙刷需先放入口中再开机，防止牙膏飞溅。防飞溅模式开启后，先启动牙刷，再放入口中。',
        tip3: '刷毛与牙龈线呈45度角缓慢移动刷牙',
        subtip3: '轻柔地将刷头放在牙齿间来回小幅度缓慢移动，请勿用力刷洗。根据巴氏刷牙法，可将口腔分为6个区16个面，刷牙过程中根据语音提示及时更换刷牙区域。',
        tip4: '',
        subtip4: '磨牙区分3个牙面，切牙区分2个牙面。按引导顺序清洁牙面，守护牙齿健康。',
        tip5: '清洁牙刷',
        subtip5: '刷牙完成后，将牙刷头对准水流冲洗，晾干。',
        tip6: '正确安装刷头',
        subtip6: '与机身平行，将牙套孔对准机身输出轴，用力装到位。',
        tip7: '将慕斯牙膏注入牙套',
        subtip7: 'U型刷头推荐使用慕斯牙膏与泡沫牙膏，如使用普通牙膏则需要淋湿U型刷头。',
        tip8: '开始刷牙',
        subtip8: '放入口腔，上下牙齿轻轻合在U型牙槽上，然后启动开关。用手左右摇动可触碰到左右两侧大牙，45秒即可完成一次舒适快捷的牙齿清洁历程。',
        tip9: '清洁牙刷',
        subtip9: '刷牙完成后，将牙刷头对准水流冲洗，晾干。',
    },
    Dialog: {
        seconds: '秒',
        tipText: '重置后, 刷头使用剩余天数将重新从89天计算, 是否重置 ?',
        cancle: '取消',
        sure: '确认',
    },
    Hint: {
        tipTitle: '连接超时',
        tipTitle1: '刷头更换',
        tipText: '请尝试一下操作：',
        tipText1: '1. 请确认牙刷电量充足，并处于关机状态；',
        tipText2: '2. 将牙刷靠近要连接的手机（10米以内）；',
        tipText3: '3. 关闭手机蓝牙，再重新开启（尤其是安卓设备）。',
        tipText4: '您的智能牙刷刷头已使用超过60天，请立即更换刷头。',
        sure: '继续使用',
        conn:'立即连接',
        change:'已更换',
        close:'关闭'
    },
    guide1: {
        header_inner: '实时引导',
        subheader: '请按顺序清洁每个牙面',
        left: '左',
        right: '右',
        low_bettery: '牙刷电量不足20%了哦，萌小牛红灯闪烁',
        low_bettery2: '提醒您该充电啦',
        tipText: '牙刷无电，请充电。',
        self: '好的',
        title: '萌小牛温馨提示：',
        tipText2: '您已连续使用牙刷刷牙两次以上，频繁过度刷牙会对牙龈健康有影响哦。',
        cancle2: '继续刷牙',
        sure2: '结束刷牙',
        title3: '暂停倒计时',
        tipText3: '你的刷牙时间还没有达到45秒',
        tipText4: '刷牙时间不足30秒，数据不予保存',
        subtipText: '启动牙刷可继续刷牙',
        boothTip1: '萌小牛为您的牙齿保驾护航',
        boothTip2: '保护牙齿，从小开始',
        boothTip3: '萌小牛提醒您，记得早晚刷牙哦',
        boothTip4: '小朋友，一定要认真刷牙哦',
        boothTip5: '如要退出请先暂停刷牙',
        boothTip6: '直接返回或后台运行会造成刷牙数据丢失',
        areas1: '左下区：外侧',
        areas2: '左下区：咬合面',
        areas3: '左下区：内侧',
        areas4: '中下区：外侧',
        areas5: '中下区：内侧',
        areas6: '右下区：外侧',
        areas7: '右下区：咬合面',
        areas8: '右下区：内侧',
        areas9: '右上区：外侧',
        areas10: '右上区：咬合面',
        areas11: '右上区：内侧',
        areas12: '中上区：外侧',
        areas13: '中上区：内侧',
        areas14: '左上区：外侧',
        areas15: '左上区：咬合面',
        areas16: '左上区：内侧',
    },
    Reconnection: {
        index: '电量较低，请及时充电',
        index1: '刷头使用天数不足{days}天，请及时更换',
    }
}
export default zh;
