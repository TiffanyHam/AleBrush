<!--
 * @Author: your name
 * @Date: 2021-05-19 15:06:37
 * @LastEditTime: 2021-05-26 18:57:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Olybo\src\Pages\Brushing\video.vue
-->
<template>
 <div class="video-box" ref="videoBox">
        <!-- <video controls='controls' webkit-playsinline='true' playsinline='true' x5-playsinline="" x-webkit-airplay="allow"
          loop='true' autoplay muted style='width: 100%; height: 100%;' ref="videoPlayer" id="videoPlayer" class="home-video"
          x5-video-player-type='h5' x5-video-player-fullscreen='true'>
          <source :src="srcVideo" type="video/mp4">
        </video> -->
         <video
        ref="videoPlayer"
        :src="srcVideo"
        muted
        playsinline
         webkit-playsinline="true"
        class="video videoPlayer"
        preload
        x-webkit-airplay='allow'
      ></video>
      </div>
</template>
<script>
export default {
  data() {
    return {
      srcVideo:''
    };
  },
  methods: {
    open() {
      let video = this.$refs.videoPlayer;
      this.srcVideo = "https://www.kinyooo.com/media/2DChinese.mp4"
      window.hilink.setRequestedOrientation(true)
      video.muted = false
      video.play();
      video.ontimeupdate = function () {
        //获取当前的播放时间
        console.log(video.currentTime);
        //false 点击了播放  true 点击了暂停
        console.log(video.paused);
      };
      console.log("jump>>>>");
    },
    myBrowser(){
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    console.log(userAgent,'userAgent')
    var isOpera = userAgent.indexOf("Opera") > -1
    if (isOpera) {
        return "Opera"
    } //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF"
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
         return "Chrome"
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari"
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE"
    } //判断是否IE浏览器
}
//以下是调用上面的函数
  },
  mounted() {
    this.open();
    var mb = this.myBrowser()
    console.log(mb,'mb')

  },
};
</script>
<style lang='less' scoped>
.banner {
  height: 100%;
  width: 100%;
  .video {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
}
</style>