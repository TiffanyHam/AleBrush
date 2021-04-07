<template>
   <div class="bleDialog" v-show="isAppear">
        <!-- 蒙版 -->
        <div class="mask animate__animated animate__fadeIn" key="1" @click="close" v-if="show" @touchmove.prevent>
        </div>
        <div class="dialog" v-show="show" key="2">
            <div class="dialogTitle">
                <slot name="title">{{$t('Hint.tipTitle2')}}</slot>
            </div>
            <div class="dialogContent">
                <p class="magBot">{{$t('Hint.tipText5')}}</p>
                <div>
                    <svg class="svg" width="84px" height="84px" viewBox="0 0 84 84">
                        <circle class="progress" cx="42" cy="42" r="40" stroke-width="2" :stroke="isBg" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-dasharray="251.2px" stroke-dashoffset="0px" />
                        <text class="text" x="42" y="-42" :fill="isBg">
                            <tspan font-size="20px">{{time}}</tspan>&nbsp;
                            <tspan class="tspan" font-size="12px">{{this.$t('Hint.seconds')}}</tspan>
                        </text>
                  </svg>
                </div>
                <slot v-if="isEnough">{{$t('Hint.tipText6')}} </slot> 
                <slot v-else>{{$t('Hint.tipText7')}}</slot>  <!-- 30s -->
                <br />
                <slot>{{$t('Hint.tipText8')}}</slot>
            </div>
            <div class="dialog_footer fb">
                <span class="btn" @click="close">
                    <slot name="sure btn_right">{{$t('Hint.quit')}}</slot>
                </span>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  name: 'DialogTime',
  data(){
      return{
         isAppear:true,
         show: true,
         time: 30,
         setl: null,
         isBg: window.isDark ? '#3F97E9' : '#007dff'
      }
  },
  props: {
    isEnough:{
      type: Boolean,
      required: true,
      default: true,  //30S
    },
    countDown: {
            type: String,
            required: false,
            default: 'svg',
        },
  },
   watch: {
        time(n, o) {
            this.time = n
        }
    },
    mounted() {
        this.$nextTick(() => {
            let _ = this;
            _.addkeyframe(30 * 2 * Math.PI)
            if (_.countDown === 'svg') {
                let svg = document.querySelector('.svg');
                _.setl = setInterval(() => {
                    _.time--;
                    if (_.time <= 0) {
                        _.time = 0;
                        clearInterval(_.setl);
                    }
                }, 1000);
            }
        })
    },
    beforeDestroy() {
        clearInterval(this.setl);
        this.setl = null;
    },
  methods:{
      close(){
           this.$router.push({ path: '/' })
      },
       /**
         * @description:  js 添加动画
         * @param {Number} pro 目标值
         * @return 
         */
        addkeyframe(pro) {
            // js创建@keyframes，
            const runkeyframes = ` @keyframes draw{
                                    0%{
                                        stroke-dashoffset: 0px;
                                    }
                                    100%{
                                        stroke-dashoffset: ${parseInt(pro)}px;
                                    }
                                }`
            // 创建style标签
            const style = document.createElement('style');
            // 设置style属性
            style.type = 'text/css';
            // 将 keyframes样式写入style内
            style.innerHTML = runkeyframes;
            // 将style样式存放到head标签
            document.getElementsByTagName('head')[0].appendChild(style);
        }
  }

}
</script>
<style lang="scss" scoped>
.bleDialog {
    .mask {
        background-color: rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
    }
    button {
        background: #f95644;
        border-radius: 32px;
        width: 180px;
        height: 50px;
        font-size: 18px;
        color: #ffffff;
    }
    .close {
        top: 0;
        right: 10px;
        position: absolute;
        display: block;
        width: 40px;
        height: 40px;
    }

    .dialog {
        border-radius: 15px;
        width: 328px;
        padding: 0px 24px;
        z-index: 999;
        position: absolute;
        left: 50%;
        bottom: 16px;
        margin-left: -164px;
        background-color: #fff;

        .dialogTitle {
            font-size: 20px;
            color: rgba(0, 0, 0, .9);
            // margin: 0 0 15px 0;
            height: 56px;
            line-height: 56px;
        }
        .options {
            width: 100%;
            .item_title {
                font-size: 16px;
                color: rgba(0, 0, 0, .9);
            }
            .item_round {
                width: 16px;
                height: 16px;
            }
            .bottomBorderNone {
                border-bottom: none;
            }
        }
        .dialogContent {
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, .9);
            text-align: center;
            .magBot{
                margin-bottom: 16px;
            }
            // letter-spacing: 1px;                   
            svg {
                transform: rotate(-90deg);
                .text {
                    transform: rotate(90deg);
                    text-anchor: middle;
                    /* 文本水平居中 */
                    dominant-baseline: middle;
                    .tspan {
                        margin: 0 0 0 8px;
                    }
                }
            }
            .progress {
                animation: draw 30s linear 1;
            }
                    
        }
        .dialog_footer {
            width: 100%;
            //  margin: 8px 0 0 0;
            color: #007DFF;
            font-size: 16px;
            justify-content: center;
            height: 56px;
            line-height: 56px;
           }
    }
    .fb {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .flexR {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
// 暗黑模式
.theme-dark {
    .dialog {
        background-color: #262626;
        .dialogTitle {
            color: rgba(255, 255, 255, .9);
        }
        .dialogContent {
            color: rgba(255, 255, 255, .86);
        }
        .dialog_footer {
                color: #3F97E9;
        }
    }
}
</style>