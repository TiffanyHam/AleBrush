
<template>
    <div class="brushing_other flexC">
        <!-- <div class="header"> -->
        <div class="header_inner">{{$t('brushing.header')}}</div>
        <!-- </div> -->
        <div class="subheader">{{$t('brushing.tipTextI30')}}</div>
        <div class="banner flex">
            <div class="aniB">
                <!-- <img src="../../assets/image/cut_surface/booth.png" width="60%" class="bg"> -->
                <img src="../../assets/image/cut_surface/left_down_out.png" width="60%" class="bg opacity38" 
                :class="index== 1 ? 'posiImg animate opcity_animate opacity38':'posiImg opacity01'">

                <img src="../../assets/image/cut_surface/right_down_out.png" width="60%" class="bg opacity38"
                :class="{'posiImg animate opcity_animate opacity38':index == 2,'posiImg opacity01':index == 0 || index == 3 || index == 4 }">

                <img src="../../assets/image/cut_surface/right_up_out.png" width="60%" class="bg opacity38"
                :class="{'posiImg animate opcity_animate opacity38':index == 3,'posiImg opacity01':index == 0 || index == 4 }">

                <span v-if="index == 0 || index == 4">
                    <img src="../../assets/image/cut_surface/left_up_out.png" width="60%" class="bg opacity38"
                :class="{'posiImg animate opcity_animate opacity38':index == 4,'posiImg opacity01':index == 0 || index == 1 ||index == 2 }">
                </span>
                <span v-else>
                     <img src="../../assets/image/cut_surface/left_up_out.png" width="60%" class="bg opacity38">
                </span>

                <div class="currentA currrent_bottom">
                  <span v-if="index == 1"><img src="../../assets/image/icon/light/fingle.png" width="50%" class="fingle1 fingle_left">{{ $t('BrushTeethPosition.current')}}</span>
                  <span v-if="index == 2"><img src="../../assets/image/icon/light/fingle.png" width="50%" class="fingle1 fingle_right">{{ $t('BrushTeethPosition.current')}}</span>
                </div>
                <div class="currentA currrent_top">
                 <span v-if="index == 3"><img src="../../assets/image/icon/light/fingle.png" width="50%" class="fingle1 fingle_right1">{{ $t('BrushTeethPosition.current')}}</span>
                 <span v-if="index == 4"><img src="../../assets/image/icon/light/fingle.png" width="50%" class="fingle1 fingle_left1">{{ $t('BrushTeethPosition.current')}}</span>
                </div>
            </div>
            <div class="centerImg posiImg position_center">
                <div v-for="(item,index) in posArr" :key="index" :class="['comm',item.class]">{{ item.name }}</div>
              
                <!-- <div v-for="(item,index) in areaArr" :key="index">
                    <div v-if="index == item.index">
                         <div v-if="index == item.index" :class="['posiImg animate opcity_animate',item.class]"></div>
                         <div v-if="index == item.index" class="currentA currrent_bottom"><div :class="['fingle',item.classN]"></div><div>当前区域</div></div>
                    </div>
                </div> -->
            
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
                            stroke="rgba(255,255,255,0.38)"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                        />
                        <path
                            id="path1"
                            stroke-width="10"
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
        <div class="stopB">{{$t('brushing.charge')}}</div>
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
            setAreas:'2',
            setOriginNum:null,
            areaArr:[
                {
                    index:1,
                    class:'left_down_out',
                    classN:'fingle_left'
                },
                {
                    index:2,
                    class:'right_down_out',
                    classN:'fingle_right'
                },
                {
                    index:3,
                    class:'right_up_out',
                    classN:'fingle_right1'
                },
                {
                    index:4,
                    class:'left_up_out',
                    classN:'fingle_left1'
                },
            ],
            posArr:[
                {
                    class:'top',
                    name:this.$t('BrushTeethPosition.top')
                },
                {
                    class:'bottom',
                    name:this.$t('BrushTeethPosition.bottom')
                },
                {
                    class:'left',
                    name:this.$t('BrushTeethPosition.left')
                },
                {
                    class:'right',
                    name:this.$t('BrushTeethPosition.right')
                },
            ]
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
       this.clearInter()
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
                        this.setTotalTime = '00:30',
                        this.setOriginNum = 7
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
                            if(that.setAreas == 2 && that.index == 3){
                                that.seconds = that.setOriginNum + 2
                            }else{
                                that.seconds = that.setOriginNum
                            }
                             count--;
                             that.sixFace = count;
                        }
                        if (that.total == that.setTotalTime) {
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
                      console.log(that.index)
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
    background-color: #3f97e9;
    position: relative;
    .aniB{
      width: 100%;
      position: relative;
      .bg{
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
      }
       .opacity38{
        opacity: .38;
       }
       .opacity01{
        opacity:1;
       }
    }
    .stopB{
        color: #fff;
        text-align: center;
     //   border-radius: 20px;
      //  background: #1a1a1a;
      //  opacity: .38;
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
         .currentA{
                position: absolute;
                color: rgba(255, 255, 255, 0.9);;
                transform: translate(-50%,-50%);
            }
            .currrent_top{
                bottom: 95px;
                left: 50%;
            }
            .currrent_bottom{
                left: 50%;
                top: 95px;
            }
           
         .fingle1{
                position: absolute;
                transform: translate(-50%,-50%);
            }
        .fingle_left{
            top: 4px;
            right: 36px;
            }
        .fingle_right{
            top: -4px;
            left: 50px;
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    
        .fingle_right1{
            top: -4px;
            left:50px;
             -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        .fingle_left1{
            top: 4px;
            right: 38px;
            
        }
        .centerImg {
            width: 288px;
            height: 451.14px;
           // background-image: url("../../assets/image/cut_surface/booth.png");
            .left {
                left: 18%;
                top: 50%;
            }
            .comm{
                position: absolute;
                transform: translate(-50%, -50%);
                color: rgba(255, 255, 255, 0.9);
                font-size: 14px;
            }
         .right {
                right: 13%;
                top: 50%;
            }
            .top {
                left: 50%;
                top: 17%;
            }
            .bottom {
                bottom: 15%;
                left: 50%;
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
                width: 100%;
                height: 100%;
                left: 0px;
                bottom: 0px;
                //transform: translate(-50%, 0);
              //  background-image: url("../../assets/image/cut_surface/left_down_out.png");
            }

            .right_down_out {
                width: 100%;
                height: 100%;
                right:0px;
                bottom:0px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/right_down_out.png");
            }
            // 左上
            .left_up_out {
                width: 100%;
                height: 100%;
                left: 0px;
                top: 0px;
                //transform: translate(-50%, 0);
                background-image: url("../../assets/image/cut_surface/left_up_out.png");
            }
            // 右上
            .right_up_out {
                width: 100%;
                height: 100%;
                right: 0px;
                top: 0px;
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
