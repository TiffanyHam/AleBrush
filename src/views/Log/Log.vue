
<template>
  <div class="wrapper">
    <!-- 头部start -->
      <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
          <span slot="headerTitle">{{$t('Log.header')}}</span>
      </Header>
    <main ref="main">
      <div class="content">
            <div class="time-type">
              <div class="time-tab colorB60" @click="changeChart('day')">
                <div class="empty"></div>
                <div :class="{ c_007DFF: timeType === 'day' }">
                  {{ day }}
                </div>
                <div
                  class="empty"
                  :class="{ 'bg_007DFF': timeType === 'day' }"
                ></div>
              </div>
              <div class="time-tab colorB60" @click="changeChart('week')">
                <div class="empty"></div>
                <div :class="{ c_007DFF: timeType === 'week' }">
                  {{ week }}
                </div>
                <div
                  class="empty"
                  :class="{ 'bg_007DFF': timeType === 'week' }"
                ></div>
              </div>
              <div class="time-tab colorB60" @click="changeChart('month')">
                <div class="empty"></div>
                <div :class="{ c_007DFF: timeType === 'month' }">
                  {{ month }}
                </div>
                <div
                  class="empty"
                  :class="{ 'bg_007DFF': timeType === 'month' }"
                ></div>
              </div>
            </div>
            <div v-if="monthOrWeek === 'day'">
              <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate">
              </Calendar>
              <div class="date">
                <span class="">{{weekDays}}</span>
              </div>
              <div class="brushHistory">
                <ul>
                  <li v-for="(item, index) in brushRecord" :key="index">
                    <div class="score">{{item.score}}</div>
                    <div class="brushText">{{brushText}}</div>
                    <div class="brushTime">{{item.brushTime}}</div>
                    <div class="brushDuration">{{item.brushDuration}}</div>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="monthOrWeek === 'week'">
              <DateTitle
                :time-title="weekTimeTitle"
                @prev-btn="prevWeek"
                @next-btn="nextWeek"
              ></DateTitle>
              <ElectricLabel
                :title="forWeekTitle"
                :value="selectDayElec"
                :score="score"
              ></ElectricLabel>
              <Echart
              :chart-data="chartData"
              @echartsClick="echartsClick"
            ></Echart>
            <div class="statistics color90">{{ statistics }}</div>
            <hi-card4 class="mt8" :cardData="cardData1"></hi-card4>

            </div>
            <div v-if="monthOrWeek === 'month'">
              <DateTitle
                :time-title="monthTimeTitle"
                @prev-btn="prevMonth"
                @next-btn="nextMonth"
              ></DateTitle>
              <ElectricLabel
                :title="forMonthTitle"
                :value="selectDayElec"
                :score="score"
              ></ElectricLabel>
              <Echart
              :chart-data="chartData"
              @echartsClick="echartsClick"
            ></Echart>
            <div class="statistics color90">{{ statistics }}</div>
            <hi-card4 class="mt8" :cardData="cardData2"></hi-card4>
          </div>
           <!-- 得分参考 -->
            <div class="reference flexC">
                <div class="cen8"></div>
                <div class="scoped">{{$t('LogDetail.range')}}</div>
                <div class="scoped_point">
                    <div class="point_item flex">
                        <div class="scoretip flex">{{$t('LogDetail.level.low.title')}}</div>
                        <div class="scoretip flex">{{$t('LogDetail.level.mid.title')}}</div>
                        <div class="scoretip flex">{{$t('LogDetail.level.hig.title')}}</div>
                    </div>
                    <div class="point_item flex">
                        <div class="color l"></div>
                        <div class="color c"></div>
                        <div class="color r"></div>
                    </div>
                    <div class="point_item flex">
                        <div class="max scoretip">{{$t('LogDetail.level.low.price')}}</div>
                        <div class="max scoretip">{{$t('LogDetail.level.mid.price')}}</div>
                        <div class="max scoretip">{{$t('LogDetail.level.hig.price')}}</div>
                    </div>
                </div>
              </div>
            </div>
    </main>
    <div class="tips">
      <span>{{tips}}</span>
    </div>
  </div>
</template>

<script>
// import 导入其他文件
import BScroll from "better-scroll";
import Calendar from 'vue-calendar-component';
import moment from "moment";
import {
  format,
  callHilinkFn,
  createCb,
  getDayCountOfMonth,
  toFixed,
} from "@/utils/util";

import { mapState, mapActions } from "vuex";

const WEEKCN = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const WEEKEN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  // import引入的组件需要注入到对象
  components: {
    Calendar
  },
  data() {
    // 这里存放数据
    return {
      isDark: true,
      selfB: true,
      backC: window.isDark ? '#000' : '#fff',
      header_rightIcon: false,
       hdConfig: {
          title: '刷牙记录',
          isBle: true,
          leftClick: () => {
              this.$router.back();
          }
      },
      date: new Date(),
      currentDay: '',
      timeType: "week", 
      styleSelect: {
        visible: false,
      },
      styleList: ["power.calendar", "power.chart"],
      isActive: 1,
      chartData: [],
      day: this.$t("history.day"),
      week: this.$t("history.week"),
      month: this.$t("history.month"),
      weekChartData: [],
      monthChartDate: [],
      monthOrWeek: 'week',
      selectIndex: 0,
      monthTotalElec: 0,
     // weekDay: this.$i18n.locale === "en" ? WEEKEN : WEEKCN,
      weekDay: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      // devId: '',
      score: 70,
      statistics: "数据统计",
      maskBool: false,
      dialogBool: false,
      cardData1: [
              {
                  name: '周刷牙总次数',
                  unit: '次',
                  num: '42',
              },
              {
                  name: '周平均得分',
                  unit: '次',
                  num: '97',
              },
              {
                  name: '周平均时间',
                  unit: '分',
                  num: '2',
                  units: '秒',
                  nums: '10',
              },
          ],
           cardData2: [
              {
                  name: '月刷牙总次数',
                  unit: '次',
                  num: '420',
              },
              {
                  name: '月平均得分',
                  unit: '次',
                  num: '97',
              },
              {
                  name: '月平均时间',
                  unit: '分',
                  num: '3',
                  units: '秒',
                  nums: '10',
              },
          ],
      historyData: this.$t("history.historyData"),
      weekDays: "星期一",
      brushText: "刷牙时长",
      brushRecord: [
        {
          score: 70,
          brushTime: "08:00:23",
          brushDuration: "1分55秒",
        },
         {
          score: 85,
          brushTime: "20:00:23",
          brushDuration: "1分55秒",
        },
      ],
      tips: "*仅保存最近3个月的刷牙记录"
    };
  },

  beforeCreate() {
    moment.locale("zh-cn");
  },
  created() {
    // this.isDark = this.callHilinkFn('getDarkMode', [], true) === 2;
    // //console.log('this.isDark',this.isDark);
    //卡顿原因
    // let a = new Date().getTime();
    
    createCb(this, ["getDevHistoryCb", 'getDevHistoryOfAllCb']);
    if (window.hilink) {
      window.hilink.setTitleVisible(false);
    }
    // //console.log('this.deviceId',this.deviceId);
    // //console.log('this.devId',this.devId);
    
  },
  mounted() {
    //卡顿原因
    let a = new Date().getTime();

    this.$nextTick(() => {
      //页面加载完，获取历史记录
      this.getDevHistory();
      //页面加载完，获取所有历史数据
      this.getDevHistoryOfAll();
      //console.log('页面加载完，获取所有历史数据');
      
      this.myScroll = new BScroll(this.$refs.main, {
        scrollX: false,
        scrollY: true,
        click: true,
        taps: true,
        pullDownRefresh: {
          threshold: 50,
          probeType: 3,
        },
        pullUpLoad: {
          threshold: 744,
        },
      });

      this.myScroll.on("pullingDown", (pos) => {
        // //console.log("下拉刷新！", pos);
        this.$nextTick(() => {
          this.myScroll.refresh(); // DOM 结构发生变化后,重新初始化BScroll
        });
        this.myScroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
      });

      this.myScroll.on("pullingUp", (pos) => {
        // //console.log("上拉刷新！", pos);
        this.$nextTick(() => {
          this.myScroll.refresh(); // DOM 结构发生变化后,重新初始化BScroll
        });
        this.myScroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
      });
    });

    //卡顿原因
    //console.log('mounted加载时间=',new Date().getTime()-a); 
  },

  // 监听属性
  computed: {
    monthTimeTitle() {
      if (this.$i18n.locale === "en") {
        return format(this.date, "yyyy/MM");
      }
      return format(this.date, "yyyy/MM");
    },
    forWeekTitle() {
      if (this.$i18n.locale === "en") {
      return this.weekArr[this.selectIndex].format("MM/DD");
      }
      return this.weekArr[this.selectIndex].format("MM/DD");
      
    },
    forMonthTitle() {
      let d = this.monthChartDate[this.selectIndex] || ["", 0];
      if (this.$i18n.locale === "en") {
        return d[0];
      }
      return d[0].replace("/", "/");
    },
    weekArr() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        let d = moment(this.date);
        let weekOfday = d.format("E");
        arr.push(d.subtract(weekOfday - i - 1, "days"));
      }
      return arr;
    },
    weekTimeTitle() {
      if (this.$i18n.locale === "en") {
        return `${this.weekArr[0].format(
          "YYYY/MM/DD"
        )} to ${this.weekArr[6].format("YYYY/MM/DD")}`;
      }
      //console.log("");
      return `${this.weekArr[0].format(
        "YYYY/MM/DD"
      )}-${this.weekArr[6].format("YYYY/MM/DD")}`;
    },
    selectDayElec() {
      return this.selectDayElec1();
    },
    exerciseCount() {
      return this.exerciseCounts;
    },
    totalElec() {
      if (this.monthOrWeek) {
        let arr = this.weekChartData;
        let elec = 0;
        arr.forEach((item) => {
          elec += item[0];
        });
        return toFixed(elec, 3);
      }
      return 0;
    },
  }, // 监控data中的数据变化
  methods: {
    selectDayElec1(){
      let arr = this.monthOrWeek ? this.weekChartData : this.monthChartDate;
      let date = (arr[this.selectIndex] && arr[this.selectIndex][0]) || 0;
      //console.log('arr[this.selectIndex]',arr[this.selectIndex]);
      //console.log('this.selectIndex22',this.selectIndex);
      this.currentDay = date;
      return date;
    },
    clickDay(data) {
      //console.log(data); //选中某天
    },
    changeDate(data) {
      //console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      //console.log(data); //跳到了本月
    },
    // getDay() {
    //   this.timeType = 'day';
    //   this.dayBool = true;
    //   //console.log('timeType',this.timeType);
    //   //console.log('dayBool',this.dayBool);
    //   //console.log('monthOrWeek',this.monthOrWeek);
    // },
    ...mapActions(["changeTip"]),
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    //写入蓝牙数据
    writeBLECharacteristicValue(data) {
      //写入蓝牙数据回调
      window.writeBLECharacteristicValueCallback = (res) => {
        if (res == 0) {
          //console.log("数据写入成功", res);
        }
      };
      ////console.log('this.deviceId, this.serviceId, this.characteristicId, data,',this.deviceId, this.serviceId, this.writeCharacteristicId, data);
      window.hilink.writeBLECharacteristicValue(
        this.deviceId,
        this.serviceId,
        this.writeCharacteristicId,
        data,
        "writeBLECharacteristicValueCallback"
      );
    },
    
    noZero(val){
      return parseInt(val)+'';
    },
    getHistoryTime(timestamp,showMonth,showDay){
      function changeTimeZone(date){
        let localDate = date;
        let localOffset = localDate.getTimezoneOffset()*60*1000;
        let chinaTime = new Date(localDate.getTime() - localOffset);
        return new Date( + chinaTime + 8 * 3600 * 1000 ).toJSON().substr(0,19).replace("T"," ");
      }
      let YY = timestamp.substr(0,4);
      let MM = timestamp.substr(4,2);
      let DD = timestamp.substr(6,2);
      let hh = timestamp.substr(9,2);
      let mm = timestamp.substr(11,2);
      let ss = timestamp.substr(13,2);
      // let time = [YY,'/',MM,'/',DD,' ',hh,':',mm,':',ss].join('');
      //console.log('time',new Date(YY,this.noZero(MM)-1,DD,hh,mm,ss));
      let time = new Date(YY,this.noZero(MM)-1,DD,hh,mm,ss);
      let date = changeTimeZone(time);
      MM = date.substr(5,2)
      DD = date.substr(8,2)
      hh = date.substr(11,2)
      // log()
      let res = [
        this.noZero(MM) , showMonth, this.noZero(DD) ,showDay, ' ', hh , ':' , mm +':', ss
      ]
      return res.join('');
    },
    change() {
      this.maskBool = true;
      this.dialogBool = true;
    },
    showMask() {
      this.maskBool = true;
    },
    hideMask() {
      this.maskBool = false;
      this.dialogBool = false;
      this.warmBool = false;
    },
    //初始化数据 周
    initWeekChartData() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        // arr.push([this.weekDay[i], 0]);
        arr.push([this.weekArr[i].format("M/D"), 0]);
      }
      this.weekChartData = arr;
      this.chartData = this.weekChartData;
      // //console.log("weekChartData", this.weekChartData);
    },
    //初始化数据 月
    initMonthChartData() {
      let arr = [];
      // let arr1 = [];
      let month = format(this.date, "M"); //月份
      let day = getDayCountOfMonth(this.date); //月份对应的天数
      //console.log("month", month);
      //console.log("day", day);
      for (let i = 1; i <= day; i++) {
        // arr.push([this.weekDay[i], 0]);
        arr.push([`${month}` + "/" + i, 0]);
      }
      // arr.forEach((item) => {
      //   arr1.push([0, `${month}/${item}`]);
      // });
      this.monthChartDate = arr;
      this.chartData = this.monthChartDate;
      //console.log("monthChartDate", arr, this.monthChartDate);
      // return arr1;
    },
    //获取历史记录 周
    getDevHistoryOfWeek() {
      //获取历史记录接口
      // this.chartData = [[41, '2/1'], [77, '2/2'], [99, '2/3'], [58, '2/4'], [42, '2/5'], [16, '2/6'], [200, '2/7']]
      //window.hilink.getDevHistory(devid,pageNo,pageSize,startTime,endTime,sid,character,callback)
      // `${item.format("YYYYMMDD")}T000000Z`,
      // `${item.format("YYYYMMDD")}T235959Z`,
      let startTime = this.weekArr[0].format("YYYYMMDD") + "T000000Z";
      let endTime = this.weekArr[6].format("YYYYMMDD") + "T235959Z";
      //console.log('获取历史记录 周this.startTime',startTime);
      //console.log('获取历史记录 周this.endTime',endTime);
      //console.log('this.devId',this.devId);
      // //console.log('this.weekArr[0].format("YYYYMMDD")',this.weekArr[0].format("YYYYMMDD"));
      // //console.log('this.weekArr[0].format("YYYYMMDD")',this.weekArr[6].format("YYYYMMDD"));
      callHilinkFn("getDevHistory", [
        this.devId,
        "0",
        "1000",
        startTime,
        endTime,
        "WonderCodeSmart1",
        "count",
        "getDevHistoryCb",
      ]);
    },
    //获取历史记录 月
    getDevHistoryOfMonth() {
      let yyyyMM = format(this.date, "yyyyMM");
      let count = getDayCountOfMonth(this.date);
      //console.log("yyyyMM", yyyyMM);
      //console.log("count", count);
      let startTime = yyyyMM + "01" + "T000000Z";
      let endTime = yyyyMM + count + "T235959Z";
      //console.log("startTime", startTime);
      //console.log("endTime", endTime);
      callHilinkFn("getDevHistory", [
        this.devId,
        "0",
        "1000",
        startTime,
        endTime,
        "WonderCodeSmart1",
        "count",
        "getDevHistoryCb",
      ]);
    },
    //获取历史记录所有的
    getDevHistoryOfAll() {
      let yyyyMM = format(this.date, "yyyyMM");
      let count = getDayCountOfMonth(this.date);
      function GetPreMonthDay(date, monthNum) {
         let dateArr = date.split('-');
         let year = dateArr[0]; //获取当前日期的年份
         let month = dateArr[1]; //获取当前日期的月份
         let day = dateArr[2]; //获取当前日期的日
         let days = new Date(year, month, 0);
         days = days.getDate(); //获取当前日期中月的天数
         let year2 = year;
         let month2 = parseInt(month) - monthNum;
         if (month2 <= 0) {
             let absM = Math.abs(month2);
             year2 = parseInt(year2) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12);
             month2 = 12 - (absM % 12);
         }
         let day2 = day;
         let days2 = new Date(year2, month2, 0);
         days2 = days2.getDate();
         if (day2 > days2) {
             day2 = days2;
         }
         if (month2 < 10) {
             month2 = '0' + month2;
         }
         let t2 = year2 + '-' + month2 + '-' + day2;
         return t2;
     }
      let yyyyMMdd = format(this.date, "yyyy-MM-dd");
      let startTime =  GetPreMonthDay(yyyyMMdd,2).replace(/-/g,'') + "T000000Z";
      let endTime = yyyyMM + count + "T235959Z";
      //console.log('this.startTime',startTime);
      //console.log('this.endTime',endTime);
      //console.log("getDevHistoryOfAll======>this.devId;startTime;endTime", this.devId,startTime,endTime);

      callHilinkFn("getDevHistory", [
        this.devId,
        "0",
        "1000",
        startTime,
        endTime,
        "WonderCodeSmart1",
        "count",
        "getDevHistoryOfAllCb",
      ]);
    },
    //获取历史记录
    getDevHistory() {
      // this.chartData = [];
      this.selectIndex = 0;
      // this.selectIndex = 6;
      this.monthTotalElec = 0;
      if (this.monthOrWeek) {
        this.initWeekChartData();
        this.getDevHistoryOfWeek();
      } else {
        this.initMonthChartData();
        this.getDevHistoryOfMonth();
      }
    },
    //获取历史记录回调
    getDevHistoryCb(res) {
      //console.log('获取历史记录回调 res',res);
      //console.log('this.currentDay',this.currentDay);//当前日期
      if(res && res.list && res.list.length) {
        let countArr = res.list;
        //console.log('>>>>>',countArr);
        let obj = {};
        //历史记录周数据
        if (this.monthOrWeek) {
          countArr.forEach((o) => {
            let month = Number(o.timestamp.slice(4, 6)); //截取月份
            let day = Number(o.timestamp.slice(6, 8)); //截取日期
            let date = month + "/" + day; //拼接日期2/12
            let index = this.weekChartData.findIndex(
              (item) => item[0] === date
            );
            let num = parseInt(o.data.count) || 0;//次数
            if(!obj[date]){
              obj[date] = 0;
            }            
            obj[date] += num;
            this.$set(this.weekChartData, index, [date, obj[date]]);
          });
          //获取当前日期的运动次数 
          let currentDayIndex = this.weekChartData.findIndex(
            (item)=> item[0] === this.currentDay
          )
          //console.log('currentDayIndex',currentDayIndex);
          this.exerciseCounts = this.weekChartData[currentDayIndex][1];
        }else {//历史记录月数据
          countArr.forEach(o => {
            let day = Number(o.timestamp.slice(6, 8));//截取日期
            let num = parseInt(o.data.count) || 0;//次数
            if(!obj[day]){
              obj[day] = 0;
            }            
            obj[day] += num;
            this.$set(this.monthChartDate, day-1, [this.monthChartDate[day-1][0], obj[day]]);
          });
          //获取当前日期的运动次数 
          let currentDayIndex = this.monthChartDate.findIndex(
            (item)=> item[0] === this.currentDay
          )
          this.exerciseCounts = this.monthChartDate[currentDayIndex][1];
        }
        //  this.exerciseCounts = this.
      }
      // //console.log('this.chartData',  this.chartData);
    },
    //获取历史记录所有回调
    getDevHistoryOfAllCb(res) {
      //console.log('getDevHistoryOfAllCb',res);
      if(res && res.list && res.list.length) {
        let countArr = res.list;
        this.historyDataArr = countArr;
        //console.log('this.historyDataArr',this.historyDataArr);
        let counts = 0;
        //console.log('countArr',countArr);
        let historyDataObj = {};
        countArr.forEach(obj => {
          //console.log('obj',obj);
           let day = Number(obj.timestamp.slice(0, 8)); //截取日期
           //console.log('day',day);
           let count = obj.data.count;//对应的运动次数
           //console.log('count',count);
           counts += parseInt(count);
          if(Object.prototype.hasOwnProperty.call(!historyDataObj,day)){
         //  if (!historyDataObj.hasOwnProperty(day)) {
             historyDataObj[day] = count;
           } else {
             if (+count > historyDataObj[day]) {
               historyDataObj[day] = count;
             }
           }
        });
        //console.log('historyDataObj',historyDataObj);
        // for(let i in historyDataObj) {
        //   counts += Number(historyDataObj[i]);
        // }
        //console.log('counts',counts);
        this.countValue = counts; //总收腹次数
        this.weightValue = localStorage.getItem("weightValue") || 50; //体重
        this.caloriesValue = Math.ceil(this.weightValue * this.countValue * this.coefficient); //总消耗热量
      }

    },
    // echarts点击事件
    echartsClick(params) {
      //console.log('echartsClick---------', params);
      let d = new Date(this.date);
      if (this.monthOrWeek) {
        let day = d.getDay() === 0 ? 7 : d.getDay();
        let diff = params.dataIndex - day + 1;
        this.date = new Date(d.setDate(d.getDate() + diff));
      }
      this.selectIndex = params.dataIndex;
      // //console.log('params.dataIndex',params.dataIndex);
      this.exerciseCounts = params.value[1];//运动次数
     
    },
    // 头部左箭头点击事件
    headerLeftClick() {
      this.$router.back();
    },
    // 头部右图标点击事件
    headerRightClick() {
      this.styleSelect.visible = true;
    },
    // 上一周
    prevWeek() {
      let d = this.date;
      this.date = new Date(d.setDate(d.getDate() - 7));
      this.getDevHistory();
    },
    // 下一周
    nextWeek() {
      let d = this.date;
      this.date = new Date(d.setDate(d.getDate() + 7));
      this.getDevHistory();
      // //console.log('this.weekArr',this.weekArr);
    },
    // 上一个月
    prevMonth() {
      this.date = this.getPrevMonthDate();
      this.getDevHistory();
    },
    // 下一个月
    nextMonth() {
      this.date = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        1
      );
      this.getDevHistory();
    },
    getPrevMonthDate() {
      const temp = new Date(this.date.getTime());
      temp.setDate(0);
      return temp;
    },
    changeChart(type) {
      let itemType = type;
      type !== this.timeType && (this.timeType = type);
      this.timeType = type;
      // this.dayBool = false;
      if (itemType === "day") {
        this.monthOrWeek = 'day';
        // this.monthOrWeek = true;
      } else if (itemType === "week") {
        this.monthOrWeek = 'week';
        // this.monthOrWeek = false;
      } else if (itemType === "month") {
        this.monthOrWeek = 'month';
        
      }
      this.getDevHistory();
    },
    beChoosed(item, index) {
      this.styleSelect.visible = false;
      if (index) {  // if (!!index)
        return;
      }
      this.$router.replace({ path: "/electricInfo" });
    },
    leftBtnEvent() {
      this.styleSelect.visible = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  background: #fff;
  main {
    overflow: hidden;
    flex: 1;
    padding: 0 24px;
    padding-bottom: 16px;
    .time-type {
      display: flex;
      justify-content: center;
      height: 56px;
      width: 50vw;
      margin: 0 auto;
      padding: 8px;
      // .time-tab:first-child {
        // margin-right: 16px;
      // }
      .time-tab {
        // background-color: pink;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        height: 100%;
        > div {
          width: 32px;
          margin: 0 auto;
          text-align: center;
        }
        .empty {
          // background-color: green;
          height: 2px;
          border-radius: 1px;
        }
      }
    }
    .statistics {
      font-size:16px;
    }
    // 刷牙得分
    .reference {
      flex: 1;
      background-color: #fff;
      padding: 0px 0px 0;
      font-size: 12px;
      margin-top: 21px;
      .scoped {
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          margin: 0 0 16px 0;
          height: 20px;
          line-height: 20px;
      }
      .scoped_point {
          padding: 0px 16px 0;
          flex: 1;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          .point_item {
              flex: 1;
              justify-content: space-between;
              .scoretip {
                  width: 100%;
                  text-align: center;
                  justify-content: center;
                  align-items: center;
                  font-size: 11px;
                  color: rgba(0, 0, 0, 0.6);
                  margin-bottom: 8px;
              }
              .color {
                  width: 100%;
                  height: 4px;
              }
              .l {
                  background-color: #ff7600; //  "#ff7600", "#8cd600", "#007dff"
                  border-radius: 2px 0 0 2px;
              }
              .c {
                  background-color: #007dff;
              }
              .r {
                  background-color: #8cd600;
                  border-radius: 0 2px 2px 0;
              }
              .max {
                  color: rgba(0, 0, 0, 0.6);
                  margin-top: 8px;
                  font-size: 11px;
              }
          }
      }
  }
    .historyBox {
      height: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
      .historyTimes,
      .historyBurned {
        width: 50%;
        text-align: center;
        .totalValue {
          font-size:24px;
          padding-right: 2px;
        }
        .totalUnit {
          font-size: 12px;
        }
        .totalText {
          display: block;
          font-size: 12px;
          padding-top: 2px;
        }
      }
    }
    .historyData {
      //  overflow: hidden;
      .historyDataTitle {
        font-size: 16px;
        //  margin-bottom: @8dp;
      }
      ul li {
        padding: 8px 0;
        border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
        //  .historyDate, .historyTime {
        //    font-size: @14sp;
        //    height: @24dp;
        //    line-height: @24dp;
        //  }
        .abdomenTimes,
        .burnCalories {
          position: relative;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          .abdomenTimesText,
          .burnCaloriesText {
            position: absolute;
            left: 0;
          }
          .historyDateTime {
            position: absolute;
            right: 0;
            text-align: left;
          }
          .abdomenTimesRight,
          .burnCaloriesRight {
            text-align: right ;
            width: 20%;
            position: absolute;
            left: 80px;
          }
        }
      }
      ul li:last-child {
        border: none;
      }
    }
    //修改日历组件样式
    ::v-deep.wh_content_all {
      background-color: #ffffff;
      .wh_top_changge {
        display: none;
        // .wh_content_li {
        //   color: #000000;
        // }
      }
      .wh_content {
        .wh_content_item {
          color: #000000;
          .wh_isToday {
            background-color: #007dff;
            color: #ffffff;
          }
          .wh_chose_day {
            background-color: #ffffff;
             border: 1px solid #007dff;
            color: #000000;
          }
          .wh_other_dayhide {
            display: none;
          }
        }
        // .wh_content_item::after {
        //   content: "";
        //   position: absolute;
        //   bottom: 0;
        //   width: @6dp;
        //   height: @6dp;
        //   border-radius: 50%;
        //   background-color: #007dff;
        // }
       
      }
    }
    .date {
      height: 48px;
      line-height:48px;
      font-size:18px;
    }
    .brushHistory {
      ul li {
        position: relative;
        height: 64px;
        border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
        .score {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24px;
          background-color: #47CC47;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #ffffff;
          border-radius: 50%;
        }
        .brushText {
          position: absolute;
          left: 48px;
          top: 12px;
          font-size: 14px;
        }
        .brushTime {
          position: absolute;
          left: 48px;
          top: 32px;
          font-size: 14px;
        }
        .brushDuration {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size:16px;
        }
      }
      ul li:last-child {
        border-bottom: none;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99;
  }
  .tips {
    text-align: center;
    span {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
.flex {
    display: flex;
    flex-direction: row;
}
.theme-dark {
  .wrapper {
    main {
      .historyData {
        ul li {
          border-bottom: 0.00694rem solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
</style>