
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
                <!-- <div class="area font12">{{areas[index-1]}}</div> -->
                <!-- 左下 -->
                <div v-if="1 == index" class="left_down_out posiImg animate opcity_animate"></div>
                <!-- 右下 -->
                <div v-if="2 == index" class="right_down_out posiImg animate opcity_animate"></div>
                <!-- 右上 -->
                <div v-if="3 == index" class="right_up_out posiImg animate opcity_animate"></div>
                <!-- 左上 -->
                <div v-if="4 == index" class="left_up_out posiImg animate opcity_animate"></div>
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
                            stroke-width="10"
                            stroke="#66b4fe"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                        />
                        <path
                            id="path1"
                            stroke-width="11"
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
        
        <!-- 电量不足20%的提示 -->
        <!-- <div :class="percent20 ? 'footer low_backC' : 'footer'">
            <span v-if="percent20" class="low_bettery">
                <span>牙刷电量不足20%了哦，萌小牛红灯闪烁</span>
                <span>提醒您该充电啦</span>
            </span>
            <span v-else class="low_bettery">
                <span>{{boothTip[boothTipIndex].title}}</span>
                <span v-if="boothTip[boothTipIndex].subtitle">{{boothTip[boothTipIndex].subtitle}}</span>
            </span>
        </div> -->
        <!-- 无电弹窗start -->
        <!-- <Dialog :dialog_show="nopower_dialog_show" @sendData="sendData(0,arguments)">
            <template slot="title"></template>
            <template slot="tipText">牙刷无电，请充电。</template>
            <template slot="self">好&nbsp;&nbsp;&nbsp;&nbsp;的</template>
        </Dialog> -->
        <!-- 频繁刷牙弹窗start -->
        <!-- <Dialog
            :dialog_show="sitcom_dialog_show"
            :selfBtn="sitcom_selfBtn"
            @sendData="sendData(1,arguments)"
        >
            <template slot="title">萌小牛温馨提示：</template>
            <template slot="tipText">您已连续使用牙刷刷牙两次以上，频繁过度刷牙会对牙龈健康有影响哦。</template>
            <template slot="cancle">继续刷牙</template>
            <template slot="sure">结束刷牙</template>
        </Dialog> -->
        <!-- 刷牙时间不足弹窗 -->
        <!-- <Dialog
            :svg="svg"
            :dialog_show="shortage_dialog_show"
            :selfBtn="shortage_selfBtn"
            @sendData="sendData(2,arguments)"
        >
            <template slot="title">暂停倒计时</template>
            <template v-if="shortage31" slot="tipText">你的刷牙时间还没有达到45秒</template>
            <template v-else slot="tipText">刷牙时间不足30秒，数据不予保存</template>
            <template slot="subtipText">启动牙刷可继续刷牙</template>
            <template slot="cancle">继续刷牙</template>
            <template slot="sure">结束刷牙</template>
        </Dialog> -->
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
            // 牙齿的六个面
            sixFace: 4,
            // 中间区域 20s 时间
            second20: 30,
            // 中间总时间
            toal: "00:00",
            // music 图标的属性设置
            bindX: 200,
            bindY: 80,
            offset: {
                x: 0,
                y: 0,
            },
            diff: {
                x: 0,
                y: 0,
            },
            // 音乐开关
            open: false,
            // 弹窗无电传值设置
            nopower_dialog_show: false,
            // 弹窗频繁刷牙传值设置
            sitcom_dialog_show: false,
            sitcom_selfBtn: true,
            // 刷牙不足30秒弹窗
            shortage_dialog_show: false,
            shortage_selfBtn: true,
            svg: true,
            // 暂停刷牙大于30秒
            shortage31: false,
            //  电量是否低于20%
            percent20: false,
            // 正常电量显示的提示语
            boothTip: [
                { title: "小萌牛为您的牙齿保驾护航", subtitle: "" },
                { title: "保护牙齿，从小开始", subtitle: "" },
                { title: "小萌牛提醒您，记得早晚刷牙哦", subtitle: "" },
                { title: "小朋友，一定要认真刷牙哦", subtitle: "" },
                {
                    title: "如要退出请先暂停刷牙",
                    subtitle: "直接返回或后台运行会造成刷牙数据丢失",
                },
            ],
            // 正常电量显示的提示语下标
            boothTipIndex: 0,
            // 是否连续刷牙确认
            sureSitcom: false,

            // svg 的旋转角度
            rotate: null,
            startX: 5,
            startY: 47.5,
            endX: 0,
            endY: 0,
            // 动画下标
            index: 0,
            // 动画区域
            areas: [
                "左下区：外侧",
                // "左下区：咬合面",
                // "左下区：内侧",

                // "中下区：外侧",
                // "中下区：内侧",

                "右下区：外侧",
                // "右下区：咬合面",
                // "右下区：内侧",

                "右上区：外侧",
                // "右上区：咬合面",
                // "右上区：内侧",

                // "中上区：外侧",
                // "中上区：内侧",

                "左上区：外侧",
                // "左上区：咬合面",
                // "左上区：内侧",
            ],
        };
    },

    components: {},

    computed: {},
    watch: {
        nopower_dialog_show(n,o){
            this.init()
        },
        sitcom_dialog_show(n,o){
            this.init()
        },
        shortage_dialog_show(n,o){
            this.init()
        },
    },
    created() {
        let r = 42.5;
        let centerX = 47.5;
        let centerY = 47.5;
        let svgX = r * Math.cos((Math.PI / 180) * 60);
        let svgY = r * Math.sin((Math.PI / 180) * 60);
        this.rotate = [
            { x: centerX - r, y: centerY },
            // { x: centerX - svgX, y: centerY + svgY },
            { x: centerX + svgX, y: centerY + svgY },
            { x: centerX + r, y: centerY },
            // { x: centerX + svgX, y: centerY - svgY },
            { x: centerX - svgX, y: centerY - svgY },
        ];
        console.log(this.rotate)
        this.startX = this.rotate[0].x;
        this.startY = this.rotate[0].y;
        this.endX = this.rotate[1].x;
        this.endY = this.rotate[1].y;
        console.log(this.startX,this.startY,this.endX,this.endY)
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
            let flag =
                this.nopower_dialog_show ||
                this.sitcom_dialog_show ||
                this.shortage_dialog_show;
            if (flag) {
                clearInterval(this.areasetVal);
                clearInterval(this.tatolsetVal);
                clearInterval(this.animatesetVal);
                return true;
            }
            this.tatolTime();
            this.areaTime();
            this.showAnimate();
        },
        /**
         * @description: 鼠标按下事件
         * @param {Object} e 鼠标事件源
         * @return {*}
         */
        // movestart(e) {
        //     // 记录 ref=img 元素的起始位置
        //     this.offset.x = this.$refs.img.offsetLeft;
        //     this.offset.y = this.$refs.img.offsetTop;
        //     this.diff.x = e.changedTouches[0].clientX;
        //     this.diff.y = e.changedTouches[0].clientY;
        // },

        /**
         * @description: 刷牙时间 区域 20S 倒计时
         * @param {*}
         * @return {*}
         */
        areaTime() {
            let _ = this;
            let count = _.sixFace;
            let len = this.rotate.length;
            let time = _.second20;
            _.areasetVal = setInterval(() => {
                if (time == 30) {
                    _.startX = _.rotate[len - count]["x"];
                    _.startY = _.rotate[len - count]["y"];
                    _.endX =
                        _.rotate[len + 1 - count == 4 ? 0 : len + 1 - count][
                            "x"
                        ];
                    _.endY =
                        _.rotate[len + 1 - count == 4 ? 0 : len + 1 - count][
                            "y"
                        ];
                }
                time--;
                _.second20 = time;
                if (_.toal == "02:00") {
                    time = 0;
                    _.second20 = 0;
                    _.index = 0;
                    clearInterval(_.areasetVal);
                    return false;
                }
                if (time == 0) {
                    time = 30;
                    _.second20 = time;
                    _.boothTipIndex = _.rand();
                    count--;
                    _.sixFace = count;
                }
            }, 1000);
        },
        /**
         * @description: 刷牙时间总计
         * @param {*}
         * @return {*}
         */
        tatolTime() {
            let _ = this;
            let s0 = parseInt(_.toal.substr(4, 1)),
                s1 = parseInt(_.toal.substr(3, 1)),
                m1 = parseInt(_.toal.substr(1, 1));
            _.tatolsetVal = setInterval(() => {
                s0++;
                if (s0 > 9) {
                    s0 = 0;
                    s1 += 1;
                }
                if (s1 > 5) {
                    s1 = 0;
                    m1 += 1;
                }
                _.toal = `0${m1}:${s1}${s0}`;
                if (_.toal === "02:00") {
                    clearInterval(_.tatolsetVal);
                }
            }, 1000);
        },
        /**
         * @description: Dialog 弹窗下发事件
         * @param {Object} val 下发的值
         * @return {*}
         */
        // sendData(val) {
        //     let args = arguments;
        //     if (args[0] == 0) {
        //         // 无电弹窗
        //         this.nopower_dialog_show = false;
        //         return true;
        //     }
        //     if (args[0] == 1) {
        //         // 频繁刷牙
        //         this.sitcom_dialog_show = false;
        //         return true;
        //     }
        //     if (args[0] == 2) {
        //         // 刷牙时间不足
        //         this.shortage_dialog_show = false;
        //         return true;
        //     }
        // },
        /**
         * @description: 各个区域动画显示
         * @param {*}
         * @return {*}
         */
        showAnimate() {
            let _ = this;
            let count = _.second20;
            let area = _.sixFace;
            _.animatesetVal = setInterval(() => {
                let s = count.toString();
                // if (area == 5 || area == 2) {
                //     s == "10" || s == "20" ? _.index++ : "";
                // } else {
                //     s == "7" || s == "13" || s == "20" ? _.index++ : "";
                // }
                if (area) {
                    s == "30" ? _.index++ : "";
                } 
                count--;
                if (count == 0) {
                    count = 30;
                    area--;
                    if (area == 0) {
                        clearInterval(_.animatesetVal);
                    }
                }
            }, 1000);
        },
        /**
         * @description: 随机产生 0-4整数
         * @param {*}
         * @return {res} 0-4整数
         */
        rand() {
            return parseInt(Math.random() * 5);
        },
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
            .up_out {
                width: 121px;
                height: 39px;
                left: 51%;
                top: 10px;
                transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/center_up_out.png");
            }
            .up_in {
                width: 118px;
                height: 26px;
                left: 51%;
                top: 24px;
                transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/center_up_in.png");
            }
            .down_out {
                width: 121px;
                height: 39px;
                left: 51%;
                bottom: 10px;
                transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/center_down_out.png");
            }
            .down_in {
                width: 118px;
                height: 26px;
                left: 51%;
                bottom: 24px;
                transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/center_down_in.png");
            }
            .left_down_out {
                width: 54.5px;
                height: 148.25px;
                left: 12px;
                bottom: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_down_out.png");
            }
            .left_down_on {
                width: 47.25px;
                height: 145px;
                left: 24px;
                bottom: 46px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_down_on.png");
            }
            .left_down_in {
                width: 37px;
                height: 145.25px;
                left: 40px;
                bottom: 45px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_down_in.png");
            }
            .right_down_out {
                width: 54.5px;
                height: 148.25px;
                right: 8px;
                bottom: 42px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_down_out.png");
            }
            .right_down_on {
                width: 47.25px;
                height: 145px;
                right: 20px;
                bottom: 46px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_down_on.png");
            }
            .right_down_in {
                width: 37px;
                height: 145px;
                right: 36px;
                bottom: 45px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_down_in.png");
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
            .left_up_on {
                width: 47px;
                height: 145px;
                left: 24px;
                top: 46px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_up_on.png");
            }
            .left_up_in {
                width: 37px;
                height: 145.25px;
                left: 40px;
                top: 45px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_up_in.png");
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
            .right_up_on {
                width: 47px;
                height: 145px;
                right: 20px;
                top: 46px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_up_on.png");
            }
            .right_up_in {
                width: 37px;
                height: 145.25px;
                right: 36px;
                top: 45px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_up_in.png");
            }
            // 刷头
            .b_up_out {
                left: 43%;
                top: -17px;
                background-image: url("../../assets/image/cut_surface/b_up_out.png");
                animation-name: brushAnimate_center;
            }
            .b_up_in {
                left: 43%;
                top: 33px;
                animation-name: brushAnimate_center;
                background-image: url("../../assets/image/cut_surface/b_up_in.png");
            }
            .b_down_out {
                left: 43%;
                bottom: -17px;
                background-image: url("../../assets/image/cut_surface/b_down_out.png");
                animation-name: brushAnimate_center;
            }
            .b_down_in {
                left: 43%;
                bottom: 33px;
                background-image: url("../../assets/image/cut_surface/b_down_in.png");
                animation-name: brushAnimate_center;
            }
            .b_left_down_out {
                left: -16px;
                bottom: 28px;
                background-image: url("../../assets/image/cut_surface/b_left_down_out.png");
                animation-name: brushAnimate_down_out;
            }
            .b_left_down_on {
                left: 40px;
                bottom: 3px;
                background-image: url("../../assets/image/cut_surface/b_left_down_on.png");
                animation-name: brushAnimate_down_on;
            }
            .b_left_down_in {
                left: 56px;
                bottom: 51px;
                background-image: url("../../assets/image/cut_surface/b_left_down_in.png");
                animation-name: brushAnimate_down_in;
            }
            .b_right_down_out {
                right: -16px;
                bottom: 28px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_down_out.png");
                animation-name: brushAnimate_down_out;
            }
            .b_right_down_on {
                right: 40px;
                bottom: 3px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_down_on.png");
                animation-name: brushAnimate_down_on;
            }
            .b_right_down_in {
                right: 56px;
                bottom: 51px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_down_in.png");
                animation-name: brushAnimate_down_in;
            }
            .b_left_up_out {
                left: -16px;
                top: 28px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_left_up_out.png");
                animation-name: brushAnimate_up_out;
            }
            .b_left_up_on {
                left: 40px;
                top: 3px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_left_up_on.png");
                animation-name: brushAnimate_up_on;
            }
            .b_left_up_in {
                left: 56px;
                top: 51px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_left_up_in.png");
                animation-name: brushAnimate_up_in;
            }
            .b_right_up_out {
                right: -16px;
                top: 28px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_up_out.png");
                animation-name: brushAnimate_up_out;
            }
            .b_right_up_on {
                right: 40px;
                top: 3px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_up_on.png");
                animation-name: brushAnimate_up_on;
            }
            .b_right_up_in {
                width: 60px;
                height: 116px;
                right: 56px;
                top: 51px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/b_right_up_in.png");
                animation-name: brushAnimate_up_in;
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
// 牙齿正上下动画
@keyframes brushAnimate_center {
    0% {
        left: 43%;
    }
    25% {
        left: 39%;
    }
    50% {
        left: 43%;
    }
    75% {
        left: 47%;
    }
    100% {
        left: 43%;
    }
}
// 牙齿左右外动画
@keyframes brushAnimate_down_out {
    0% {
        bottom: 28px;
    }
    25% {
        bottom: 38px;
    }
    50% {
        bottom: 28px;
    }
    75% {
        bottom: 18px;
    }
    100% {
        bottom: 28px;
    }
}
// 牙齿左右正面动画
@keyframes brushAnimate_down_on {
    0% {
        bottom: 3px;
    }
    25% {
        bottom: 13px;
    }
    50% {
        bottom: 3px;
    }
    75% {
        bottom: -3px;
    }
    100% {
        bottom: 3px;
    }
}
// 牙齿左右内动画
@keyframes brushAnimate_down_in {
    0% {
        bottom: 51px;
    }
    25% {
        bottom: 55px;
    }
    50% {
        bottom: 51px;
    }
    75% {
        bottom: 41px;
    }
    100% {
        bottom: 51px;
    }
}

// 牙齿上左右内动画
@keyframes brushAnimate_up_out {
    0% {
        top: 28px;
    }
    25% {
        top: 38px;
    }
    50% {
        top: 28px;
    }
    75% {
        top: 18px;
    }
    100% {
        top: 28px;
    }
}
// 牙齿上左右正面动画
@keyframes brushAnimate_up_on {
    0% {
        top: 3px;
    }
    25% {
        top: 13px;
    }
    50% {
        top: 3px;
    }
    75% {
        top: -3px;
    }
    100% {
        top: 3px;
    }
}
// 牙齿上内动画
@keyframes brushAnimate_up_in {
    0% {
        top: 51px;
    }
    25% {
        top: 55px;
    }
    50% {
        top: 51px;
    }
    75% {
        top: 41px;
    }
    100% {
        top: 51px;
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
