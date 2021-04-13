<!--
 * @Author: your name
 * @Date: 2021-04-13 16:37:07
 * @LastEditTime: 2021-04-13 18:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\components\common\chart.vue
-->
<template>
  <div class="chart" ref="chart" style="width: 100%; height: 100%"></div>
</template>
<script>
export default {
  data() {
    return {
      realValue: 60,
    };
  },
  mounted() {
    this.getEchartData();
  },
  computed: {
    changedValue() {
      let data = "";
      if (this.realValue > 0 && this.realValue < 61) {
        data = 20;
      }
      if (this.realValue < -19) {
        data = 99;
      }
      return data;
    },
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
              "天" +
              "}" +
              "\n" +
              "{a|" +
              that.$t("RemainTime.rest") +
              "}"
            );
          },
          rich: {
            a: {
              color: window.isDark
                ? "rgba(255,255,255,0.9)"
                : "rgba(0,0,0,0.9)",
              fontSize: 18,
              offsetCenter: [that.$i18n.locale === "zh" ? 30 : 35, 5],
              padding: [4, 12],
            },
            d: {
              fontWeight: "normal",
              fontSize: 16,
              color: window.isDark
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.6)",
              padding: [0, 0, 0, 10],
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
        backgroundColor: "#fff",

        series: [
          {
            type: "pie",
            hoverAnimation: false,
            radius: ["55%", "65%"],
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
            radius: ["55%", "65%"],
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
                    color: "#007DFF",
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
/**
 * @description:
 * @param {*}
 * @return {*}
 */
</script>