<!--
 * @Author: your name
 * @Date: 2021-04-01 11:00:46
 * @LastEditTime: 2021-04-01 11:06:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\components\common\DateTitle.vue
-->
<template>
  <div class="time-title">
    <div class="calendar-icon" @click="prevBtn()"><div class="lt-icon hi-icon-public-right"></div></div>
    <div>{{timeTitle}}</div>
    <div class="calendar-icon" @click="nextBtn()"><div class="gt-icon hi-icon-public-right"></div></div>
  </div>
</template>

<script>
export default {
    name: 'DateTitle',
    props: {
        timeTitle: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            iconRight: ''
        };
    },
    created () {
        // window.isDark ? (this.iconRight = require("../images/dark_ic_right.svg")) : (this.iconRight = require("../assets/images/right.png"));
    },
    methods: {
        prevBtn: function () {
            this.$emit('prev-btn');
        },
        nextBtn: function () {
            this.$emit('next-btn');
        }
    }
};
</script>

<style lang="scss" scoped>
.basic-font {
  font-size: 14px;
  color: rgba(0, 0, 0, .6);
}

.time-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 18px;
  height: 48px;
  font-size: 14px;
  color: rgba(0, 0, 0, .6);

  .calendar-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 12px;
      height: 24px;
      opacity: 0.6;
      &.lt-icon {
        transform:rotate(180deg);
      }
    }
  }
}

.theme-dark {
  .basic-font {
    color: rgba(255, 255, 255, .6);
  }

  .time-title {
    color: rgba(255, 255, 255, .6);
  }
}
</style>
