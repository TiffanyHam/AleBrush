<!--
 * @Description: 设置页面
 * @version: 
 * @Author: HeZhen
 * @Date: 2020-10-23 14:40:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-28 11:39:01
-->
<template>
  <div class="setting flexC">
    <!-- 头部start -->
    <Header :selfB="selfB" :isRight="header_rightIcon" :backC="backC">
      <span slot="headerTitle">{{ $t("setting.header") }}</span>
    </Header>
    <!-- 头部end -->
    <!-- 内容设置start -->
    <div class="setting_main flexC">
      <div class="other_setting">
        <!-- 开关 -->
        <div class="flex modules_inner noBorder">
          <div class="flex_c">
            <span class="module_name">{{$t('setting.audio')}}</span>
            <span class="module_name lockTip">{{$t('setting.switchOn')}}</span>
          </div>
          <span class="VSwitch">
            <VSwitch :isOn="isLock" @afterChange="getChange"></VSwitch>
          </span>
        </div>
        <div
          @click="gotoBrushMethod(item.code)"
          v-for="(item, index) in settingGuide"
          :key="index"
          :class="
            index < settingGuide.length - 1
              ? 'common com_border flex'
              : 'common flex'
          "
        >
          <div class="common_left">
            <div class="setting_title">
              <span>{{ item.title }}</span>
            </div>
          </div>
          <div class="common_right flex">
            <div class="see">{{ $t("setting.otherOptions.see") }}</div>
            <div class="version1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容设置end -->
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';

export default {
  name: "Setting",
  inject: ["isDarks"],
  data() {
    return {
      selfB: true,
      backC: window.isDark ? "#000" : "#fff",
      header_rightIcon: false,
      isLock: true,// 音乐开关
      settingGuide: [
        { title: this.$t("setting.otherOptions.methodsU"), code: "0" }, //刷牙步骤
        { title: this.$t("setting.otherOptions.methodsI"), code: "1" }, //  代表使用方法
        { title: this.$t("setting.otherOptions.title2"), code: "2" }, //  代表常见问题
      ],
    };
  },
  mounted(){
      this.isLock = this.isMusic
  },
  computed:{
      ...mapState(['isMusic'])
  },
  methods: {
      ...mapActions(["saveMusic"]),
    /**
     * @description: 设置页面点击跳转刷牙方法
     * @param {Number} code 0 或 1
     * @return {*}
     */
    gotoBrushMethod(code) {
      if (code == 0) {
        this.$router.push("TeethSteps");
      } else if (code == 1) {
        this.$router.push("BrushMethods");
      } else {
        this.$router.push("CommonProblem");
      }
    },
    /**
     * @description:  VSwitch 组件派发事件
     * @param {Object} val 组件派发数据
     * @return {type}
     */
    getChange(val) {
        this.isLock = val;
        if (val) {
            this.saveMusic(val)
        } else {
            this.saveMusic(val)
        }
    },
  },
};
</script>

<style lang='scss' scoped>
.setting {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .setting_main {
    padding: 0 16px;
    flex: 1;
    .other_setting {
      flex: 1;
      background-color: #fff;

      .modules_inner {
        position: relative;
        background-color: #fff;
        height: 48px;
        width: 100%;
        //margin: 0 0 8px 0;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
        .VSwitch {
          // z-index: 9999;
          // display: inline-block;
          // width: 10px;
          // height: 30px;
          // border: 1px solid red;
          position: absolute;
          right: 0px;
          top: 7px;
        }
        .module_round {
          display: inline-block;
          width: 24px;
          height: 24px;
        }
        .module_name {
          line-height: 20px;
          font-size: 16px;
          color: #1a1a1a;
        }
        .lockTip {
          display: inline-block;
          width: 100%;
          // padding: 0 40px 0 0;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin: 6px 0 0 0;
        }
      }
      .noBorder {
        height: 64px;
        border: 0;
      }
      .flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .flex_c {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .other_title {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        height: 48px;
        line-height: 48px;
      }
      .common_right {
        .see {
          color: rgba(0, 0, 0, 0.9);
          font-size: 14px;
          margin-right: 4px;
        }
      }

      .common {
        justify-content: space-between;
        align-items: center;
        height: 48px;
        background-color: #fff;
        .common_left {
          .setting_title {
            color: rgba(0, 0, 0, 0.9);
            font-size: 16px;
          }
        }
        .version1 {
          display: inline-block;
          opacity: 0.38;
          width: 12px;
          height: 24px;
          background: url("../../assets/image/icon/light/setting_right.png")
            no-repeat center;
          background-size: auto 16px;
        }
      }
      .com_border {
        border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
      }
    }
  }
}
.disabled {
  pointer-events: none;
}
button :focus {
  outline: 0;
}
.flexC {
  display: flex;
  flex-direction: column;
}
.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.theme-dark {
  .setting {
    background-color: #000;
    .setting_main {
      .other_setting {
        background-color: #000;
        .common_right {
          .see {
            color: rgba(255, 255, 255, 0.86);
          }
        }
        .other_title {
          color: rgba(255, 255, 255, 0.6);
        }
        .common {
          background-color: #000;
          .common_left {
            .setting_title {
              color: rgba(255, 255, 255, 0.86);
            }
          }
          .version1 {
            background: url("../../assets/image/icon/dark/date_right.png")
              no-repeat center;
            background-size: auto 16px;
          }
        }
        .com_border {
          border-bottom: 0.00694rem solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
</style>