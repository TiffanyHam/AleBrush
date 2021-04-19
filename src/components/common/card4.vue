<!--
 * @Author: your name
 * @Date: 2021-04-01 11:44:06
 * @LastEditTime: 2021-04-19 19:54:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\components\common\card4.vue
-->
<template>
    <div class="hi-card bg_card">
        <div class="item" :class="{line: index !== 0}" v-for="(item, index) in cardData" :key="index">
            <div class="top">
                <div class="num c_90">{{item.num}}</div>
                <div class="unit c_60" v-if="item.unit">{{item.unit}}</div>
                <div class="num c_90">{{item.nums}}</div>
                <div class="unit c_60" v-if="item.unit">{{item.units}}</div>
            </div>
            <div class="name c_60">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HiCard4',
    props: {
        cardData: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped>
.hi-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 8px;
        line-height: 1.33;
        .top {
            display: flex;
            align-items: baseline;
            .num {
                font-size: 24px;
            }
            .unit {
                margin-left: 2px;
                font-size: 12px;
            }
        }
        .name {
            margin-top: 2px;
            font-size: 12px;
        }
    }
}
.line::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 40px;
    width: 1px;
    border-left: 0.25px solid rgba(0, 0, 0, .2);
}
.theme-dark {
    .hi-card {
        background: #000;
    }
    .line::before {
        border-left: 0.25px solid rgba(255, 255, 255, .2);
    }
}
</style>