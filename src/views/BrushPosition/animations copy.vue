
<template>
    <div class="brushing_other flexC">
        <div class="header">
            <div class="header_inner">实时引导</div>
        </div>
        <div class="subheader">超过30s即被记录为一次有效时间</div>
        <!-- 刷牙引导 -->
        <div class="banner flex">
            <div class="centerImg posiImg position_center">
                <div class="top font16">上</div>
                <div class="bottom font16">下</div>
                <div class="position_center left font16">左</div>
                <div class="right font16">右</div>
                <!-- 左下 -->
                <div v-if="index == 1" :class="brushOn == 1 ? 'left_down_out posiImg animate opcity_animate':''"></div>
                <div v-if="index != 1" class="left_down_out posiImg"></div>
                <!-- 右下 -->
                <div v-if="index == 2" :class="brushOn == 1 ? 'right_down_out posiImg animate opcity_animate':''"></div>
                <div v-if="index == 0 || index == 3 || index == 4" class="right_down_out posiImg"></div>
                <!-- 右上 -->
                <div v-if="index == 3" :class="brushOn == 1 ? 'right_up_out posiImg animate opcity_animate':''"></div>
                <div v-if="index == 0 || index == 4" class="right_up_out posiImg"></div>
                <!-- 左上 -->
                <div v-if="index == 4" :class="brushOn == 1 ? 'left_up_out posiImg animate opcity_animate':''"></div>
                <div v-if="index == 0">
                     <div v-if="index == 0 || index == 1 || index == 2 " class="left_up_out posiImg"></div>
                </div>
                <!-- 中心时间卷 -->
                <div class="circle">
                    <svg
                        class="svg position_center"
                        width="100%"
                        height="100%"
                        viewBox="0 0 95 95"
                    >
                        <circle
                            class="progress"
                            cx="47.5"
                            cy="47.5"
                            r="42.5"
                            stroke-width="7"
                            stroke="#66b4fe"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                        />
                        <path
                            id="path1"
                            stroke-width="7"
                            fill="none"
                            :d="`M${startX} ${startY} A42.5 42.5 1 0 0 ${endX} ${endY}`"
                            stroke="#fff"
                        />
                        <text
                            class="font24"
                            fill="rgba(255,255,255,0.9)"
                            x="39.5"
                            y="40.5"
                            style="dominant-baseline:middle;text-anchor:middle;"
                        >{{second20}}</text>
                        <text
                            class="font16 second"
                            fill="rgba(255,255,255,0.9)"
                            x="60.5"
                            y="42.5"
                            style="dominant-baseline:middle;text-anchor:middle;"
                        >S</text>
                        <text
                            class="font12"
                            fill="rgba(255,255,255,0.9)"
                            x="47.5"
                            y="65.5"
                            style="dominant-baseline:middle;text-anchor:middle;"
                        >{{toal}}</text>
                    </svg>
                </div>
            </div>
        </div>
        <div class="brushing">
          <div>请暂停牙刷后退出页面</div>
          <div>手动返回或后台运行会造成刷牙数据丢失</div>
        </div>
        <!-- 倒计时弹窗 -->
         <DialogTime :isEnough="isEnough" v-show="isShow">
        </DialogTime>
    </div>
</template>

<script>
export default {
    name: "Brushing_other",
    data() {
        return {
            // 初始化变量
            initFun: null,
            // 动画和时间走动用到的定时器
            areasetVal: null,
            tatolsetVal: null,
            animatesetVal: null,
            timer:null,
            timer1:null,
            timer2:null,
            // 牙齿的4个面
            sixFace: 4,
            // 中间区域 30s 时间
            second20: 30,
            isEnough:false,  //30S
            isShow:false,
            // 中间总时间
            toal: "00:00",
            flag:false,
            // 弹窗无电传值设置
            nopower_dialog_show: false,
            // 弹窗频繁刷牙传值设置
            sitcom_dialog_show: false,
            // 刷牙不足30秒弹窗
            shortage_dialog_show: false,
            svg: true,
            // svg 的旋转角度
            rotate: null,
            startX: 5,
            startY: 47.5,
            endX: 0,
            endY: 0,
            // 动画下标
            index: null,
            // 动画区域
            areas: [
                "左下区：外侧",
                "右下区：外侧",
                "右上区：外侧",
                "左上区：外侧"
            ],
            brushOn:1,//1开；0关
        };
    },

    components: {},

    computed: {},
    watch: {
     
    },
    created() {
        let r = 42.5;
        let centerX = 47.5;
        let centerY = 47.5;
        let svgX = r * Math.cos((Math.PI / 180) * 90);
        let svgY = r * Math.sin((Math.PI / 180) * 90);
        this.rotate = [
            { x: centerX - r, y: centerY },
            { x: centerX + svgX, y: centerY + svgY },
            { x: centerX + r, y: centerY },
            { x: centerX - svgX, y: centerY - svgY },
        ];
        this.startX = this.rotate[0].x;
        this.startY = this.rotate[0].y;
        this.endX = this.rotate[1].x;
        this.endY = this.rotate[1].y;

      
    },

    mounted(e) {
        this.init();
    },

    methods: {
        /**
         * @description: 正常进入页面
         * @param {*}
         * @return {*}
         */
        init() {
            if (this.brushOn == 0) { //关
                this.isShow = true
                clearInterval(this.timer)
                clearInterval(this.timer1)
                clearInterval(this.timer2)
                return true;
            }else{
                setTimeout(() => {
                    this.brushOn = 0
                   clearInterval(this.timer)
                   clearInterval(this.timer1)
                   clearInterval(this.timer2)
                 },3000)
                
                 this.totalTime();
                 this.countDown();
                 this.showAnimate1();
            }

        //       if(this.second20 < 30){
        //       this.isEnough = true
        // }
        },
        
        /**
         * @description: 时间倒计时
         * @param {*}
         * @return {*}
         */        
        countDown(){
           const TIME_COUNT = 30;
             if (!this.timer) {
                 this.second20 = TIME_COUNT;
                 let count = this.sixFace;
                 let len = this.rotate.length;
                 this.timer = setInterval(() => {
                     if (this.second20 > 0 && this.second20 <= TIME_COUNT) {
                         this.startX =  this.rotate[len - count]["x"];
                         this.startY =  this.rotate[len - count]["y"];
                         this.endX =this.rotate[len + 1 - count == 4 ? 0 : len + 1 - count]["x"];
                         this.endY = this.rotate[len + 1 - count == 4 ? 0 : len + 1 - count]["y"];
                         this.second20--;
                        if(this.second20 == 0){
                             this.second20 = 30
                             count--;
                             this.sixFace = count;
                        }
                        if (this.toal == "02:00") {
                            this.second20 = 0;
                            this.index = 0;
                            clearInterval(this.timer);
                            return false;
                            }
                      } else {
                          clearInterval(this.timer);
                          this.timer = null;
                              }
                      }, 1000)
                 }
             },
        /**
         * @description: 刷牙时间 区域 30S 倒计时
         * @param {*}
         * @return {*}
         */
        // areaTime() {
        //     let that = this;
        //     let count = that.sixFace;
        //     let len = this.rotate.length;
        //     let time = that.second20;
        //     that.areasetVal = setInterval(() => {
        //         if (time == 30) {
        //             that.startX = that.rotate[len - count]["x"];
        //             that.startY = that.rotate[len - count]["y"];
        //             that.endX =
        //                 that.rotate[len + 1 - count == 4 ? 0 : len + 1 - count][
        //                     "x"
        //                 ];
        //             that.endY =
        //                 that.rotate[len + 1 - count == 4 ? 0 : len + 1 - count][
        //                     "y"
        //                 ];
        //         }
        //         time--;
        //         that.second20 = time;
        //         if (that.toal == "02:00") {
        //             time = 0;
        //             that.second20 = 0;
        //             that.index = 0;
        //             clearInterval(that.areasetVal);
        //             return false;
        //         }
        //         if (time == 0) {
        //             time = 30;
        //             that.second20 = time;
        //             count--;
        //             that.sixFace = count;
        //         }
        //     }, 1000);
        // },
        /**
         * @description: 刷牙总时间
         * @param {*}
         * @return {*}
         */        
        totalTime () {
            let that = this
            let  minute, second
            minute = second = 0
            that.timer1 = setInterval(function () {
                if (second >= 0) {
                    second = second + 1
                }
                if (second >= 60) {
                    second = 0
                    minute = minute + 1
                }
                if (minute >= 60) {
                    minute = 0
                }
                if(second < 10){
                    that.toal = '0'+ minute + ':'+ '0' + second
                }else{
                    that.toal = '0'+ minute + ':' + second
                }
                if(that.toal === "02:00"){
                    window.clearInterval(that.timer1)
                }
                }, 1000)
             },

        /**
         * @description: 刷牙时间总计
         * @param {*}
         * @return {*}
         */
        // tatolTime() {
        //     let s0 = parseInt(this.toal.substr(4, 1)),
        //         s1 = parseInt(this.toal.substr(3, 1)),
        //         m1 = parseInt(this.toal.substr(1, 1));
        //     this.tatolsetVal = setInterval(() => {
        //         s0++;
        //         if (s0 > 9) {
        //             s0 = 0;
        //             s1 += 1;
        //         }
        //         if (s1 > 5) {
        //             s1 = 0;
        //             m1 += 1;
        //         }
        //         this.toal = `0${m1}:${s1}${s0}`;
        //         if (this.toal === "02:00") {
        //             clearInterval(this.tatolsetVal);
        //         }
        //     }, 1000);
        // },
        showAnimate1(){
            let that = this
            let count = this.second20;
            let area = this.sixFace;
            that.timer2 = setInterval(() => {
                if (area) {
                    count == "30" ? that.index++ : "";
                    count--;
                    if(count == 0){
                        count = 30
                        area--;
                    }
                }
                if (area == 0) {
                     clearInterval(that.timer2);
                }
            },1000)
        },

        /**
         * @description: 各个区域动画显示
         * @param {*}
         * @return {*}
         */
        // showAnimate() {
        //     let count = this.second20;
        //     let area = this.sixFace;
        //     this.animatesetVal = setInterval(() => {
        //         let s = count.toString();
        //         // if (area == 5 || area == 2) {
        //         //     s == "10" || s == "20" ? _.index++ : "";
        //         // } else {
        //         //     s == "7" || s == "13" || s == "20" ? _.index++ : "";
        //         // }
        //         if (area) {
        //             s == "30" ? this.index++ : "";
        //         } 
        //         count--;
        //         if (count == 0) {
        //             count = 30;
        //             area--;
        //             if (area == 0) {
        //                 clearInterval(this.animatesetVal);
        //             }
        //         }
        //     }, 1000);
        // },
    },
};
</script>

<style lang='scss' scoped>
.brushing_other {
    width: 100%;
    height: 100%;
    background-color: #62bffc;
    position: relative;
    .brushing{
        color: #fff;
        height: 40px;
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        margin-bottom: 10px;
    }
    .header {
        height: 80px;
        position: relative;
        .header_inner {
            position: absolute;
            bottom: 14px;
            width: 100%;
            color: #fff;
            font-size: 12px;
            text-align: center;
        }
    }
    .subheader {
        width: 100%;
        color: #fff;
        font-size: 12px;
        text-align: center;
        margin-top: 4px;
    }
    .banner {
        width: 100%;
        flex: 1;
        position: relative;
        justify-content: center;
        align-items: center;

        .centerImg {
            width: 288px;
            height: 451.14px;
            background-image: url("../../assets/image/cut_surface/booth.png");
            .left {
                left: 12%;
                color: rgba(255, 255, 255, 0.9);
            }
            .right {
                position: absolute;
                right: 12%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: rgba(255, 255, 255, 0.9);
            }
            .top {
                position: absolute;
                left: 50%;
                top: -2%;
                transform: translate(-50%, -50%);
                color: rgba(255, 255, 255, 0.9);
            }
            .bottom {
                position: absolute;
                bottom: -2%;
                left: 50%;
                color: rgba(255, 255, 255, 0.9);
            }
            .area {
                position: absolute;
                bottom: 100px;
                left: 50%;
                transform: translate(-50%, -50%);
                color: rgba(255, 255, 255, 0.9);
            }
            .width_up {
                width: 115px;
                height: 32px;
            }
            .width_out {
                width: 48px;
                height: 116px;
            }
            .width_on {
                width: 50px;
                height: 115px;
            }
            .width_in {
                width: 60px;
                height: 116px;
            }
            // 阴影
            .left_down_out {
                width: 54.5px;
                height: 148.25px;
                left: 12px;
                bottom: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_down_out.png");
            }
            .right_down_out {
                width: 54.5px;
                height: 148.25px;
                right: 8px;
                bottom: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_down_out.png");
            }
            // 左上
            .left_up_out {
                width: 54.5px;
                height: 148.25px;
                left: 12px;
                top: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_up_out.png");
            }
            // 右上
            .right_up_out {
                width: 54.5px;
                height: 148.25px;
                right: 8px;
                top: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_up_out.png");
            }
            .circle {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 135px;
                height: 135px;
                .second {
                    margin-left: 25px;
                }
            }
        }
    }
    .footer {
        width: 100%;
        height: 115px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        color: rgba(0, 0, 0, 0.9);
        .low_bettery {
            position: absolute;
            bottom: 37px;
            left: 50%;
            transform: translate(-50%, 0);
            display: inline-block;
            width: 100%;
            height: 27px;
            font-size: 16px;
            z-index: 99;
            padding: 0 0 41px 0;
            span {
                display: inline-block;
                width: 100%;
                text-align: center;
                line-height: 24px;
            }
        }
    }
    .low_backC {
        color: rgb(251, 42, 45, 0.9);
        background-color: #fff4f4;
    }
}
.flex {
    display: flex;
    flex-direction: row;
}
.flexC {
    display: flex;
    flex-direction: column;
}
.posiImg {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
}
.position_center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.font24 {
    font-size: 24px;
}
.font16 {
    font-size: 16px;
}
.font12 {
    font-size: 12px;
}
.opcity_animate {
    animation-name: opacityAnimate;
}
.animate {
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.closeAnimation{
   animation-play-state: paused
}
// 牙齿阴影动画
@keyframes opacityAnimate {
    0% {
        opacity: 0.2;
    }
    25% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.8;
    }
    75% {
        opacity: 0.5;
    }
    100% {
        opacity: 0.2;
    }
}
.theme-dark {
    .brushing_other {
        background-color: #56b3ff;
        .header {
            .header_inner {
                color: rgba(0, 0, 0, 0.9);
            }
        }
        .subheader {
            color: rgba(0, 0, 0, 0.9);
        }
        .img {
            background-color: #484848;
        }
       
        .banner {
            .centerImg {
                .circle {
                    .time {
                        color: rgba(255, 255, 255, 0.9);
                    }
                }
            }
        }
        .footer {
            background-color: #000000;
            color: rgba(255, 255, 255, 0.86);
            .low_bettery {
                span {
                }
            }
        }
        .low_backC {
            color: #e64548;
            background-color: #372222;
        }
    }
}
</style>
