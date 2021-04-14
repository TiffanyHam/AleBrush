<!--
 * @Author: your name
 * @Date: 2021-03-25 09:25:35
 * @LastEditTime: 2021-04-14 09:24:49
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
  props: {
    realValue: {
      type: Number,
      required: true,
      default: 25,
    },
  },
  name: "Cprogress",
  data() {
    return {
      changedValue:''
    };
  },

  components: {},
  watch: {
    realValue(n, o) {
      this.realValue = n;
      if (n > 0 || n < 61) {
        this.changedValue = 20;
      }
      if (n < -19) {
        this.changedValue = 99;
      }
      this.getEchartData();
    },
  },
  computed: {
    // changedValue() {
    //   let data = "";
    //   if (this.realValue > 0 && this.realValue < 61) {
    //     data = 20;
    //   }
    //   if (this.realValue < -19) {
    //     data = 99;
    //   }
    //   return data;
    // },
  },

  created() {},

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
      var placeHolderStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0,0,0,0)",
          borderWidth: 0,
        },
        emphasis: {
          color: "rgba(0,0,0,0)",
          borderWidth: 0,
        },
      };

      var dataStyle = {
        normal: {
          formatter: function (e) {
            return (
              that.realValue +
              "{d|" +
              that.$t("RemainTime.day")  +
              "}" +
              "\n" +
              "{a|" +
              that.$t("RemainTime.rest") +
              "}"
            );
          },
          rich: {
            d: {  //天
              color: window.isDark
                ? "rgba(255,255,255,0.9)"
                : "rgba(0,0,0,0.9)",
              fontSize: 18,
              offsetCenter: [that.$i18n.locale === "zh" ? 30 : 35, 5],
              padding: [4, 3],
            },
            a: {  //刷头剩余
              fontWeight: "normal",
              fontSize: 16,
              color: window.isDark
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.6)",
              padding: [20, 0, 0, 0],
            },
          },

          position: "center",
          show: true,
          textStyle: {
            offsetCenter: [-10, 20],
            color: window.isDark ? "rgba(255,255,255,0.86)" : "rgba(0,0,0,0.9)",
            fontSize: 45,
            fontWeight: 500,
          },
        },
      };

      let option = {
        backgroundColor: window.isDark ? "#000" : "#fff",
        series: [
          {
            type: "pie",
            hoverAnimation: false,
            radius: ["85%", "100%"],
            center: ["50%", "50%"],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false,
              },
            },
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: 60,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE",
                  },
                },
              },
              {
                value: 20,
                itemStyle: placeHolderStyle,
              },
            ],
          },
          //上层环形配置
          {
            type: "pie",
            hoverAnimation: false, //鼠标经过的特效
            radius: ["85%", "100%"],
            center: ["50%", "50%"],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false,
              },
            },
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: that.realValue,
                itemStyle: {
                  normal: {
                    color: window.isDark ? "#3f97e9" : "#007dff",
                  },
                },
                label: dataStyle,
              },
              {
                value: that.changedValue,
                itemStyle: placeHolderStyle,
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