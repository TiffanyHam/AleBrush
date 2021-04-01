<!--
 * @Author: your name
 * @Date: 2021-03-25 15:38:13
 * @LastEditTime: 2021-03-30 09:38:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\BrushPosition\BrushPosition.vue
-->
<template>
    <!-- <div class="positionBg" :style="{backgroundImage:'url('+ bgImg +')'}"> -->
        <!-- <div class="header" @click="headerClick"></div>
        <div class="top_left" @click="changeClick('0')"></div>
        <div class="top_right" @click="changeClick('1')"></div>
        <div class="bottom_left" @click="changeClick('2')"></div>
        <div class="bottom_right" @click="changeClick('3')"></div> -->
         <!-- 头部start -->
        <!-- <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
            <span slot="headerTitle">{{$t('position.header')}}</span>
        </Header> -->
    <div class="wrapper">
    <!-- 头部start -->
      <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
          <span slot="headerTitle">{{$t('BrushTeethPosition.header')}}</span>
      </Header>
      <div class="content">
           <div class="selec">请选择起始位置</div>
           <div class="centerImg posiImg position_center">
               <div v-for="(item, index) in areaArr" :key="index"  class="posiImg opacity38" :class="item.classN">
                   <img :src="item.src"  @click="selectArea(item.index)" />
               </div>
               <!-- <div class="right_down1 posiImg opacity38"><img src="../../assets/image/cut_surface/right_down1.png" alt=""></div>
               <div class="right_up1 posiImg opacity38"><img src="../../assets/image/cut_surface/right_up1.png" alt=""></div>
               <div class="left_up1 posiImg opacity38"><img src="../../assets/image/cut_surface/left_up1.png" alt=""></div>
               <div class="left_down1 posiImg opacity38"><img src="../../assets/image/cut_surface/left_down1.png" alt=""></div> -->
           </div>
           <div class="centerImg1 posiImg position_center"></div> <!-- 旋转方向 -->
           <div class="centerImg2 posiImg position_center"></div>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from "vuex";

export default {
    data(){
        return{
          positionName:'',
          bgImg: '',
          selfB: true,
          backC: window.isDark ? '#3f97e9' : '#3f97e9',
          header_rightIcon: false,
          areaArr:[
          {
              index:0,
              classN:'right_down1',
              src: require('../../assets/image/cut_surface/right_down1.png') 
          },
          {
              index:1,
              classN:'right_up1',
              src: require('../../assets/image/cut_surface/right_up1.png') 
          },
          {
              index:2,
              classN:'left_up1',
              src: require('../../assets/image/cut_surface/left_up1.png') 
          },
          {
              index:3,
              classN:'left_down1',
              src: require('../../assets/image/cut_surface/left_down1.png') 
          },
          ]
        }
    },
    computed: {
      ...mapState(['initPosition']),
     },
    watch:{
        initPosition(val){
          console.log('蓝牙状态：',val)
        }
 
    },
    mounted(){
        this.changeClick(this.initPosition)
    },
    methods:{
        selectArea(val){
            debugger
        },
         ...mapActions({
           call_update_initPosition: 'call_update_initPosition'
        }),
        headerClick(){
            this.$router.push("/");
        },
        changeClick(val){
            switch(val)
            {
                case '0':
                    this.positionName = '0',
                    this.bgImg = require("../../assets/image/product/light/top_left.png")  //左上区
                    break;
                case '1':
                     this.positionName = '1',
                     this.bgImg = require('../../assets/image/product/light/top_right.png')  //右上区
                    break;
                case '2':
                     this.positionName = '2',
                     this.bgImg = require('../../assets/image/product/light/bottom_left.png')  //左下区
                    break;
                case '3':
                     this.positionName = '3',
                     this.bgImg = require('../../assets/image/product/light/bottom_right.png')  //右下区
                    break;
            }
            this.call_update_initPosition(this.positionName)
        }

    }
}
</script>
<style scoped lang="scss">
.wrapper{
    height: 100%;
    .content{
       background:#3f97e9;
       position: relative;
       height: 90%;
       .selec{
           text-align: center;
           color: #fff;
           font-size: 14px;
       }
       .centerImg {
            width: 232.57px;
            height: 403.14px;
            background-image: url("../../assets/image/cut_surface/booth.png");
       }
       .centerImg1{
            background-image: url("../../assets/image/cut_surface/circle1.png");
            width: 122.5px;
            height: 275.25px;
       }
       .centerImg2{
            background-image: url("../../assets/image/cut_surface/right_down.png");
            width: 80px;
            height: 80px;
       }
       .opacity38{
        opacity: .38;
       }
       .opacity01{
        opacity:1;
       }
       .right_down1 img{  //右下
            width: 50%;
            left: 117px;
            position: relative;
            bottom: -210px;
       }
       .right_up1 img{
            width: 50%;
            left: 117px;
            position: relative;
            top: 0px;
       }
       .left_up1 img{
            width: 50%;
            right: 0px;
            position: relative;
            top: 0px;
       }
       .left_down1 img{
            width: 50%;
            right: 0px;
            position: relative;
            bottom: -210px;
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
    }
}

  .positionBg{
      background-repeat:no-repeat;
      background-size: cover;
      height: 100vh;
      .header{
          position: absolute;
          border: 1px solid red;
          width: 40px;
          height: 40px;
          top: 30px;
          left: 6px;
      }
      .top_left{
          position: absolute;
          border: 1px solid red;
          width: 125px;
          height: 200px;
          top: 150px;
          left: 40px;
      }
      .top_right{
          position: absolute;
          border: 1px solid blue;
          width: 125px;
          height: 200px;
          top: 150px;
          right: 40px;
      }
      .bottom_left{
          position: absolute;
          border: 1px solid blue;
          width: 125px;
          height: 200px;
          bottom: 30px;
          left: 40px;
      }
      .bottom_right{
          position: absolute;
          border: 1px solid red;
          width: 125px;
          height: 200px;
          bottom: 30px;
          right: 40px;
      }
  }
</style>