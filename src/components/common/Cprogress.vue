<!--
 * @Author: your name
 * @Date: 2021-03-25 09:25:35
 * @LastEditTime: 2021-05-12 09:33:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\components\common\Cprogress.vue
-->
<template>
  <div class="container flex">
    <div class="chart" ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: ["realValue"],
  name: "Cprogress",
  data() {
    return {
      temp: this.realValue,
    };
  },

  components: {},
  watch: {
    realValue(n) {
      this.temp = n;
      if (n > 60) {
        this.temp = 60;
      }
      if (n < 0) {
        this.temp = 0;
      }
      this.getEchartData();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getEchartData();
    });
  },
  methods: {
    /**
     * @description: 注册echarts
     * @param {type}
     * @return {type}
     */
    getEchartData() {
      let chart = this.$refs.chart;
      if (chart) {
        let myChart = this.$echarts.init(chart);
        let option = this.setOptions();
        myChart.setOption(option, true);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
    },

    /**
     * @description: 设置echarts 的option
     * @param {type}
     * @return {type}
     */
    setOptions() {
      let that = this;
      let option = {
        backgroundColor: window.isDark ? "#000" : "#fff",
        angleAxis: {
          show: false,
          max: (60 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 225, //极坐标初始角度
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 16, //圆环宽度
        radiusAxis: {
          show: false,
          type: "category",
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "50%"],
          radius: ["83%", "98%"],
        },
        series: [
          {
            type: "bar",
            data: [
              {
                //上层圆环，显示数据
                value: that.temp,
                itemStyle: {
                  color: {
                    //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右 0-1
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: window.isDark ? "#3f97e9" : "#007dff",
                      },
                      {
                        offset: 1,
                        color: window.isDark ? "#3f97e9" : "#007dff",
                      },
                    ],
                  },
                },
              },
            ],
            barGap: "-100%", //柱间距离,上下两层圆环重合
            coordinateSystem: "polar",
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2, //圆环层级，同zindex
          },
          {
            //下层圆环，显示最大值
            type: "bar",
            data: [
              {
                value: 60,
                itemStyle: {
                  color: "rgba(204,204,204,0.4)",
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
          },
          //仪表盘
          {
            name: "AQI",
            type: "gauge",
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              offsetCenter: [-10, 10],
              color: window.isDark
                ? "rgba(255,255,255,0.86)"
                : "rgba(0,0,0,0.9)",
              fontSize: 45,
              fontWeight: 500,
              rich: {
                a: {
                  fontWeight: "normal",
                  fontSize: 16,
                  color: window.isDark
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(0,0,0,0.6)",
                  padding: [10, 0, 0, 20],
                },
              },
            },
            detail: {
              formatter: function (e) {
                return that.$t("RemainTime.day");
              },
              color: window.isDark
                ? "rgba(255,255,255,0.9)"
                : "rgba(0,0,0,0.9)",
              fontSize: 18,
              offsetCenter: [that.$i18n.locale === "zh" ? 30 : 35, 5],
              padding: [4, 3],
            },
            data: [
              {
                value: that.temp,
                name:
                  that.temp + "\n" + "{a|" + that.$t("RemainTime.rest") + "}",
              },
            ],
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  //border: 1px solid red;
  position: relative;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.theme-dark {
  .container {
    background-color: #000;
    .chart {
      background-color: #000;
    }
  }
}
</style>