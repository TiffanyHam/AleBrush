<!--
 * @Date: 2020-08-24 16:54:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-27 09:19:25
 * @FilePath: \sweeper_branch1\src\components\common\VSwitch.vue
-->
<template>
    <div class="switchBtn">
        <span class="switch" :class="switchClass" @click="changeSwitch">
            <span class="toggle"></span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'VSwitch',
    props: {
        isOn: Boolean
    },
    data() {
        return {
            isSwitchOn: true
        };
    },
    computed: {
        switchClass() {
            return this.isSwitchOn ? 'on' : 'off';
        }
    },
    watch: {
        isOn: {
            handler: function (val) {
                this.isSwitchOn = val;
            },
            immediate: true
        }
    },
    methods: {
        //切换开关
        changeSwitch() {
            this.isSwitchOn = !this.isSwitchOn
            this.$emit("afterChange", this.isSwitchOn);
        }
    }
};
</script>

<style lang="scss" scoped>
.switch {
    position: relative;
    left: 0;
    padding: 0 2px;
    top: 0;
    width: 36px;
    border-radius: 10px;
    display: block;
    background: #007dff;
    height: 20px;
    .toggle {
        float: right;
        position: relative;
        width: 16px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #fff;
        z-index: 8;
        box-sizing: border-box;
    }
}
.switch.on {
    background: #007dff;
}
.switch.off {
    background-color: rgba(0, 0, 0, 0.1);
}
.switch.on > .toggle {
    float: right;
}
.switch.off > .toggle {
    float: left;
}
.theme-dark {
    .switchBtn {
        .switch.on {
            background: #006cde;
        }
        .switch.off {
            background: rgba(255, 255, 255, 0.4);
        }
    }
}
</style>
