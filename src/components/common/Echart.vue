<template>
    <div class="echarts"></div>
</template>

<script>
import echarts from "echarts";

export default {
    name: "Echart",
    data () {
        return {
            chartObj: null,
        };
    },
    props: {
        chartData: {
            type: Array,
        },
    },
    watch: {
        chartData: {
            handler (newValue) {
                // debugger;
                this.chartInit(newValue);
            },
            deep: true,
        },
    },
    mounted () {
        // this.chartInit(this.chartData);
    },
    methods: {
        chartInit (value) {
          // debugger;
            // if (!this.chartData || !this.chartData.length) {
            //     return;
            // }
            if (this.chartObj) {
                this.chartObj.dispose();
            }
            let myChartDom = document.getElementsByClassName("echarts")[0];
            let myChart = echarts.init(myChartDom);
            this.chartObj = myChart;

            let data = [...value];
            const opts = {
                tooltip: {
                    formatter: (value, index) => {
                        // console.log(value, index);
                        this.echartsClick(value[0]);
                        // TODO : 告知父组件
                        return '';
                    },
                    trigger: 'axis',
                    showContent: true,
                    triggerOn: 'click',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#DFE5F3' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#2A6CB8' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                },
                //图表数据
                dataset: {
                    source: data,
                    // source: [["times", "week"], [41, '2/1'], [77, '2/2'], [99, '2/3'], [58, '2/4'], [42, '2/5'], [16, '2/6'], [70, '2/7']]
                },
                textStyle: {
                    color: window.isDark ? 'rgba(255, 255, 255, .6)' : 'rgba(0, 0, 0, .2)',
                },
                grid: {
                    containLabel: true,
                    top: 10,
                    right: 24,
                    left: 16,
                    bottom: 5,
                },
                xAxis: {
                    type: "category",
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    name: "",
                    position: 'right',

                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: window.isDark ? 'rgba(255, 255, 255, .2)' : 'rgba(0, 0, 0, .2)',
                            width: 0.5
                        }
                    }
                },
                series: [
                    {
                        type: "bar",
                        barWidth: 6,
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color: '#007DFF'
                        },
                        encode: {
                            x: "week",
                            y: "count",
                        },
                    },
                ],
            };
            myChart.setOption(opts);
            this.$nextTick(() => {
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
            // myChart.on("click", (params) => {
            //     // this.echartsClick(params);
            // });
        },
        echartsClick (params) {
            this.$emit("echartsClick", params);
        }
    },
};
</script>

<style lang="scss" scoped>
.echarts {
    box-sizing: content-box;
    height: 50vw;
    padding:24px 0 16px 0;
}
</style>
