
<template>
    <div class="brushing_other flexC">
        <!-- <div class="header"> -->
        <div class="header_inner">{{$t('brushing.header')}}</div>
        <!-- </div> -->
        <div class="subheader">{{$t('brushing.tipTextI30')}}</div>
        <div class="banner flex">
            <div class="centerImg posiImg position_center">
                <div class="top font16">{{$t('brushing.top')}}</div>
                <div class="bottom font16">{{$t('brushing.bottom')}}</div>
                <div class="position_center left font16">{{$t('brushing.left')}}</div>
                <div class="right font16">{{$t('brushing.right')}}</div>
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
                            stroke="#519cce"
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
                        >{{seconds}}</text>
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
                        >{{total}}</text>
                    </svg>
                </div>
            </div>
        </div>
        <div class="stopB">{{$t('brushing.stop')}}</div>
        <div class="brushing">
          <div>{{$t('brushing.charge')}}</div>
          <div style="margin-top:4px">{{$t('brushing.tipText')}}</div>
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
            timer:null,
            timer1:null,
            timer2:null,
            // 牙齿的4个面
            sixFace: 4,
            // 中间区域 30s 时间
            seconds: null,
            isEnough:true,  //30S
            isShow:false,
            // 中间总时间
            total: "00:00",
            svg: true,
            // svg 的旋转角度
            rotate: null,
            startX: 5,
            startY: 47.5,
            endX: 0,
            endY: 0,
            // 动画下标
            index: null,
            brushOn:1,//1开；0关
            setTotalTime:'',
            setAreas:'3',
            setOriginNum:null
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

    mounted() {
        this.globalT(this.setAreas)
        this.init();
    },

    methods: {
        /**
         * @description: 时间设定
         * @param {*} val
         * @return {*}
         */        
        globalT(val){
                switch(val)
                {
                    case '1':
                        this.setTotalTime = '02:00',
                        this.setOriginNum = 30
                        break;
                    case '2':
                        this.setTotalTime = '02:30',
                        this.setOriginNum = 37
                        break;
                    case '3':
                        this.setTotalTime = '03:00',
                        this.setOriginNum = 45
                        break;
                }
        },
        /**
         * @description: 清除定时器
         * @param {*}
         * @return {*}
         */        
        clearInter(){
            clearInterval(this.timer)
            clearInterval(this.timer1)
            clearInterval(this.timer2)
        },
        /**
         * @description: 正常进入页面
         * @param {*}
         * @return {*}
         */
        init() {
            if (this.brushOn == 0) { //关
               this.clearInter()
                clearInterval(this.timer)
                clearInterval(this.timer1)
                clearInterval(this.timer2)
                return true;
            }else{
                // setTimeout(() => {
                //     this.brushOn = 0
                //  },3000)
                
                 this.totalTime(true);
                 this.countDown();
                 this.showAnimate();
            }
        },
        
        /**
         * @description: 时间倒计时
         * @param {*}
         * @return {*}
         */        
        countDown(){
            let that = this
            const TIME_COUNT = that.setOriginNum;
             if (!that.timer) {
                that.seconds = TIME_COUNT;
                 let count =that.sixFace;
                 let len = that.rotate.length;
                that.timer = setInterval(() => {
                     if (that.seconds > 0 && that.seconds <= TIME_COUNT + 2) {
                         that.startX = that.rotate[len - count]["x"];
                         that.startY = that.rotate[len - count]["y"];
                         that.endX = that.rotate[len + 1 - count == 4 ? 0 : len + 1 - count]["x"];
                         that.endY = that.rotate[len + 1 - count == 4 ? 0 : len + 1 - count]["y"];
                         that.seconds--;
                        if(that.seconds == 0){
                            if(that.setAreas == 1 && that.index == 3){
                                that.seconds = that.setOriginNum + 2
                            }else{
                                that.seconds = that.setOriginNum
                            }
                             count--;
                             that.sixFace = count;
                        }
                        if (that.total === that.setTotalTime) {
                            that.seconds = 0;
                            that.index = 0;
                            clearInterval(that.timer);
                            return false;
                            }
                      } else {
                          clearInterval(that.timer);
                          that.timer = null;
                              }
                      }, 1000)
                 }
             },
        /**
         * @description: 刷牙总时间
         * @param {*}
         * @return {*}
         */        
        totalTime (bolean) {
            let that = this
            let  minute, second
            minute = second = 0
             if (bolean === true) {
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
                        that.total = '0'+ minute + ':'+ '0' + second
                    }else{
                        that.total = '0'+ minute + ':' + second
                    }
                    //不超过30s弹窗
                    // let _minus = that.total.substr(1,1) 
                    // let _second = that.total.substr(3,2)
                    // this.isShow = true
                    //  if(_minus < 1 && _second < 30){
                    //     this.isEnough = false
                    // }else{
                    //     this.isEnough = true
                    // }
                    if(that.total == that.setTotalTime){
                        clearInterval(that.timer1)
                    }
                    }, 1000)
                 }
             },
        /**
         * @description: 动画
         * @param {*}
         * @return {*}
         */        
        showAnimate(){
            let that = this
            let count = this.seconds;
            let area = this.sixFace;
            that.timer2 = setInterval(() => {
                if (area) {
                      count == that.setOriginNum ? that.index++ : "";
                      count--;
                    if(count == 0){
                        count = that.setOriginNum
                        area--;
                    }
                }
                if (area == 0) {
                     clearInterval(that.timer2);
                }
            },1000)
        },
        /**
         * @description: 重置
         * @param {*}
         * @return {*}
         */        
        Reset()
        {
            clearInterval(this.totalTime(false))
          //  minute=second = 0
            this.total = '00:00'
        }
    }
};
</script>

<style lang='scss' scoped>
.brushing_other {
    width: 100%;
    height: 100%;
    background-color: #62bffc;
    position: relative;
    .stopB{
        color: #fff;
        text-align: center;
        border-radius: 20px;
        background: #519cce;
        width: 160px;
        height: 36px;
        line-height: 36px;
        margin: 0 auto;
        font-size: 12px;
    }
    .brushing{
        color: #fff;
      //  height: 40px;
       // line-height: 20px;
        font-size: 12px;
        text-align: center;
        margin-bottom: 38px;
        margin-top: 14px;
    }
    // .header {
    //     height: 80px;
    //     position: relative;
        .header_inner {
            width: 100%;
            color: #fff;
            font-size: 12px;
            text-align: center;
            padding-top: 38px;
        }
    //}
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
        }
        .low_backC {
            color: #e64548;
            background-color: #372222;
        }
    }
}
</style>
