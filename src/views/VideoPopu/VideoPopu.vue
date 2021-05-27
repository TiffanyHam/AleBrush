<!--
 * @Descriptio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          n: 实时引导小视频
 * @version: 
 * @Author: HeZhen
 * @Date: 2020-12-07 15:02:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-27 16:18:02
-->
<template>
  <div
    :style="{ left: bindX, top: bindY }"
    class="VideoPopu"
    ref="pop"
    v-if="visible"
    @click="bigView"
    @touchstart="movestart('pop', $event)"
    @touchmove="move('pop', $event)"
  >
    <video
      id="_src"
      muted
      :src="src"
      class="videodialog"
      style="object-fit: fill"
      x5-video-player-type="h5"
      x5-video-orientation="landscape_left"
      :poster="isPoster ? pictureUrl.img1 : pictureUrl.img2 "
    ></video>
  </div>
</template>
<script>
import g from "../../Util/global";
import { format, scale } from "../../Util/tool";
import poster1 from '../../Images/light/poster1.png'
import poster2 from '../../Images/light/poster2.png'
import { mapActions } from "vuex";

export default {
  name: "VideoPopu",
  data() {
    return {
      visible: false,
      src: "",
      videoType: "-1",
      bindX: "190px",
      bindY: "140px",
      coordinate: {
        client: {},
        elePosition: {},
      },
      save: true,
      isPoster:true,
      pictureUrl:{
        img1:'',
        img2:''
      }
    };
  },
  computed: {
    binData() {
      return this.$store.state.BleStatus.binData;
    },
    header() {
      return scale.hextoBin(this.binData.substr(4, 2))[5];
    },
  },
  watch: {
    binData(n, o) {
      if (scale.hextoBin(n.substr(4, 2))[7] === "0" && this.save) {
        this.standardBrushingTime();
      }
    },
    videoType(n, o) {
      if (n != -1) this.init();
    },
  },
  mounted() {
    this.pictureUrl.img1 = poster1
    this.pictureUrl.img2 = poster2
    this.init();
  },
  beforeDestroy() {
    this.videoType = "-1";
    this.visible = false;
  },

  methods: {
    ...mapActions({
      save_flage: "BleStatus/save_flage"
    }),
    /**
     * @description:  初始化
     * @param {*}
     * @return {*}
     */
    init() {
      var that = this;
      setTimeout(() => {
        var videoSrcs = [
          [
            "https://www.kinyooo.com/media/2DChinese.mp4",
            "https://www.kinyooo.com/media/3DChinese.mp4",
          ],
          [
            "https://www.kinyooo.com/media/2DEnglish.mp4",
            "https://www.kinyooo.com/media/3DEnglish.mp4",
          ],
        ];
       // console.log(videoSrcs,'videoSrcs')
        var pre = that.$i18n.locale === "zh" ? 0 : 1;
        that.$nextTick(() => {
          var v = document.getElementById("_src");
          v.currentTime = parseInt(that.binData.substr(6, 2), 16);
          console.log( v.currentTime,' v.currentTime')
          var next =
            scale.hextoBin(that.binData.substr(4, 2))[5] === "0" ? 1 : 0;
          next === 1 ? that.isPoster = false : that.isPoster = true
          that.src = videoSrcs[pre][next];
         // console.log(that.src,'that.src')
          setTimeout(() => {
            v.play();
          }, 10);
        });
      });
    },
    /**
     * @description:  返回大视频
     * @param {*}
     * @return {*}
     */
    bigView() {
      g.removeVideoPlay();
      this.visible = false;
      this.save = false;
      this.videoType = "-1";
      //this.save_flage(true)
      this.$router.push({ path: "/Brushing_other", query: { from: true } });
    },

    // /**
    //  * @description: 监听视频播放结束事件
    //  * @param {*}
    //  * @return {*}
    //  */
    // onVideoPlayEnded() {
    //   var that = this;
    //   var v = document.querySelector("#_src");
    //   v.addEventListener(
    //     "ended",
    //     () => {
    //       g.removeVideoPlay();
    //       window.hilink.setRequestedOrientation(false);
    //       that.videoType = "-1";
    //       that.save = false;
    //       that.visible = false;
    //       that.$router.push({
    //         path: "/LogDetail",
    //         query: {
    //           bin: scale.hextoBin(that.binData.substr(6, 2)),
    //           newest: scale.hextoBin(that.binData.substr(4, 2))[5],
    //         },
    //       });
    //     },
    //     false
    //   );
    // },

    /**
     * @description: 判断刷牙时长是否符合规范
     * @param {*}
     * @return {*}
     */
    standardBrushingTime() {
      g.removeVideoPlay();
      let len = parseInt(this.binData.substr(6, 2), 16);
      if (this.videoType === "1" && len < 30) {
        this.videoType = "-1";
        this.save = false;
        this.visible = false;
        return true;
      }
      if (this.videoType === "0" && len < 10) {
        this.videoType = "-1";
        this.save = false;
        this.visible = false;
        return true;
      }
      this.videoType = "-1";
      this.visible = false;
      this.save = false;
      this.$router.push({
        path: "/LogDetail",
        query: {
          bin: scale.hextoBin(this.binData.substr(6, 2)),
          newest: scale.hextoBin(this.binData.substr(4, 2))[5],
        },
      });
      //this.$destroy()
    },

    /**
     * @description: 鼠标按下事件
     * @param {Object} e 鼠标事件源
     * @return {*}
     */
    movestart(refName, e) {
      let element = e.targetTouches[0];
      // 记录点击的坐标
      this.coordinate.client = {
        x: element.clientX,
        y: element.clientY,
      };
      // 记录需要移动的元素坐标
      this.coordinate.elePosition.left = this.$refs[refName].offsetLeft;
      this.coordinate.elePosition.top = this.$refs[refName].offsetTop;
    },

    /**
     * @description: 鼠标移动事件
     * @param {Object} e 鼠标事件源
     * @return {*}
     */
    move(refName, e) {
      const element = e.targetTouches[0];
      const obj = this.$refs[refName];
      const objWidth = obj.offsetWidth;
      const objHeight = obj.offsetHeight;
      const eClientX = element.clientX;
      const eClientY = element.clientY;
      const orignX = this.coordinate.client.x;
      const orignY = this.coordinate.client.y;
      const orignLeft = this.coordinate.elePosition.left;
      const orignTop = this.coordinate.elePosition.top;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      // 根据初始 client 位置计算移动距离(元素移动位置=元素初始位置+光标移动后的位置-光标点击时的初始位置)
      let x = orignLeft + (eClientX - orignX);
      let y = orignTop + (eClientY - orignY);
      // 限制可移动距离，不超出可视区域
      x =
        x <= 0 ? 0 : x >= screenWidth - objHeight ? screenWidth - objHeight : x;
      y =
        y <= 0 ? 0 : y >= screenHeight - objWidth ? screenHeight - objWidth : y;
      // 移动当前元素
      this.$refs[refName].style.left = x + "px";
      this.$refs[refName].style.top = y + "px";
    },
  },
};
</script>
<style lang='less' scoped>
.VideoPopu {
  z-index: 99999;
  position: absolute;
  width: 190px;
  height: 90px;
  transform: translateX(90px) rotate(90deg);
  transform-origin: 0 0;
  //border: 1px solid red;
  .videodialog {
    width: 100%;
    height: 100%;
  }
}
</style>
