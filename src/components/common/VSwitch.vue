<!--
 * @Date: 2020-08-24 16:54:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-24 15:20:42
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
    padding: 0 0.055rem;
    top: 0;
    width: 1rem;
    border-radius: 0.277rem;
    display: block;
    background: #007dff;
    height: 0.55rem;
    .toggle {
        float: right;
        position: relative;
        width: 0.44rem;
        height: 0.44rem;
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
