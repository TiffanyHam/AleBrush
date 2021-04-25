<template>
  <div class="wrapper">
    <!-- 头部start -->
    <Header :selfB="selfB" :isRight="header_rightIcon" :backC="backC">
      <span slot="headerTitle">{{ $t("BrushTeethPosition.header") }}</span>
    </Header>
    <div class="content">
      <div class="selec">{{ $t("BrushTeethPosition.select") }}</div>
      <div class="centerImg posiImg position_center">
        <span
          v-for="(item, index) in poArr"
          :key="'info2-' + index"
          :class="['comm', item.class]"
          >{{ item.name }}</span
        >
        <span v-for="(item, index) in areaArr" :key="item.index">
          <img
            :src="item.src"
            @click="selectArea(item.index)"
            :class="[
              item.classN,
              selectedIndex == index ? 'opacity01' : 'opacity38',
            ]"
          />
          <!-- 中心区域 -->

          <span class="circle position_center" v-if="selectedIndex == index">
            <img
              src="../../assets/image/cut_surface/circle.png"
              :class="item.classN2"
              class="init_po"
              width="100%"
            />
            <span class="position_in"
              >{{ $t("BrushTeethPosition.you") }}{{ item.dd
              }}{{ $t("BrushTeethPosition.as") }}<br />
              {{ $t("BrushTeethPosition.initial") }}<br />
              {{ $t("BrushTeethPosition.order") }}{{ item.ff }}</span
            >
          </span>
          <!-- 旋转方向 -->
          <img
            :src="selectedIndex == index ? item.src1 : ''"
            style="border:0"
            class="position_center"
            width="60%"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      positionName: "",
      selectedIndex: 0,
      bgImg: "",
      selfB: true,
      backC: window.isDark ? "#007dff" : "#3f97e9",
      header_rightIcon: false,
      isPosition:0,
      poArr: [
        {
          class: "position1",
          name: this.$t("BrushTeethPosition.top"),
        },
        {
          class: "position2",
          name: this.$t("BrushTeethPosition.bottom"),
        },
        {
          class: "position3",
          name: this.$t("BrushTeethPosition.left"),
        },
        {
          class: "position4",
          name: this.$t("BrushTeethPosition.right"),
        },
      ],
      areaArr: [
        {
          index: 0, //左下
          classN: "left_down1",
          src: require("../../assets/image/cut_surface/left_down1.png"),
          src1: require("../../assets/image/cut_surface/centerImg1.png"),
          dd: this.$t("BrushTeethPosition.position1"),
          ff: this.$t("BrushTeethPosition.anticlockwise"),
          classN2: "left_down3",
        },
        {
          index: 1,
          classN: "right_down1",
          src: require("../../assets/image/cut_surface/right_down1.png"),
          src1: require("../../assets/image/cut_surface/centerImg2.png"),
          dd: this.$t("BrushTeethPosition.position2"),
          ff: this.$t("BrushTeethPosition.clockwise"),
          classN2: "right_down3",
        },
        {
          index: 2, //右上
          classN: "right_up1",
          src: require("../../assets/image/cut_surface/right_up1.png"),
          src1: require("../../assets/image/cut_surface/centerImg1.png"),
          dd: this.$t("BrushTeethPosition.position3"),
          ff: this.$t("BrushTeethPosition.anticlockwise"),
          classN2: "right_up3",
        },
        {
          index: 3,
          classN: "left_up1",
          src: require("../../assets/image/cut_surface/left_up1.png"),
          src1: require("../../assets/image/cut_surface/centerImg2.png"),
          dd: this.$t("BrushTeethPosition.position4"),
          ff: this.$t("BrushTeethPosition.clockwise"),
          classN2: "left_up3",
        },
      ],
    };
  },
  computed: {
    ...mapState(["initPosition"]),
  },
  watch: {
    initPosition(val) {
      // console.log('起始位置：',val)
    },
  },
  mounted() {
     this.isPosition = this.initPosition
     this.selectedIndex = this.isPosition;
     
  },
  methods: {
    ...mapActions(["call_update_initPosition"]),
    selectArea(val) {
      this.selectedIndex = val;
      this.call_update_initPosition(this.selectedIndex);
    },
    headerClick() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  background: #3f97e9;
  .content {
    //position: relative;
    .selec {
      text-align: center;
      color: #fff;
      font-size: 14px;
      margin-top: 20px;
    }
    .centerImg {
      width: 232.57px;
      height: 403.14px;
      // background-image: url("../../assets/image/cut_surface/booth.png");
      .circle {
        //   width: 115px;
        //   height: 115px;
        color: #fff;
        text-align: center;
        line-height: 15px;
        .position_in {
          position: relative;
          bottom: 64px;
          left: 0px;
        }
      }
      .init_po {
        position: relative;
        left: 0;
        top: 18px;
      }
      .left_down3 {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }
      .right_up3 {
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
      }
      .left_up3 {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      .comm {
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: #fff;
      }
      .position1 {
        left: 50%;
        top: 33px;
      }
      .position2 {
        left: 50%;
        bottom: 23px;
      }
      .position3 {
        top: 50%;
        left: 17px;
      }
      .position4 {
        top: 50%;
        right: 0px;
      }
    }
    .centerImg1 {
      background-image: url("../../assets/image/cut_surface/centerImg1.png");
      width: 122.5px;
      height: 275.25px;
    }
    .centerImg2 {
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
    .opacity38 {
      opacity: 0.38;
    }
    .opacity01 {
      opacity: 1;
    }
    .right_down1 {
      //右下
      width: 50%;
      right: 0px;
      position: absolute;
      bottom: 0px;
      z-index: 1;
    }
    .right_up1 {
      width: 50%;
      right: 0px;
      position: absolute;
      top: 0px;
      z-index: 1;
    }
    .left_up1 {
      width: 50%;
      left: 0px;
      position: absolute;
      top: 0px;
      z-index: 1;
    }
    .left_down1 {
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
  .wrapper {
    background: #007dff;
  }
}
</style>