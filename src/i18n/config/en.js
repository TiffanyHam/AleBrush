/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-11-11 11:25:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-28 16:44:17
 */
const en = {
  index: {
    noConnect: "Disconnect",
    connect: "Connecting",
    connected: "Connected",
    again: "Reconnect",
    score: "points",
    day: "days",
    lastScore: "Score",
    restDay: "Brush head rest",
    brushmode: "Model",
    brushLen: "Brush Time",
    inPosition: "Starting",
    MoreSet: "More",
    brushLog: "Record",
    more: "More",
    nolog: "No Record",
    minute: "min",
    second: "sec",
    weeks: {
      today: "Today ",
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
      Sun: "Sunday",
    },
    // Log: {
    //     year: '年',
    //     month: '月',
    //     date: '日',
    //     minute: '分',
    //     second: '秒',
    //     score: '分',
    //     week: {
    //         Mon: '星期一',
    //         Tus: '星期二',
    //         Wed: '星期三',
    //         Thu: '星期四',
    //         Fri: '星期五',
    //         Sat: '星期六',
    //         Sun: '星期天',
    //     },
    //     day: {
    //         Mon: '周一',
    //         Tus: '周二',
    //         Wed: '周三',
    //         Thu: '周四',
    //         Fri: '周五',
    //         Sat: '周六',
    //         Sun: '周日',
    //     },
    //     brushLen: '刷牙时长',
    //     tip: '仅保留最近3个月的刷牙记录',
    // },
  },
  //刷牙模式
  BrushTeethModel: {
    level1: "Clean",
    level2: "Soft",
    level3: "Massage",
    level4: "Strong",
  },
  //刷牙力度
  BrushTeethVigor: {
    teethVigor: "刷牙力度",
    Vigor1: "强",
    Vigor2: "中",
    Vigor3: "弱",
  },
  //刷牙时长
  BrushTeethLen: {
    length1: "2min",
    length2: "2.5min",
    length3: "3min",
  },
  //起始位置
  BrushTeethPosition: {
    position1: "Lower left area ",
    position2: "Lower right area",
    position3: "Upper right area",
    position4: "Upper left area",
    header: "Starting position",
    top: "maxillary",
    bottom: "lower jaw",
    left: "left",
    right: "right",
    select: "Please select a starting position",
    clockwise: "clockwise",
    anticlockwise: "anticlockwise",
    you: "You select the ",
    as: "for",
    initial: "starting position",
    order: "sequence for ",
    current: "current",
  },
  //更多设置
  setting: {
    header: "More Settings",
    otherOptions: {
      methodsU: "Brush your teeth steps",
      methodsI: "Methods of use",
      title2: "Common problems",
      see: "view",
    },
    audio: "语音引导",
    switchOn: "开启时，启动牙刷进入实时引导页面会有语音提示",
  },
  //刷牙步骤
  brushMethods: {
    headerTitle: "Brush your teeth steps",
    subtip:
      "Insert the toothbrush head in the right direction input shaft, brush head resh need to keep some gap between main body, so as not to affect the vibration effect.",
    subtip2:
      "To prevent toothbrush splash, recommend a small amount of tooth brush in the brush head.",
    subtip3: "It soaks into the mouth, and then start the toothbrush.",
    subtipMore: "* Need to start the toothbrush, and then in your mouth.",
    subtip4:
      "The bristles should be moved at a 45-degree Angle to the gum line.",
    subtip5:
      "Light hold a toothbrush body, moves in the weeks to move slowly, don't you push hard on the or scrub.",
    subtip6: "After brushing teeth, gargle with water, please.",
    headerTitle2: "Methods of use",
    tip7: "1、To understand our oral cavity",
    subtip7:
      "HYSPIN according to the scientific Pasteur brushing hair,the oral cavity is divided into 4 areas 16 dental surfaces.help you clean each tooth surface,protect the health of teeth. ",
    tip8: "2、Intelligent toothbrush use process",
    subtip8:
      "① Toothbrush after the connection is successful, start the toothbrush can real-time guide into the interface.",
    subtip9:
      "② Put the toothbrush on the initial tooth area began to clean tooth area each tooth surface. Tang teeth to distinguish 3, tooth surface, incisor to distinguish the two tooth surface. Each tooth surface evenly clean, to the qing. Clean teeth get higher scores.",
    subtip10:
      "③ Tooth surface cleaning, please in the current tooth brushing your teeth.",
    subtip11:
      "④ According to clean tooth area direction and prompt switch a tooth area, suspended toothbrush can end after brushing your teeth, settle the score brushing your teeth.",
    subtip12:
      "PS:Each time you brush your teeth to keep more than 2 minutes time, less than 30 seconds of brushing the results will not be calculated.",
  },
  //常见问题
  CommonProbl: {
    title2: "Common problems",
    tip: "1、Bluetooth has open, can't search the bluetooth",
    subtip:
      "The same account in the search a toothbrush,has been the account binding toothbrush will not be able to once again in the search list.",
    tip2: "2、Lack of data",
    subtip2:
      "Time less than 30 seconds to brush your teeth brushing your teeth brushing their teeth as invalid data, unable to save and synchronization",
    tip3: "3、Historical data storage and reserved",
    subtip3:
      "To protect user privacy,has been binding toothbrush was another account binding, will remove the fuselage offline data: brushing your teeth in the same account in delete binding toothbrush,brushing their teeth will remove all the cloud history data",
    tip4: "4、Why didn't the APP data",
    subtip4:
      "1、The APP does not connect bluetooth: please make sure that the bluetooth when open",
    subtipMore:
      "2、Please make sure that mobile phone bluetooth to connect to other bluetooth device",
    tip5: "5、Real-time guidance note",
    subtip5:
      "Real-time guidance when it is notrecommended to put intelligent life APP runs in the background this behavior will lead to brush your teeth do not tally with the actual time,real-time guidance period if you want toleave the toothbrush can be suspended after brushing your teeth.",
    tip6: "6、Special remind",
    subtip6:
      "Please do not in modied mobile phone system date/time connect the toothbrush after use, this approach can lead to chaos, recording time to brush your teeth or oine data cannot be synchronized. In case of this problem by removing equipment after calibration system time, please add",
  },
  // 刷牙剩余使用时间 重置
  RemainTime: {
    header: "Brush head rest",
    day: "days",
    doctorWord:
      "The dentist suggested that once every 2 to 3 months replacement brush head!",
    proposal:
      "Each brush for more than 30 seconds was recorded as a valid number of brushing your teeth, each brush head can be used 120 times a day (twice or 60 days),the number of days used over time change the brush head",
    rest: "Brush head rest",

    resetDay: "Reset the time",
    btnTip:
      "After a reset, brush head to use the remaining days will return from 60 days, reset?",
    cancle: "Cancel",
    sure: "Determine",
  },
  // 倒计时  超时弹窗
  Hint: {
    tipTitle: "Connection timeout",
    tipText: "Please try the operation:",
    tipText1:
      "1.please make sure the toothbrush power enough,and was turned off；",
    tipText2:
      "2.sieve the toothbrush is close to connect mobile phone(10 meters)；",
    tipText3:
      "3.tuen off the phone bluetooth,open again(especially android devices).",
    sure: "Continue",
    conn: "Reconnect",

    tipTitle1: "Brush replace",
    tipText4:
      "Your smart toothbrush head has been used for more than 60 days. Please replace the brush head immediately.",
    change: "has replaced",
    close: "close",

    tipTitle2: "Suspend the countdown",
    tipText5: "Restart the toothbrush may continue to brush your teeth",
    tipText6: "or haven't reached you to set the time.",
    tipText7: "time is less than 30s, the data will not be saved.",
    tipText8: "After the end of the countdown,then exit pages",
    quit: "Quit the page",
    seconds: "seconds",
  },
  //实时引导
  brushing: {
    header: "Real-time guide",
    tipTextI30: "More than 30s is recorded as a valid time",
    charge: "Please pause the toothbrush after exiting the page",
    tipText:
      "Manual return or running in the background will cause tooth brushing data loss",
    top: "up",
    bottom: "below",
    left: "left",
    right: "right",
  },
  //充电提示
  Reconnection: {
    index: "Low power, please charge in time",
    index1:
      "brush head using days had less than {days} days, please change in time",
  },
  history: {
    titleName: "history record",
    tabs: ["day", "week", "month"],
    delete: "delete",
    day: "Day",
    week: "Week",
    month: "Month",
    exerciseTimes: "Workouts",
    exerciseUnit: "X",
    statistics: "statistics",
    historyData: "history data",
    deleteRecord: "Are you sure you want to delete this record?",
    noRecord: "No records",
    emptyRecord: "Or data has been emptied",
    startTraining: "Start a training session!",
    average: "average",
    point: "point",
  },
  //历史记录
  Log: {
    header: "Record",
    year: "年",
    month: "月",
    date: "日",
    minute: "分",
    minutes: "分",
    score: "分",
    second: "秒",
    week: {
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
      Sun: "Sunday",
    },
    day: {
      Mon: "周一",
      Tus: "周二",
      Wed: "周三",
      Thu: "周四",
      Fri: "周五",
      Sat: "周六",
      Sun: "周日",
    },
    brushLen: "Brush Time",
    tip: "*hold only the last three months of brushing your teeth",
    noData: "No Record",
    statistics: "Statistics",
    week_brush_times: "Weekly Times",
    times: "times",
    week_avg_score: "Average Score",
    point: "point",
    week_avg_time: "Average Time",
    min: "min",
    sec: "sec",
    month_brush_times: "Monthly Times",
    month_avg_score: "Average Score",
    month_avg_time: "Average Time",
  },
  //评分
  LogDetail: {
    header: "刷牙详情",
    minute: "分",
    brushLen: "刷牙时长：",
    brushTime: "刷牙时间：",
    range: "Score reference range",
    level: {
      low: {
        title: "To change it",
        price: "0-59",
      },
      mid: {
        title: "Normal",
        price: "60-79",
      },
      hig: {
        title: "Good",
        price: "80-100",
      },
    },
  },
};
export default en;
