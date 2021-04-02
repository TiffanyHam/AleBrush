<template>
    <div class="wrapper">
    <!-- 头部start -->
      <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
          <span slot="headerTitle">{{$t('BrushTeethPosition.header')}}</span>
      </Header>
      <div class="content">
           <div class="selec">请选择起始位置</div>
           <div class="centerImg posiImg position_center">
               <span v-for="(item, index) in areaArr"  :key="item.index">
                   <img :src="item.src"  @click="selectArea(item.index)"  :class="[item.classN, selectedIndex == index ? 'opacity01' :'opacity38']" />
                   <i class="posiImg position_center"  :class="selectedIndex == index ? item.classN1 :''"></i>
                   <!-- 旋转方向 -->
                   <img :src="selectedIndex == index ? item.src1 : ''" class="posiImg position_center" width="62%"> 
                </span> 
           </div>
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
          selectedIndex:'',
          bgImg: '',
          selfB: true,
          backC: window.isDark ? '#3f97e9' : '#3f97e9',
          header_rightIcon: false,
          areaArr:[
            {
              index:0,  //左下
              classN:'left_down1',
              src: require('../../assets/image/cut_surface/left_down1.png'),
              classN1:'left_down2',
              src1:require('../../assets/image/cut_surface/centerImg1.png'),
          },
          {
              index:1,
              classN:'right_down1',
              src: require('../../assets/image/cut_surface/right_down1.png'),
              classN1:'right_down2',
              src1:require('../../assets/image/cut_surface/centerImg2.png'),
          },
          {  
              index:2,  //右上
              classN:'right_up1',
              src: require('../../assets/image/cut_surface/right_up1.png'),
              classN1:'right_up2',
              src1:require('../../assets/image/cut_surface/centerImg1.png'),
          },
          {
              index:3,
              classN:'left_up1',
              src: require('../../assets/image/cut_surface/left_up1.png'),
              classN1:'left_up2',
              src1:require('../../assets/image/cut_surface/centerImg2.png'),
 
          }
          
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
      this.selectedIndex = this.initPosition
    },
    methods:{
        selectArea(val){
           this.selectedIndex = val;
           this.call_update_initPosition(this.selectedIndex)
        },
         ...mapActions({
           call_update_initPosition: 'call_update_initPosition'
        }),
        headerClick(){
            this.$router.push("/");
        },

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
            background-image: url("../../assets/image/cut_surface/centerImg1.png");
            width: 122.5px;
            height: 275.25px;
       }
       .centerImg2{
            background-image: url("../../assets/image/cut_surface/centerImg2.png");
            width: 122.5px;
            height: 275.25px;
       }
       .right_down2{
            background-image: url("../../assets/image/cut_surface/right_down.png");
            width: 116px;
            height: 116px;
       }
       .right_up2{
            background-image: url("../../assets/image/cut_surface/right_up.png");
            width: 116px;
            height: 116px;
       }
       .left_up2{
            background-image: url("../../assets/image/cut_surface/left_up.png");
            width: 116px;
            height: 116px;
       }
       .left_down2{
            background-image: url("../../assets/image/cut_surface/left_down.png");
            width: 116px;
            height: 116px;
       }
       .opacity38{
        opacity: .38;
       }
       .opacity01{
        opacity:1;
       }
       .right_down1{  //右下
            width: 50%;
            right: 0px;
            position: absolute;
            bottom: 0px;
            z-index: 1;
       }
       .right_up1{
            width: 50%;
            right: 0px;
            position: absolute;
            top: 0px;
            z-index: 1;
       }
       .left_up1{
            width: 50%;
            left: 0px;
            position: absolute;
            top: 0px;
            z-index: 1;
       }
       .left_down1{
            width: 50%;
            left: 0px;
            position: absolute;
            bottom: 0px;
            z-index: 1;
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