<!--
 * @Descripttion: 
 * @version: 
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-23 15:07:52
-->
<template>
  <div id="app" :class="{'theme-dark': isDark}">
    <transition name="fade-transform" mode="out-in">
        <router-view v-if="isRouterAlive" class="animate"></router-view>
    </transition>
  </div>
</template>
<script>
import { getLanguage } from "./utils/tool";
import reportData from "./utils/reportData";
// import mixin from "@/mixins/bleConnect"; // 引入mixin文件

export default {
//   mixins: [mixin],
  provide(){
        return {
            reload: this.reload,
            isDarks: this.isDark
        }
    },
  data() {
    return {
        //transitionName: "", //跳转方向!!!!
        isDark: false,
        isRouterAlive: true
    };
  },
  created() {
     reportData.getDevId();
     this.$router.beforeEach((to, from, next) => {
            const routeDeep = [];

            for (let i = 0; i < this.$router.options.routes.length; i++) {
                routeDeep.push(this.$router.options.routes[i].name);
            }
            const toDep = routeDeep.indexOf(to.name);
            const fromDep = routeDeep.indexOf(from.name);
            //toDep的值大于fromDep的值往右移动
            //this.transitionName = toDep > fromDep ? "back" : "to";
            next();
        });
        // 设置语言
        this.$i18n.locale = getLanguage();
        // 获取手机模式  
        this.getSystemInfo()   

        //在页面加载时读取sessionStorage里的状态信息
        if (localStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))));
        localStorage.removeItem('store');
        }
    
        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state))
        })
  },
  mounted() {
    console.log('app-mounted', window.isDark)
    if (window.isDark) {
      const $body = document.getElementsByTagName('body')[0]
      console.log('$body', $body)
      $body.style.background = '#000'
    }
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
/* 过渡 */
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
/* 
enter-active 定义进入过渡的结束状态
leave-active 定义离开过渡的结束状态
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.1s;
}

/* 
enter定义进入过渡的开始状态
 */
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
/* 
leave-to离场动画结束后的状态
 */
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

// .to-enter-active {
//     animation-name: left-in;
//     animation-duration: 0.3s;
// }

// .to-leave-active {
//     animation-name: right-out;
//     animation-duration: 0.3s;
// }

// .back-enter-active {
//     animation-name: right-in;
//     animation-duration: 0.3s;
// }

// .back-leave-active {
//     animation-name: left-out;
//     animation-duration: 0.3s;
// }
// @keyframes left-in {
//     0% {
//         opacity: 0;
//         transform: translate3d(-100%, 0, 0);
//     }

//     100% {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// }

// @keyframes left-out {
//     0% {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }

//     100% {
//         opacity: 0.3;
//         transform: translate3d(-100%, 0, 0);
//     }
// }

// @keyframes right-in {
//     0% {
//         opacity: 0.3;
//         transform: translate3d(100%, 0, 0);
//     }

//     100% {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// }

// @keyframes right-out {
//     0% {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }

//     100% {
//         opacity: 0.3;
//         transform: translate3d(100%, 0, 0);
//     }
// }
</style>