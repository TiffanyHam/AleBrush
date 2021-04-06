<template>
    <div class="wrapper">
    <!-- 头部start -->
      <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
          <span slot="headerTitle">{{$t('BrushTeethPosition.header')}}</span>
      </Header>
      <div class="content">
           <div class="selec">{{$t('BrushTeethPosition.select')}}</div>
           <div class="centerImg posiImg position_center">
               <span v-for="(item,index) in poArr" :key="'info2-'+index" :class="['comm',item.class]">{{item.name}}</span>
               <span v-for="(item, index) in areaArr"  :key="item.index">
                   <img :src="item.src"  @click="selectArea(item.index)"  :class="[item.classN, selectedIndex == index ? 'opacity01' :'opacity38']" />
                   <!-- <i class="posiImg position_center"  :class="selectedIndex == index ? item.classN1 :''"></i> -->
                   <!-- 中心区域 -->
                   <img :src="selectedIndex == index ? item.src2 : ''" class="posiImg position_center" width="40%">
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
          backC: window.isDark ? '#007dff' : '#3f97e9',
          header_rightIcon: false,
          poArr:[
              {
                class:'position1',
                name:this.$t("BrushTeethPosition.top")
              },
              {
                class:'position2',
                name:this.$t("BrushTeethPosition.bottom")
              },
              {
                class:'position3',
                name:this.$t("BrushTeethPosition.left") 
              },
              {
                class:'position4',
                name:this.$t("BrushTeethPosition.right")
              },
          ],
          areaArr:[
            {
              index:0,  //左下
              classN:'left_down1',
              src: require('../../assets/image/cut_surface/left_down1.png'),
              classN1:'left_down2',
              src1:require('../../assets/image/cut_surface/centerImg1.png'),
              src2:require('../../assets/image/cut_surface/left_down.png'),
          },
          {
              index:1,
              classN:'right_down1',
              src: require('../../assets/image/cut_surface/right_down1.png'),
              classN1:'right_down2',
              src1:require('../../assets/image/cut_surface/centerImg2.png'),
              src2:require('../../assets/image/cut_surface/right_down.png'),
          },
          {  
              index:2,  //右上
              classN:'right_up1',
              src: require('../../assets/image/cut_surface/right_up1.png'),
              classN1:'right_up2',
              src1:require('../../assets/image/cut_surface/centerImg1.png'),
              src2:require('../../assets/image/cut_surface/right_up.png'),
          },
          {
              index:3,
              classN:'left_up1',
              src: require('../../assets/image/cut_surface/left_up1.png'),
              classN1:'left_up2',
              src1:require('../../assets/image/cut_surface/centerImg2.png'),
              src2:require('../../assets/image/cut_surface/left_up.png'),
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
    background: #3f97e9;
    .content{
       //position: relative;
       .selec{
           text-align: center;
           color: #fff;
           font-size: 14px;
           margin-top: 20px;
       }
       .centerImg {
            width: 232.57px;
            height: 403.14px;
           // background-image: url("../../assets/image/cut_surface/booth.png");
           .comm{
               position: absolute;
                transform: translate(-50%, -50%);
                font-size: 12px;
                color: #fff;
           }
           .position1{
               left: 50%;
               top: 30px;
           }
           .position2{
               left: 50%;
               bottom: 20px;
           }
           .position3{
               top: 50%;
               left: 15px;
           }
           .position4{
               top: 50%;
               right: 10px;
           }
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
    //    .right_down2{
    //         background-image: url("../../assets/image/cut_surface/right_down.png");
    //         width: 116px;
    //         height: 116px;
    //    }
    //    .right_up2{
    //         background-image: url("../../assets/image/cut_surface/right_up.png");
    //         width: 116px;
    //         height: 116px;
    //    }
    //    .left_up2{
    //         background-image: url("../../assets/image/cut_surface/left_up.png");
    //         width: 116px;
    //         height: 116px;
    //    }
    //    .left_down2{
    //         background-image: url("../../assets/image/cut_surface/left_down.png");
    //         width: 116px;
    //         height: 116px;
    //    }
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
// 暗黑模式
.theme-dark {
  .wrapper{
      background: #007dff; 
  }  
}
</style>