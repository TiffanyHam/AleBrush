<!--
 * @Descripttion: 
 * @version: 
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-23 17:21:03
-->
<template>
  <div id="app" :class="{'theme-dark': isDark}">
    <transition :name="transitionName">
        <router-view v-if="isRouterAlive" class="animate"></router-view>
    </transition>
  </div>
</template>
<script>
import { getLanguage } from "./utils/tool";
import mixin from "@/mixins/bleConnect"; // 引入mixin文件

export default {
  mixins: [mixin],
  provide(){
        return {
            reload: this.reload,
            isDarks: this.isDark
        }
    },
  data() {
    return {
       transitionName: "", //跳转方向!!!!
        isDark: false,
        isRouterAlive: true
    };
  },
  created() {
     this.$router.beforeEach((to, from, next) => {
            const routeDeep = [];

            for (let i = 0; i < this.$router.options.routes.length; i++) {
                routeDeep.push(this.$router.options.routes[i].name);
            }
            const toDep = routeDeep.indexOf(to.name);
            const fromDep = routeDeep.indexOf(from.name);
            //toDep的值大于fromDep的值往右移动
            this.transitionName = toDep > fromDep ? "back" : "to";
            next();
        });
        // 设置语言
        this.$i18n.locale = getLanguage();
        // 获取手机模式  
        this.getSystemInfo()    
  },
  methods: {
    /*
         * 获取手机系统信息
        */
      getSystemInfo() {
            window.hilink && window.hilink.getSystemInfoSync && window.hilink.getSystemInfoSync('getSystemInfoSyncCallBack')
            window.getSystemInfoSyncCallBack = info => {
                let data = JSON.parse(info);
                if(data.platform == "iOS") {
                    //console.log("iOS设备")
                    window.ios = true;
                } else {
                    //console.log("andorid设备")
                    window.ios = false;
                    this.isDark = window.hilink && window.hilink.getDarkMode && window.hilink.getDarkMode() === 2;
                    window.isDark = this.isDark;
                }
            }
        },
        reload(){
            this.isRouterAlive = false;
            this.$nextTick(()=>{
                this.isRouterAlive = true;
            })
        }
  }
};
</script>


<style lang='scss' scoped>
//@import url("../style/color.scss"); /*引入公共样式*/
// @import url("../../style/icon.scss");
// @import url('../../style/color.scss');
/* 过渡 */
body {
    background-color: #f7f7f7;
}
.a {
    width: 100%;
    height: 100%;
}

.animate {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

@keyframes left-in {
    0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes left-out {
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    100% {
        opacity: 0.3;
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes right-in {
    0% {
        opacity: 0.3;
        transform: translate3d(100%, 0, 0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes right-out {
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    100% {
        opacity: 0.3;
        transform: translate3d(100%, 0, 0);
    }
}
</style>