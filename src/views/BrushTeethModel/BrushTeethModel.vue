
<template>
  <div class="brushTeethModel">
    <!-- 头部start -->
    <Header :isRight="headerIcon" :backC="backC" :selfB="selfB">
      <template slot="headerTitle">{{ $t("index.brushmode") }}</template>
    </Header>
    <!-- 头部end -->
    <div class="modelTitle">
      <div class="word">{{ $t("index.brushmode") }}</div>
    </div>
    <!-- 模式start -->
    <!-- <div class="modules">
            <div :class=" isLock ? 'modules_inner flex module_noclick' : 'modules_inner flex'" v-for="(item,index) in modules" :key="index">
                <span class="module_name">{{item.name}}</span>
                <span class="module_round">
                    <Round :status="item.check" @changeStatus="getRoundStatus(index,arguments,item.index)"></Round>
                </span>
            </div>
        </div> -->
    <SelectRound
      :modules="modules"
      v-show="isShow"
      :selectNum="selectIndex"
      @eventClick="modeClick"
    ></SelectRound>
    <div class="modelTitle">
      <div class="word">{{ $t("BrushTeethVigor.teethVigor") }}</div>
    </div>
    <SelectRound
      :modules="modules1"
      v-show="isShow"
      :selectNum="selectIndex1"
      @eventClick="vigorClick"
    ></SelectRound>
    <!-- <div class="modules">
      <div
        :class="
          isLock ? 'modules_inner flex module_noclick' : 'modules_inner flex'
        "
        v-for="(item, index) in modules1"
        :key="index"
      >
        <span class="module_name">{{ item.name }}</span>
        <span class="module_round">
          <Round
            :status="item.check"
            @changeStatus="getRoundStatus1(index, arguments)"
          ></Round>
        </span>
      </div>
    </div> -->
    <!-- 模式end -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  name: "BrushTeethModel",
  data() {
    return {
      boothData: null,
      // 头部组件参数
      selfB: true,
      backC: window.isDark ? "#000" : "fff",
      headerIcon: false,
      selectIndex: 0,
      selectIndex1:0,
      isShow: true,
      // 模式数组
      modules: [
        {
          name: this.$t("BrushTeethModel.level1"),
          index: 0,
          key: "A1",
        },
        {
          name: this.$t("BrushTeethModel.level2"),
          index: 1,
          key: "A2",
        },
        {
          name: this.$t("BrushTeethModel.level3"),
          index: 2,
          key: "A3",
        },
        {
          name: this.$t("BrushTeethModel.level4"),
          index: 3,
          key: "A4",
        },
      ],
      modules1: [
        {
          name: this.$t("BrushTeethVigor.Vigor1"),
          index: 0,
          key: "B1",
        },
        {
          name: this.$t("BrushTeethVigor.Vigor2"),
          index: 1,
          key: "B1",
        },
        {
          name: this.$t("BrushTeethVigor.Vigor3"),
          index: 2,
          key: "B1",
        },
      ],
      // 档位锁定
      isLock: false,
      flash: false,
    };
  },
  filters: {
    /**
     * @description: 刷牙模式显示转换
     * @param {*} status
     * @param {*} te
     * @return {*}
     */
    brushMode(status, te) {
      const statusMap = {
        0: te("BrushTeethModel.level1"),
        1: te("BrushTeethModel.level2"),
        2: te("BrushTeethModel.level3"),
        3: te("BrushTeethModel.level4"),
      };
      return statusMap[status];
    },
  },
  watch: {
    cleanMOde(n) {
      this.selectIndex = n;
    },
  },
  computed: {
    ...mapState(["cleanMOde"]),
  },
  created() {},
  mounted() {
    this.selectIndex = this.cleanMOde;
  },
  methods: {
    ...mapActions(["saveMode","saveVigo"]),
    /**
     * @description: 模式选择
     * @param {*} val
     * @return {*}
     */    
    modeClick(val) {
      this.selectIndex = val.index;
      this.saveMode(this.selectIndex);
    },
    /**
     * @description: 刷牙力度
     * @param {*} val
     * @return {*}
     */    
    vigorClick(val){
      this.selectIndex1 = val.index;
      this.saveVigo(this.selectIndex1);
    },
    
    /**
     * @description: 过滤器中i18n
     * @param {*} arg
     * @return {*}
     */
    te(arg) {
      const hasKey = this.$te(arg);
      if (hasKey) {
        const result = this.$t(arg);
        return result;
      }
      return arg;
    }
  },
};
</script>


<style lang='scss' scoped>
.brushTeethModel {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  .modelTitle {
    padding: 0 16px;
    .word {
      font-size: 14px;
      color: #1a1a1a;
      height: 48px;
      width: 100%;
      line-height: 48px;
      border-bottom: 0.00694rem solid rgba(0, 0, 0, 0.2);
    }
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

.theme-dark {
  .brushTeethModel {
    background-color: #000;
    .modules {
      .modules_inner {
        background-color: #000;
        color: rgba(255, 255, 255, 0.86);
        border-bottom: 0.00694rem solid rgba(255, 255, 255, 0.2);
        .lockTip {
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .noBorder {
        border: 0;
      }
    }
  }
}
</style>