<!--
 * @Author: your name
 * @Date: 2021-03-22 17:06:40
 * @LastEditTime: 2021-03-25 18:43:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\index.vue
-->
<!--  -->
<template>
  <div class="page bg_F7F7F7">
  <div class="index_main">
    <div class="content"  :class="dialogTip == true ? 'marginTop':''">
    <!-- 产品图 -->
    <div class="banner">
        <div class="productI"></div>
    </div>
    <!-- logo -->
    <div :class="$i18n.locale === 'zh' ? 'logo':'logo_en'"></div>
    <!-- 连接状态 -->
    <div class="connectState flexR" v-show="isflage">
        <div>{{ $t('index.noConnect') }}</div>
        <div class="c_007DFF again">{{ $t('index.again') }}</div>
    </div>
    <div class="connectState flexR" v-show="!isflage && !isConnect">
        <div>{{ $t('index.connect') }}</div>
        <div><img src="@/assets/image/icon/light/loading.png" class="loading_icon"></div>
    </div>
    <div class="connectState flexR" v-show="!isflage && isConnect">
        <div>{{ $t('index.connected') }}</div>
        <div>
            <!-- 电池 -->
            <div class="cell1" v-if="battery == 0"></div>
            <div class="cell2" v-if="battery == 1"></div>
            <div class="cell3" v-if="battery == 2"></div>
            <div class="cell4" v-if="battery == 3"></div>
            <div class="cell5" v-if="battery == 4"></div>
            <div class="cell6" v-if="battery == 5"></div>
        </div>
    </div>
     <!-- one -->
    <div class="hi-card bg_card">
        <div class="item" :class="{line: index !== 0}" v-for="(item, index) in cardData" :key="index">
            <div class="top">
                <div class="num c_90">{{item.num}}</div>
                <div class="unit c_60" v-if="item.unit">{{item.unit}}</div>
            </div>
            <div class="name c_60">{{item.name}}</div>
        </div>
    </div>
    <div :class="isflage == isConnect ? 'opacityVal' : ''">
     <!-- second -->
     <div class="flexR contentList">
         <!-- 刷牙模式 -->
         <div class="itemPlay flexR rightM"  style="position: relative;"  @click="brushModeClick">
            <div>
                <span>{{ $t('index.brushLen') }}</span><br />
                <div class="text_color" v-if="isflage !== isConnect">
                    <span>{{modeDisplay}}</span>
                </div>
                <HiCardShift class="mt8 cardP" :shiftList="patterns" v-show="isMode" @eventClick="modeClick"></HiCardShift>
            </div>
            <div class="icon_width">
                <div :class="isflage == isConnect ? 'modern_gray patternCommon':'modern patternCommon'"></div>
            </div>
        </div>
        <!-- 刷牙时长 -->
        <div class="itemPlay flexR" style="position: relative;" @click="brushTimeClick">
          <div>
              <span>{{ $t('index.Log.brushLen') }}</span>
              <div class="text_color" v-if="isflage !== isConnect">
                  <span>{{timeLen}}</span>
              </div>
          </div>
          <div class="icon_width">
              <div :class="isflage == isConnect ? 'time_len_gray patternCommon' : 'time_len patternCommon'"></div>
          </div>
          <HiCardShift class="mt8 cardP" :shiftList="shiftTest" v-show="isTime" @eventClick="timeClick"></HiCardShift>
        </div>

     </div>
     <!-- third -->
     <div class="flexR contentList">
         <!-- 起始位置 -->
         <div class="itemPlay flexR rightM" @click="toPosition(initPosition)">
            <div>
                <span>{{ $t('index.inPosition') }}</span><br />
                <div class="text_color" v-if="isflage !== isConnect">
                    <span>{{initPosition}}</span>
                </div>
            </div>
            <div class="icon_width">
                <div :class="isflage == isConnect ? 'position_gray patternCommon' : 'position patternCommon'"></div>
            </div>
        </div>
        <!-- 刷牙时长 -->
        <div class="itemPlay flexR">
          <div>
              <span @click="setting">{{ $t('index.MoreSet') }}</span>
          </div>
          <div class="icon_width">
              <div class="set patternCommon"></div>
          </div>
        </div>

     </div>
    </div>

     <!-- 刷牙记录 -->
      <div class="moreLog">
        <span class="itemPlay1 logTab flexR">
            <span>{{ $t('index.brushLog') }}</span>
            <div class="fontStyle flexR">
                <span>{{ $t('index.more') }}</span>
                <div class="log_right"></div>
            </div>
        </span>
        <div class="logHistory">
          <div class="log_arr" v-for="(item, index) in logArr" :key="index">
            <p>{{item.days}}</p>
            <div class="hi-timeitem" v-for="(itemA, index) in item.historyArr" :key="index">
              <div class="hi-timeitem">
                <div class="grade">{{itemA.score}}</div>
                <div class="timeitemMain">
                  <span class="size16 c_90">{{itemA.brushLens}}</span>
                  <span class="size14 c_60">{{itemA.time}}</span>
                </div>
              </div>
              <div>{{itemA.seconds}}</div>
            </div>

              
          </div>

        </div>
      
      </div>
    </div>
    </div>
    <!-- 充电提示 -->
      <msg :dialogTip="dialogTip" :syncMessage="false"></msg>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
       isflage:true,
       isConnect:true,
       battery:0,
       dialogTip: false,
      // isPattern:0,
       brushTime:'00',
       isSeat:'1',
       shiftTest: [
          { name: '2分钟', selected: false },
          { name: '2.5分钟', selected: false },
          { name: '3分钟', selected: true }
        ],
        patterns: [
          { name: '清洁', selected: false },
          { name: '舒适', selected: false },
          { name: '按摩', selected: true },
          { name: '强劲', selected: false }
        ],
       isTime:false,
       isMode:false,
       timeLen:'2分钟',
       modeDisplay:'清洁',
       cardData: [
          {
              name: '上次刷牙评分',
              unit: '岁',
              num: '21',
          },
          {
              name: '刷牙剩余',
              unit: '天',
              num: '52',
          }
            ],
        logArr:[
           {
              days: '今天 星期三',
              historyArr:[
                {
                score:'99',
                brushLens: '刷牙时长',
                time: '08:00:76',
                seconds:'1分55秒'
                },
                {
                score:'88',
                brushLens: '刷牙时长',
                time: '08:00:76',
                seconds:'1分55秒'
                }
              ]
          },
          {
              days: '今天 星期二',
              historyArr:[
                {
                score:'99',
                brushLens: '刷牙时长',
                time: '08:00:76',
                seconds:'1分55秒'
                },
                {
                score:'88',
                brushLens: '刷牙时长',
                time: '08:00:76',
                seconds:'1分55秒'
                }
              ]
          },
        ]
    };
  },
  mounted() {
    console.log(this.initPosition)
   // this.dialogTip = true  //电量低
    setTimeout(() => { //连接中
       this.isflage = false
       this.isConnect = false
            }, 500);
    setTimeout(() => { //连接超时
        this.isflage = true
        this.isConnect = true
        //this.$dialog.show()
    }, 1 * 1000);
    setTimeout(() => { //已连接
        this.isflage = false
        this.isConnect = true
    }, 2 * 1000);

  //  if(this.bleConnected){   //true
  //     console.log(3)
  //  }
  },
  computed: {
      ...mapState(['bleConnected','initPosition']),
  },
  watch:{
    bleConnected(status){
      console.log('蓝牙状态：',status)
    }
 
  },
  methods: {
     brushTimeClick(){
       this.isTime = !this.isTime
     },
      timeClick(val){
       this.timeLen = val.name
     },
     brushModeClick(){
       this.isMode = !this.isMode
     },
     modeClick(val){
      this.modeDisplay = val.name
     },
    
     // 设置---跳转
    setting() {
        this.$router.push("Setting");
    },
    remain(){
      this.$router.push("RemainTime");
    },
    toPosition(val){
      this.$router.push({name: 'BrushPosition', params:{val} });
    }
  }
};
</script>

<style scoped lang="scss">
.page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .mt8 {
        margin-top:0.22rem;
    }
   .cardP{
        position: absolute;
        bottom: 73px;
        left: 0%;
    }
    .index_main{
      width: 100%;
      flex: 1;
       // overflow: hidden;
        .content{
          flex: 1;
          overflow-y: auto;
          padding: 0 16px;
        }
        .marginTop {
            margin-top: 48px;
        }
        .itemPlay {
          flex: 1;
          height: 64px;
          background-color: #fff;
          padding: 0 24px;
          border-radius: 8px;
          font-size: 16px;
          color: rgba(0, 0, 0, .9);
        }
        .itemPlay1 {
          flex: 1;
          height: 64px;
          padding: 0 24px;
          border-radius: 8px;
          font-size: 16px;
          color: rgba(0, 0, 0, .9);
        }
    .moreLog {
        //background-color: #fff;
        width: 100%;
        height: 230px;
        border-radius: 8px;
        flex: 1;
        margin-bottom: 8px;
        .logHistory{
           padding: 0 24px;
           line-height: 1.77;
           font-size: 0.388rem;
           .log_arr{
              margin-bottom: 15px;
           }
        }
        .hi-timeitem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.77rem;
            border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
            .grade {
              width: 40px;
              height: 40px;
              text-align: center;
              line-height: 40px;
              border-radius: 50%;
              margin-right: 19px;
              font-size: 16px;
              color: #fff;
              background: red;
              }
            .timeitemMain {
                display: flex;
                flex-direction: column;
                justify-content: center;
                line-height: 1.33;
                .size16 {
                    font-size: 0.44rem;
                    margin-bottom: 0.055rem;
                }
                .size14 {
                    font-size: 0.388rem;
                }
            }
         }
       .logTab {height: 48px;}
       .fontStyle {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
                  }
        .log_right {
            width: 6px;
            height: 10px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 0 0 1px 4px;
            opacity: 0.38;
            }
              }
    .flexR{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .banner{
      padding: 80px 0 0 0;
      .productI {
        width: 252px;
        height: 252px;
        background-image: url("../../assets/image/product/product.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin:0 auto;
       }
    }
    .cell1,
    .cell2,
    .cell3,
    .cell4,
    .cell5,
    .cell6{
        width: 24px;
        height: 24px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 0.22222222rem
    }
    .loading_icon{
       width: 40px;
       height: 40px;
      -webkit-animation:load 1.5s linear infinite;
      animation: load 1.5s linear infinite;
    }
     /*Chorme,Safari必须加上*/
    @-webkit-keyframes load{
    to{-webkit-transform: rotate(0deg);}
    from{-webkit-transform: rotate(360deg);}
    }
    @keyframes load{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
    }
     .logo,.logo_en {
        width: 70px;
        height: 18px;
        background-image: url("../../assets/image/product/logo.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin:0 auto;
        margin-bottom: 10px;
    }
    .opacityVal{
        opacity: 0.38;
      } 
    .connectState{
        background-color: #fff;
        padding: 0 24px;
        border-radius: 8px;
        height: 88px;
        font-size: 18px;
        margin: 0 0 8px 0;
        color:rgba(0, 0, 0, .9);
        .again{
            font-size: 0.44444444rem;
        }
        .text_margin1{
          font-size: 24px;
        }
        .text_margin {
            color: rgba(0, 0, 0, 0.6);;
            margin-top: 8px;
            font-size: 12px;
        }
    }
    .contentList{
       margin: 0 0 8px 0;
       
        .text_color {
            margin-top: 8px;
            font-size: 0.33rem;
            color: #007dff;
        }
        .icon_width {
            width: 24px;
        }
      .rightM {
          margin-right: 8px;
      }
      .patternCommon {
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
      }
    }
    .hi-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.44rem;
    margin: 0 0 8px 0;
    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 0.22rem;
        line-height: 1.33;
        .top {
            display: flex;
            align-items: baseline;
            .num {
                font-size: 0.66rem;
            }
            .unit {
                margin-left: 0.055rem;
                font-size: 0.33rem;
            }
        }
        .name {
            margin-top: 0.055rem;
            font-size: 0.33rem;
        }
    }
}
.line::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 40/36rem;
    width: 1px;
    border-left: 0.25/36rem solid rgba(0, 0, 0, .2);
}
 }
}
</style>