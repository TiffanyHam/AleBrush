<!--
 * @Description: 圆圈组件
 * @version: 
 * @Author: HeZhen
 * @Date: 2020-10-22 11:43:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-28 16:14:45
-->
<template>
  <div class="modules">
    <div
      class="modules_inner flex"
      v-for="(item, index) in modules"
      :key="index"
    >
      <span class="module_name">{{ item.name }}</span>
      <span class="module_round">
        <div
          @click="handleClick(item, index)"
          :class="selectNum == index ? 'radio radioLeftOn' : 'radio radioLeft'"
        ></div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectRound",
  props: {
    modules: {
      type: Array,
      default: () => [],
    },
    selectNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },

  components: {},

  watch: {
    status(n, o) {
      this.check = n;
    },
    check(n, o) {},
  },

  created() {},

  mounted() {},

  methods: {
    handleClick(item, index) {
      this.$emit("eventClick", item, index);
    },
  },
};
</script>
<style lang='scss' scoped>
.radio {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
}
.modules > .modules_inner:last-child {
  border: none;
}
.modules {
  padding: 0 16px;
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
      position: absolute;
      right: 0px;
    }
    .module_round {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    .module_name {
      line-height: 20px;
    }
    .lockTip {
      display: inline-block;
      width: 100%;
      padding: 0 40px 0 0;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      margin: 6px 0 0 0;
    }
  }
  .noBorder {
    height: 64px;
    border: 0;
  }
}
.module_noclick {
  pointer-events: none;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>