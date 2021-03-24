<!--
 * @Author: your name
 * @Date: 2021-03-22 17:06:40
 * @LastEditTime: 2021-03-24 16:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\index.vue
-->
<!--  -->
<template>
  <div class="page bg_F7F7F7">
  <div class="index_main">
    <div class="content">
    <!-- 产品图 -->
    <div class="banner">
        <div class="productI"></div>
    </div>
    <!-- logo -->
    <div :class="$i18n.locale === 'zh' ? 'logo':'logo_en'"></div>
    <!-- 连接状态 -->
    <div class="connectState flexR" v-show="!isflage">
        <div>{{ $t('index.noConnect') }}</div>
        <div>{{ $t('index.again') }}</div>
    </div>
    <div class="connectState flexR" v-show="isflage">
        <div>{{ $t('index.connect') }}</div>
        <div><img src="@/assets/image/icon/light/loading.png" class="loading_icon"></div>
    </div>
    <div class="connectState flexR" v-show="!isflage">
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
     <div class="connectState flexR" style="text-align:center">
       <!-- 上次刷牙评分 -->
        <div>
          <span>21岁</span>
          <div class="text_margin">
              <span>上次刷牙评分</span>
          </div>
        </div>
         <!-- 刷牙剩余 -->
        <div>
          <span>52天</span>
          <div class="text_margin">
              <span>刷牙剩余</span>
          </div>
        </div>
    </div>
     <!-- second -->
     <div class="flexR contentList">
         <!-- 刷牙模式 -->
         <div class="itemPlay flexR rightM">
            <div @click="remain">
                <span>{{ $t('index.brushLen') }}</span><br />
                <div class="text_color">
                    <span v-if="isPattern == '1'">{{ $t('index.cleaning')}}</span>
                    <span v-if="isPattern == '0'">{{ $t('index.cleaning')}}</span>
                </div>
            </div>
            <div class="icon_width">
                <div class="pattern patternCommon"></div>
            </div>
        </div>
        <!-- 刷牙时长 -->
        <div class="itemPlay flexR" style="position: relative;" @click="brushTimeClick">
          <div>
              <span>{{ $t('index.Log.brushLen') }}</span>
              <div class="text_color">
                  <span v-if="brushTime == '00'">{{timeLen}}</span>
                  <span v-if="brushTime == '01'">{{timeLen}}</span>
              </div>
          </div>
          <div class="icon_width">
              <div class="time patternCommon"></div>
          </div>
          <HiCardShift class="mt8 cardP" :shiftList="shiftTest" v-show="isTime" @eventClick="timeClick"></HiCardShift>
        </div>

     </div>
     <!-- third -->
     <div class="flexR contentList">
         <!-- 起始位置 -->
         <div class="itemPlay flexR rightM">
            <div>
                <span>{{ $t('index.inPosition') }}</span><br />
                <div class="text_color">
                    <span v-if="isSeat == '1'">{{ $t('index.leftD')}}</span>
                    <span v-if="isSeat == '0'">{{ $t('index.leftD')}}</span>
                </div>
            </div>
            <div class="icon_width">
                <div class="pattern patternCommon"></div>
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

     <!-- 刷牙记录 -->
      <div class="moreLog">
        <span class="itemPlay logTab flexR">
            <span>{{ $t('index.brushLog') }}</span>
            <div class="fontStyle flexR">
                <span>{{ $t('index.more') }}</span>
                <div class="log_right"></div>
            </div>
        </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
       isflage:true,
       battery:0,
       isPattern:0,
       brushTime:'00',
       isSeat:'1',
       shiftTest: [
          { name: '2分钟', selected: false },
          { name: '2.5分钟', selected: false },
          { name: '3分钟', selected: true }
        ],
       isTime:false,
       timeLen:'2分钟'
    };
  },
  mounted() {
    this.$dialog.show()
   if(this.bleConnected){   //true
      console.log(3)
   }
  },
  computed: {
      ...mapState(['bleConnected']),
  },
  watch:{
    bleConnected(status){
      console.log('蓝牙状态：',status)
    }
 
  },
  methods: {
     brushTimeClick(val){
       this.isTime = !this.isTime
     },
     timeClick(val){
       this.timeLen = val.name
     },
     // 设置---跳转
    setting() {
        this.$router.push("Setting");
    },
    remain(){
      this.$router.push("RemainTime");
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
        .itemPlay {
          flex: 1;
          height: 64px;
          background-color: #fff;
          padding: 0 24px;
          border-radius: 8px;
          font-size: 16px;
          color: rgba(0, 0, 0, .9);
        }
    .moreLog {
        background-color: #fff;
        width: 100%;
        height: 230px;
        border-radius: 8px;
        flex: 1;
        margin-bottom: 8px;
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
    .connectState{
        background-color: #fff;
        padding: 0 24px;
        border-radius: 8px;
        height: 88px;
        font-size: 18px;
        margin: 0 0 8px 0;
        color:rgba(0, 0, 0, .9);
        .text_margin {
            margin-top: 8px;
            font-size: 0.33rem;
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
 }
}
</style>