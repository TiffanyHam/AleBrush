<!--
 * @Author: your name
 * @Date: 2021-03-25 15:38:13
 * @LastEditTime: 2021-03-25 18:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\BrushPosition\BrushPosition.vue
-->
<template>
    <div class="positionBg" :style="{backgroundImage:'url('+ bgImg +')'}">
        <div class="header" @click="headerClick"></div>
        <div class="top_left" @click="changeClick('top_left')"></div>
        <div class="top_right" @click="changeClick('top_right')"></div>
        <div class="bottom_left" @click="changeClick('bottom_left')"></div>
        <div class="bottom_right" @click="changeClick('bottom_right')"></div>
         <!-- 头部start -->
        <!-- <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
            <span slot="headerTitle">{{$t('position.header')}}</span>
        </Header> -->
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from "vuex";

export default {
    data(){
        return{
          positionName:'',
          bgImg: ''
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
        let code = this.$route.params.val;
        console.log(code)
        
    },
    methods:{
         ...mapActions({
           call_update_initPosition: 'call_update_initPosition'
        }),
        headerClick(){
            this.$router.push("/");
        },
        changeClick(val){
            switch(val)
            {
                case 'top_left' :
                    this.positionName = '左上区',
                    this.bgImg = require("../../assets/image/product/light/top_left.png")
                    break;
                case 'top_right' :
                     this.positionName = '右上区',
                     this.bgImg = require('../../assets/image/product/light/top_right.png')
                    break;
                case 'bottom_left' :
                     this.positionName = '左下区',
                     this.bgImg = require('../../assets/image/product/light/bottom_left.png')
                    break;
                case 'bottom_right' :
                     this.positionName = '右下区',
                     this.bgImg = require('../../assets/image/product/light/bottom_right.png')
                    break;
            }
           // console.log(this.positionName)
           // this.$store.dispatch('resetVuex')
            this.call_update_initPosition(this.positionName)
        }

    }
}
</script>
<style scoped lang="scss">
      //background-image: radial-gradient(50% 50%, #fff 2%, #007aac 200%);
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