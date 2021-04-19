<!--
 * @Author: your name
 * @Date: 2021-04-01 11:14:31
 * @LastEditTime: 2021-04-19 19:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\components\common\ElectricLabel.vue
-->
<template>
    <div class="electric-label">
        <div class="title colorB60">{{title}}</div>
        <div class="text">
          <div class="colorB60">{{average}}</div>
          <div class="num colorB90">{{score}}</div>
          <div class="colorB60">{{point}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElectricLabel',
    props: {
        title: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        },
        score: {
          type: Number,
          default: 20
        }
    },
    data() {
      return {
        average: this.$t("history.average"),
        point: this.$t("history.point"),
        exerciseCount: 0,
      }
    }
};
</script>

<style lang="scss" scoped>
.electric-label {
 // height: 65px;
  .title {
    text-align: center;
    font-size: 14px;
    line-height:0.51722222rem;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 14px;
    .num {
      font-size: 35px;
       line-height: 1.29305556rem;
      margin-right: 2px;
    }
  }
}
.theme-dark {
  .electric-label {
    color: rgba(255, 255, 255, .6);
    .num {
      color: rgba(255, 255, 255, .86);
    }
  }
}
</style>
