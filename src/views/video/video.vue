<!--
 * @Author: your name
 * @Date: 2021-05-07 09:24:54
 * @LastEditTime: 2021-05-07 09:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\video\video.vue
-->
<template>
    <div class="video">
        <div class="iconLeft_header" @click="closeVideo"></div>
        <video src="https://www.kinyooo.com/media/2DChinese.mp4" loop controls controlslist="nodownload"></video>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.phoneScreenDirection(true); //横屏
    },
    methods:{
         phoneScreenDirection(dir) {
            window.hilink && window.hilink.setRequestedOrientation && window.hilink.setRequestedOrientation(dir);
        },
        closeVideo(){
            this.phoneScreenDirection(false); //竖屏
            this.$router.push('/');
        }
    }
}
</script>
<style scoped lang="scss">
.video{
    position: relative;
  video{
      width: 100%;
      height: 100%;
  }
  .iconLeft_header{
      width: 48px;
      height: 48px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 5%;
      left: 5%;
      z-index: 999;
  }
}
</style>