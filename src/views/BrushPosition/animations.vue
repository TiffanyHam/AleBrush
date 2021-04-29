<template>
  <div class="brushing_other flexC">
    <!-- <div class="header"> -->
    <div class="header_inner">{{ $t("brushing.header") }}</div>
    <!-- </div> -->
    <div class="subheader">{{ $t("brushing.tipTextI30") }}</div>
    <div class="banner flex">
      <div class="centerImg posiImg position_center">
        <div
          v-for="(item, index) in posArr"
          :key="index"
          :class="['comm', item.class]"
        >
          {{ item.name }}
        </div>
        <!-- one --左下区逆时针 -->
        <div class="one" v-if="isPosition == 0">
          <!-- 左下 -->
          <div
            v-if="index == 1"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'left_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 1" class="currentA currrent_bottom">
            <div class="fingle fingle_left"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 1 * setOriginNum"
            class="left_down_out posiImg"
          ></div>

          <!-- 右下 -->
          <div
            v-if="index == 2"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'right_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 2" class="currentA currrent_bottom">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right"></div>
          </div>
          <div
            v-if="total >= 2 * setOriginNum"
            class="right_down_out posiImg"
          ></div>

          <!-- 右上 -->
          <div
            v-if="index == 3"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'right_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 3" class="currentA currrent_top">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right1"></div>
          </div>
          <div
            v-if="total >= 3 * setOriginNum"
            class="right_up_out posiImg"
          ></div>

          <!-- 左上 -->
          <div
            v-if="index == 4"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'left_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 4" class="currentA currrent_top">
            <div class="fingle fingle_left1"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="
              setOriginNum == 37
                ? total == 4 * setOriginNum + 2
                : total == 4 * setOriginNum
            "
            class="left_up_out posiImg"
          ></div>
        </div>
        <!-- fourth--顺时针右下 -->
        <div class="fourth" v-if="isPosition == 1">
          <!-- 右下 -->
          <div
            v-if="index == 1"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'right_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 1" class="currentA currrent_bottom">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right"></div>
          </div>
          <div
            v-if="total >= 1 * setOriginNum"
            class="right_down_out posiImg"
          ></div>
          <!-- 左下 -->
          <div
            v-if="index == 2"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'left_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 2" class="currentA currrent_bottom">
            <div class="fingle fingle_left"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 2 * setOriginNum"
            class="left_down_out posiImg"
          ></div>
          <!-- 左上 -->
          <div
            v-if="index == 3"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'left_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 3" class="currentA currrent_top">
            <div class="fingle fingle_left1"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 3 * setOriginNum"
            class="left_up_out posiImg"
          ></div>
          <!-- 右上 -->
          <div
            v-if="index == 4"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'right_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 4" class="currentA currrent_top">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right1"></div>
          </div>
          <div
            v-if="
              setOriginNum == 37
                ? total == 4 * setOriginNum + 2
                : total == 4 * setOriginNum
            "
            class="right_up_out posiImg"
          ></div>
        </div>
        <!-- second --右上区逆时针 -->
        <div class="second" v-if="isPosition == 2">
          <!-- 右上 -->
          <div
            v-if="index == 1"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'right_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 1" class="currentA currrent_top">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right1"></div>
          </div>
          <div
            v-if="total >= 1 * setOriginNum"
            class="right_up_out posiImg"
          ></div>
          <!-- 左上 -->
          <div
            v-if="index == 2"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'left_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 2" class="currentA currrent_top">
            <div class="fingle fingle_left1"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 2 * setOriginNum"
            class="left_up_out posiImg"
          ></div>
          <!-- 左下 -->
          <div
            v-if="index == 3"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'left_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 3" class="currentA currrent_bottom">
            <div class="fingle fingle_left"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 3 * setOriginNum"
            class="left_down_out posiImg"
          ></div>
          <!-- 右下 -->
          <div
            v-if="index == 4"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'right_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 4" class="currentA currrent_bottom">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right"></div>
          </div>
          <div
            v-if="
              setOriginNum == 37
                ? total == 4 * setOriginNum + 2
                : total == 4 * setOriginNum
            "
            class="right_down_out posiImg"
          ></div>
        </div>
        <!-- third--顺时针左上 -->
        <div class="third" v-if="isPosition == 3">
          <!-- 左上 -->
          <div
            v-if="index == 1"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'left_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 1" class="currentA currrent_top">
            <div class="fingle fingle_left1"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="total >= 1 * setOriginNum"
            class="left_up_out posiImg"
          ></div>
          <!-- 右上 -->
          <div
            v-if="index == 2"
            :style="{ opacity: `${opacityVal}` }"
            :class="['00', '02'].includes(isOpen) ? 'right_up_out posiImg' : ''"
          ></div>
          <div v-if="index == 2" class="currentA currrent_top">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right1"></div>
          </div>
          <div
            v-if="total >= 2 * setOriginNum"
            class="right_up_out posiImg"
          ></div>

          <!-- 右下 -->
          <div
            v-if="index == 3"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'right_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 3" class="currentA currrent_bottom">
            <div>{{ $t("BrushTeethPosition.current") }}</div>
            <div class="fingle fingle_right"></div>
          </div>
          <div
            v-if="total >= 3 * setOriginNum"
            class="right_down_out posiImg"
          ></div>
          <!-- 左下 -->
          <div
            v-if="index == 4"
            :style="{ opacity: `${opacityVal}` }"
            :class="
              ['00', '02'].includes(isOpen) ? 'left_down_out posiImg' : ''
            "
          ></div>
          <div v-if="index == 4" class="currentA currrent_bottom">
            <div class="fingle fingle_left"></div>
            <div>{{ $t("BrushTeethPosition.current") }}</div>
          </div>
          <div
            v-if="
              setOriginNum == 37
                ? total == 4 * setOriginNum + 2
                : total == 4 * setOriginNum
            "
            class="left_down_out posiImg"
          ></div>
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
              stroke="rgba(255,255,255,0.38)"
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
              style="dominant-baseline: middle; text-anchor: middle"
            >
              {{ seconds }}
            </text>
            <text
              class="font16 second"
              fill="rgba(255,255,255,0.9)"
              x="60.5"
              y="42.5"
              style="dominant-baseline: middle; text-anchor: middle"
            >
              S
            </text>
            <text
              class="font12"
              fill="rgba(255,255,255,0.9)"
              x="47.5"
              y="65.5"
              style="dominant-baseline: middle; text-anchor: middle"
            >
              {{ totalNum }}
            </text>
          </svg>
        </div>
      </div>
    </div>
    <div class="stopB" v-show="isStop">{{ $t("brushing.charge") }}</div>
    <div class="music" @click="togglePlay">
      <!-- 音乐开关切换 -->
      <span class="musicOn" v-show="isAudio"></span>
      <span class="musicOff" v-show="!isAudio"></span>
      <span>{{ $t("setting.audio") }}</span>
    </div>
    <div class="brushing">
      <div>{{ $t("brushing.charge") }}</div>
      <div style="margin-top: 4px">{{ $t("brushing.tipText") }}</div>
    </div>
    <!-- music -->
    <div>
      <audio v-if="index == 1 && isAudio" ref="player" autoplay
        muted src="../../assets/image/music/one.mp3"></audio>
      <audio v-if="index == 2 && isAudio" ref="player" autoplay
        muted src="../../assets/image/music/two.mp3"></audio>
      <audio v-if="index == 3 && isAudio" ref="player" autoplay
        muted src="../../assets/image/music/three.mp3"></audio>
      <audio v-if="index == 4 && isAudio" ref="player" autoplay
        muted src="../../assets/image/music/four.mp3"></audio>
    </div>
    <!-- 倒计时弹窗 -->
    <div class="bleDialog" v-show="isAppear">
      <!-- 蒙版 -->
      <div
        class="mask animate__animated animate__fadeIn"
        key="1"
        v-if="isShow"
        @touchmove.prevent
      ></div>
      <div class="dialog" v-show="isShow" key="2">
        <div class="dialogTitle">
          <slot name="title">{{ $t("Hint.tipTitle2") }}</slot>
        </div>
        <div class="dialogContent">
          <p class="magBot">{{ $t("Hint.tipText5") }}</p>
          <div>
            <svg class="svg" width="84px" height="84px" viewBox="0 0 84 84">
              <circle
                class="progress"
                cx="42"
                cy="42"
                r="40"
                stroke-width="2"
                :stroke="isBg"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-dasharray="251.2px"
                stroke-dashoffset="0px"
              />
              <text class="text" x="42" y="-42" :fill="isBg">
                <tspan font-size="20px">{{ time }}</tspan>
                &nbsp;
                <tspan class="tspan" font-size="12px">
                  {{ this.$t("Hint.seconds") }}
                </tspan>
              </text>
            </svg>
          </div>
          <slot v-if="isEnough">{{ $t("Hint.tipText6") }} </slot>
          <slot v-else>{{ $t("Hint.tipText7") }}</slot>
          <!-- 30s -->
          <br />
          <slot>{{ $t("Hint.tipText8") }}</slot>
        </div>
        <div class="dialog_footer fb">
          <span class="btn" @click="Exit">
            <slot name="sure btn_right">{{ $t("Hint.quit") }}</slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import reportData from "../../utils/reportData";
import { formatDate } from "../../utils/tool";

export default {
  name: "Brushing_other",
  data() {
    return {
      isEnough: false, //false 30S
      isAppear: false,
      isShow: true, //弹窗的显示
      time: 30,
      isBg: window.isDark ? "#3F97E9" : "#007dff",
      brushLen: "",
      record: "",
      svg: true,
      // svg 的旋转角度
      rotate: [],
      startX: 5,
      startY: 47.5,
      endX: 0,
      endY: 0,
      index: 1,
      seconds: 0, //每块区域倒计时秒
      total: 0, //总时间--秒数--设备取数据
      totalNum: "00:00", //秒数格式化
      setTotalTime: "02:00",
      setOriginNum: 0,
      isOpen: "00",
      opacityVal: 0,
      isStop: false,
      isPosition: 0,
      timer: null,
      timer1: null,
      timer4: null,
      timer2:null,
      timeL: "00",
      num: 0,
      isPlay: true, //音频播放状态
      posArr: [
        {
          class: "top",
          name: this.$t("BrushTeethPosition.top"),
        },
        {
          class: "bottom",
          name: this.$t("BrushTeethPosition.bottom"),
        },
        {
          class: "left",
          name: this.$t("BrushTeethPosition.left"),
        },
        {
          class: this.$i18n.locale === "zh" ? "right" : "right1",
          name: this.$t("BrushTeethPosition.right"),
        },
      ],
      audio:[
        {
          index:1,
          src:"../../assets/image/music/one.mp3"
        },
        {
          index:2,
          src:"../../assets/image/music/two.mp3"
        },
        {
          index:3,
          src:"../../assets/image/music/three.mp3"
        },
        {
          index:4,
          src:"../../assets/image/music/four.mp3"
        }
      ],
      isAudio:true
    };
  },
  computed: {
    ...mapState(["timeLength", "data", "initPosition","isMusic"]),
  },
  watch: {
    timeLength(val) {
      // console.log("时长wwww:", val);
    },
    data(value) {
      //console.log("數據來了", value);
      this.acceptData(value);
    },
    time(n) {
      this.time = n;
    },
    isMusic(val){
      this.isAudio = val
      if(val){
        this.$nextTick(() => {
         this.onendedEvent()
        })
      }
    }
  },
  created() {
    let r = 42.5;
    let centerX = 47.5;
    let centerY = 47.5;
    let svgX = r * Math.cos((Math.PI / 180) * 90);
    let svgY = r * Math.sin((Math.PI / 180) * 90);
    this.isPosition = this.initPosition;
    switch (this.isPosition) {
      case 0:
        this.rotate = [
          // 左下
          { x: centerX - r, y: centerY },
          { x: centerX + svgX, y: centerY + svgY },
          { x: centerX + r, y: centerY },
          { x: centerX - svgX, y: centerY - svgY },
        ];
        break;
      case 1:
        this.rotate = [
          //右下
          { x: centerX + svgX, y: centerY + svgY },
          { x: centerX + r, y: centerY },
          { x: centerX - svgX, y: centerY - svgY },
          { x: centerX - r, y: centerY },
        ];
        break;
      case 2:
        this.rotate = [
          //右上
          { x: centerX + r, y: centerY },
          { x: centerX - svgX, y: centerY - svgY },
          { x: centerX - r, y: centerY },
          { x: centerX + svgX, y: centerY + svgY },
        ];
        break;
      case 3:
        this.rotate = [
          //左上
          { x: centerX - svgX, y: centerY - svgY },
          { x: centerX - r, y: centerY },
          { x: centerX + svgX, y: centerY + svgY },
          { x: centerX + r, y: centerY },
        ];
        break;
    }
    this.startX = this.rotate[0].x;
    this.startY = this.rotate[0].y;
    this.endX = this.rotate[1].x;
    this.endY = this.rotate[1].y;

    //   console.log(this.startX, this.startY, this.endX, this.endY);
    if (this.timeLength == "") {
      this.timeL = "00";
    } else {
      this.timeL = this.timeLength;
    }
    console.log("timeL:", this.timeL);
    this.globalT(this.timeL);

    //console.log("刷牙区域:", this.timeL);
  },
  mounted() {
    this.animation();
    this.isAudio = this.isMusic
    //console.log('this.isAudio',this.isMusic)
    if(this.isAudio){
      this.$nextTick(() => {
        this.onendedEvent()
       })
    }
    if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.backChange, false);//false阻止默认事件
      }
  },
  destroyed(){
     window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
   },
  beforeDestroy() {
    clearInterval(this.timer1);
    clearInterval(this.timer);
    clearInterval(this.timer4);
    clearInterval(this.timer2);
    this.timer1 = null;
    this.timer = null;
    this.timer4 = null;
    this.timer2 = null
  },
  methods: {
    backChange(){
      console.log("监听到了");
      this.isStop = true
      history.pushState(null, null, document.URL);
      this.timer2 = setTimeout(() =>{
        this.isStop = false
      },200)
     },
    ...mapActions(["setCloudData","saveMusic"]),
    /**
     * @description: 根据四个面播放不同音乐
     * @param {*}
     * @return {*}
     */    
    onendedEvent() {
      this.$refs.player.play()
      this.$refs.player.load()
      //播放完毕，重新循环播放
      this.audioAutoPlay()
      },
      /**
       * @description: 自动播放
       * @param {*}
       * @return {*}
       */      
      audioAutoPlay() {
        this.$refs.player.play()
        document.removeEventListener("touchstart", this.audioAutoPlay)
      },
    /**
     * @description: 开始/暂停
     * @param {*}
     * @return {*}
     */
    togglePlay() {
      let player = this.$refs.player;
      if (this.isAudio) {
        this.isAudio = false;
        this.saveMusic(this.isAudio)
        player.pause();
        return;
      } else {
        this.isAudio = true;
        this.saveMusic(this.isAudio)
        player.play();
      }
    },
    /**
     * @description: 动画闪烁
     * @param {*}
     * @return {*}
     */
    animation() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        //透明度切换
        if (!this.opacityVal) {
          this.opacityVal = 1;
        } else {
          this.opacityVal = 0;
        }
      }, 1000);
    },
    /**
     * @description:SVG角度
     * @param {*}
     * @return {*}
     */
    positionSet1() {
      //左上
      this.startX = 47.5;
      this.startY = 5;
      this.endX = 5;
      this.endY = 47.5;
    },
    positionSet2() {
      //右上
      this.startX = 90;
      this.startY = 47.5;
      this.endX = 47.5;
      this.endY = 5;
    },
    positionSet3() {
      //右下
      this.startX = 47.5;
      this.startY = 90;
      this.endX = 90;
      this.endY = 47.5;
    },
    positionSet4() {
      //左下
      this.startX = 5;
      this.startY = 47.5;
      this.endX = 47.5;
      this.endY = 90;
    },
    /**
     * @description:牙齿4面
     * @param {*}
     * @return {*}
     */
    firstArea(total) {
      this.index = 1;
      this.seconds = this.setOriginNum - total;
      if (this.seconds == 0) {
        this.seconds = this.setOriginNum;
      }
    },
    secondArea(total) {
      this.index = 2;
      this.seconds = this.setOriginNum - (total % this.setOriginNum);
      if (this.seconds == 0) {
        this.seconds = this.setOriginNum;
      }
    },
    thirdArea(total) {
      this.index = 3;
      this.seconds = this.setOriginNum - (total % (this.setOriginNum * 2));
      if (this.seconds == 0) {
        if (this.setOriginNum == 37) {
          this.seconds = this.setOriginNum + 2;
        } else {
          this.seconds = this.setOriginNum;
        }
      }
    },
    fourArea(total) {
      this.index = 4;
      if (this.setOriginNum == 37) {
        this.seconds =
          this.setOriginNum - ((total % (this.setOriginNum * 3)) - 2);
      } else {
        this.seconds = this.setOriginNum - (total % (this.setOriginNum * 3));
      }
    },
    /**
     * @description:动画
     * @param {*}
     * @return {*}
     */
    countDown(total) {
      let that = this;
      // that.isPosition = that.initPosition
      if (that.isPosition == 0) {
        //逆时针 左下
        if (total <= that.setOriginNum) {
          that.firstArea(total);
          that.positionSet4();
        }
        if (total > that.setOriginNum * 1) {
          that.secondArea(total);
          that.positionSet3();
        }
        if (total > that.setOriginNum * 2) {
          that.thirdArea(total);
          that.positionSet2();
        }
        if (total > that.setOriginNum * 3) {
          that.fourArea(total);
          that.positionSet1();
        }
        if (that.setOriginNum == 37) {
          if (total == that.setOriginNum * 4 + 2) {
            that.Exit();
          }
        } else {
          if (total == that.setOriginNum * 4) {
            that.Exit();
          }
        }
      }
      if (that.isPosition == 1) {
        //顺时针  右下
        if (total <= that.setOriginNum) {
          that.firstArea(total);
          that.positionSet3();
        }
        if (total > that.setOriginNum * 1) {
          that.secondArea(total);
          that.positionSet4();
        }
        if (total > that.setOriginNum * 2) {
          that.thirdArea(total);
          that.positionSet1();
        }
        if (total > that.setOriginNum * 3) {
          that.fourArea(total);
          that.positionSet2();
        }
        if (that.setOriginNum == 37) {
          if (total == that.setOriginNum * 4 + 2) {
            that.Exit();
          }
        } else {
          if (total == that.setOriginNum * 4) {
            that.Exit();
          }
        }
      }
      if (that.isPosition == 2) {
        //逆时针  右上
        if (total <= that.setOriginNum) {
          that.firstArea(total);
          that.positionSet2();
        }
        if (total > that.setOriginNum * 1) {
          that.secondArea(total);
          that.positionSet1();
        }
        if (total > that.setOriginNum * 2) {
          that.thirdArea(total);
          that.positionSet4();
        }
        if (total > that.setOriginNum * 3) {
          that.fourArea(total);
          that.positionSet3();
        }
        if (that.setOriginNum == 37) {
          if (total == that.setOriginNum * 4 + 2) {
            that.Exit();
          }
        } else {
          if (total == that.setOriginNum * 4) {
            that.Exit();
          }
        }
      }
      if (that.isPosition == 3) {
        //顺时针  左上
        if (total <= that.setOriginNum) {
          that.firstArea(total);
          that.positionSet1();
        }
        if (total > that.setOriginNum * 1) {
          that.secondArea(total);
          that.positionSet2();
        }
        if (total > that.setOriginNum * 2) {
          that.thirdArea(total);
          that.positionSet3();
        }
        if (total > that.setOriginNum * 3) {
          that.fourArea(total);
          that.positionSet4();
        }
        if (that.setOriginNum == 37) {
          if (total == that.setOriginNum * 4 + 2) {
            that.Exit();
          }
        } else {
          if (total == that.setOriginNum * 4) {
            that.Exit();
          }
        }
      }

      let mins = Math.floor(total / 60);
      let sec = ((total % 60) / 100).toFixed(2).slice(-2);
      that.totalNum = (mins < 10 ? "0" + mins : mins) + ":" + sec;
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
                                }`;
      // 创建style标签
      const style = document.createElement("style");
      // 设置style属性
      style.type = "text/css";
      // 将 keyframes样式写入style内
      style.innerHTML = runkeyframes;
      // 将style样式存放到head标签
      document.getElementsByTagName("head")[0].appendChild(style);
    },
    // 30倒计时
    getTime30() {
      let that = this;
      that.addkeyframe(30 * 2 * Math.PI);
      // let svg = document.querySelector('.svg');
      // //调用前，先销毁定时器实例,初始化实例对象
      if (that.timer4 != null) {
        clearInterval(that.timer4);
      }
      that.timer4 = setInterval(() => {
        that.time--;
        //console.log(that.time);
        if (that.time == 0) {
          that.time = 0;
          clearInterval(that.timer4);
          that.Exit();
        }
      }, 1000);
    },
    use(w) {
      if (w !== undefined) {
        this.total = w;
        //this.countDown(this.total)
      }
    },
    totalTime(second) {
      let that = this;
      clearInterval(that.timer1);
      that.timer1 = setInterval(function () {
        if (second == 0 || second > 0) {
          second = second + 1;
          that.use(second);
        }
      }, 1000);
    },
    /**
     * @description: 时间设定
     * @param {*} val
     * @return {*}
     */
    globalT(val) {
      switch (val) {
        case "00":
          (this.setTotalTime = "02:00"), (this.setOriginNum = 30);
          break;
        case "01":
          (this.setTotalTime = "02:30"), (this.setOriginNum = 37);
          break;
        case "02":
          (this.setTotalTime = "03:00"), (this.setOriginNum = 45);
          break;
      }
      if (this.seconds == 0) {
        this.seconds = this.setOriginNum;
      }
      // this.totalTime(0)
      // this.use()
    },

    /**
     * @description: 正常进入页面
     * @param {*}
     * @return {*}
     */

    // 数据解析
    acceptData(data) {
      if (data.indexOf("F55F070601") == 0) {
        this.total = parseInt(data.substr(10, 2), 16);
        // console.log('计时开始：', this.total)
        this.countDown(this.total);
      }
      if (data.indexOf("F55F070401") == 0) {
        this.isOpen = data.substr(10, 2);
        console.log("开启状态：", this.isOpen);
        if (this.isOpen == "01") {
          this.ExitDialog(); //暂停  弹窗出现
          this.$refs.player.pause()
          window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
        }
        if (this.isOpen == "02") {
          this.isAppear = false; //恢复  弹窗关闭
          this.$refs.player.play()
          history.pushState(null, null, document.URL);

          clearInterval(this.timer4);
          this.time = 30;
        }
        if (this.isOpen == "03") {
          //结束
          this.Exit();
        }
      }
    },
    /**
     * @description: 暂停 不超过30s弹窗
     * @param {*}
     * @return {*}
     */
    ExitDialog() {
      let that = this;
      that.isAppear = true;
      that.getTime30();
      if (that.total < 30) {
        that.isEnough = false;
      } else {
        //记录数据
        that.isEnough = true;
      }
    },

    /**
     * @description: 退出
     * @param {*}
     * @return {*}
     */
    Exit() {
      if (this.total > 30 || this.total == 30) {
        this.historyArr();
      }
      clearInterval(this.timer);
      clearInterval(this.timer4);

      window.hiLinkBle.send("F55F060301005E"); //清空计时指令
      this.$router.push({ name: "Main" });
    },

    /**
     * @description: 云端取数据
     * @param {*}
     */
    getCloudHistory() {
      let resCallback = (res) => {
        //console.log("云端数据返回：", res);
        this.setCloudData(res);
      };
      reportData.getHistoryLog(resCallback);
    },
    /**
     * @description: 历史数据计算
     * @param {*}
     * @return {*}
     */
    historyArr() {
      var that = this;
      var times = formatDate(Date.parse(new Date())); //当前时间
      var dayY = times.split(",")[0]; //年月日

      var timeY = times.split(",")[1]; //时分秒
      var setLen =
        parseInt(that.setTotalTime.substr(1, 1)) * 60 +
        parseInt(that.setTotalTime.substr(that.setTotalTime.length - 2)); //设定时长
      var score = parseInt((that.total / setLen) * 100); //刷牙分数 =（刷牙时长/总时长）*100
      //console.log(that.total,setLen,score)
      let mins = Math.floor(that.total / 60);
      let sec = ((that.total % 60) / 100).toFixed(2).slice(-2);
      let totalNum = (mins < 10 ? "0" + mins : mins) + ":" + sec;
      //console.log(totalNum)
      //数据上报
      let resCallback = (res) => {
        // console.log('hhh:',res.errcode);
        if (res.errcode == 200) {
          // console.log("上报成功");
          //this.getCloudHistory()
        }
      };
      var formatdata = reportData.formatDataFromMachine(
        dayY,
        timeY,
        totalNum,
        score
      );
      // console.log('上报数据:',formatdata)
      reportData.report(reportData.devId, formatdata, resCallback);
    },
  },
};
</script>

<style lang='scss' scoped>
.brushing_other {
  width: 100%;
  height: 100%;
  background-color: #3f97e9;
  position: relative;
  .stopB {
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
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    bottom: 13%;
  }
  .music {
    text-align: center;
    color: #fff;
    margin: 10px 0;
    position: relative;
    .musicOn,
    .musicOff {
      width: 24px;
      height: 24px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      left: 35%;
      top: -7px;
    }
  }
  .brushing {
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
      width: 248px;
      height: 431px;
      background-image: url("../../assets/image/cut_surface/booth.png");
      .left {
        left: 7%;
        top: 50%;
      }
      .comm {
        font-size: 16px;
        position: absolute;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.9);
      }
      .right {
        right: 3%;
        top: 50%;
      }
      .right1 {
        position: absolute;
        right: -5%;
        top: 50%;
      }
      .top {
        left: 50%;
        top: 9%;
      }
      .bottom {
        bottom: 6%;
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
        background-image: url("../../assets/image/cut_surface/left_down_out.png");
      }
      .currentA {
        position: absolute;
        color: rgba(255, 255, 255, 0.9);
        transform: translate(-50%, -50%);
      }
      .currrent_top {
        top: 20%;
        left: 50%;
      }
      .currrent_bottom {
        bottom: 20%;
        left: 50%;
      }
      .fingle {
        width: 24px;
        height: 24px;
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .fingle_left {
        top: 4px;
        right: 38px;
      }
      .fingle_right {
        top: -4px;
        left: 50px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      .fingle_left1 {
        top: 4px;
        right: 38px;
      }
      .fingle_right1 {
        top: -4px;
        left: 50px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      .right_down_out {
        width: 100%;
        height: 100%;
        right: 0px;
        bottom: 0px;
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
// 弹窗
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
      color: rgba(0, 0, 0, 0.9);
      // margin: 0 0 15px 0;
      height: 56px;
      line-height: 56px;
    }
    .options {
      width: 100%;
      .item_title {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
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
      color: rgba(0, 0, 0, 0.9);
      text-align: center;
      .magBot {
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
      color: #007dff;
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
.theme-dark {
  .dialog {
    background-color: #262626;
    .dialogTitle {
      color: rgba(255, 255, 255, 0.9);
    }
    .dialogContent {
      color: rgba(255, 255, 255, 0.86);
    }
    .dialog_footer {
      color: #3f97e9;
    }
  }
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
