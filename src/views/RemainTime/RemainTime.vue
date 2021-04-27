<!--
 * @Description: 刷头剩余页面
 * @version: 
 * @Author: HeZhen
 * @Date: 2020-10-23 14:40:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-27 09:37:12
-->
<!--  -->
<template>
    <div class="remainTime flexC">
        <!-- 头部start -->
        <div style="height:'80px'">
            <Header :isRight="header_rightIcon" :selfB='selfB' :backC='backC'>
                <span slot="headerTitle">{{$t('RemainTime.header')}}</span>
            </Header>
        </div>
        <!-- 头部end -->
        <div class="main flexC">
            <div v-if="show_realValue" class="progress flexC">
                <Cprogress :realValue="realValue"></Cprogress>
            </div>
            <div v-if="show_realValue" class="doctorWord">
                {{$t("RemainTime.doctorWord")}}
            </div>
            <div class="proposal"> {{$t("RemainTime.proposal")}}</div>

            <!-- 刷头start -->
            <div class="footer flexC">
                <button @click="resetime" class='btn'>{{$t('RemainTime.resetDay')}}</button>
            </div>
        </div>
        <Dialog :visiable="dialogVisiable" @sendData='getDialogData' :isReplace='true'></Dialog>
    </div>
</template>

<script>
import Dialog from './ResetDialog.vue'
import reportData from "../../utils/reportData";

export default {
    name: "RemainTime",
    data() {
        return {
            dialogVisiable: false,
            // 头部右侧图标
            header_rightIcon: false,
            selfB: true,
            backC: window.isDark ? '#000' : '#fff',
            // 实际天数
            realValue: 60,
            show_realValue: true
        };
    },

    components: {
        Dialog
    },

    computed: {
       
    },
    watch: {
        dialogVisiable(n, o) { },
    },
    created() {
    },
    mounted() {
        this.realValue = parseInt(this.$route.query.day)
    },

    methods: {
        /**
         * @description: 重置时间按钮
         * @param {type}
         * @return {type}
         */
        resetime() {
            this.dialogVisiable = true;
        },
    
        /**
         * @description: 弹窗派发事件  重置时间--确认按钮
         * @param {*}
         * @return {*}
         */
        getDialogData(val) {  
            this.dialogVisiable = val.componentsVisiable;
            if (val.value) {
                reportData.resize(new Date().getTime() + 1000)
                this.realValue = 60;
            }
        }
    },
};
</script>



<style lang='scss' scoped>
.remainTime {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    position: relative;
    .main {
        width: 100%;
        background-color: #fff;
        flex: 1;
        .progress {
            margin: 24px 0 0 0;
            width: 100%;
            height: 240px;
            //height: 194px;
            //border: 1px solid red;
            box-sizing: border-box;
        }
        .doctorWord {
            // border: 1px solid red;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.9);
            margin-top: 32px;
            margin-bottom: 25px;
        }
        .proposal {
            margin: 0 16px;
            line-height: 20px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.9);
        }
        .footer {
            width: 100%;
            text-align: center;
            background-color: #fff;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom: 24px;
            .btn {
                height: 36px;
                width: 50%;
                text-align: center;
                border-radius: 18px;
                border: 0;
                background-color: rgba(0, 0, 0, 0.05);
                outline: none;
                font-size: 16px;
                color: #007dff;
            }
        }
    }
}
button :focus {
    outline: 0;
}
.flexR {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.flexC {
    display: flex;
    flex-direction: column;
}
.flexContent {
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-dark {
    .remainTime {
        background-color: #000;
        .main {
            background-color: #000;
            .doctorWord,.proposal {
                color: rgba(255, 255, 255, 0.86);
            }
            .footer {
                background-color: #000;
                .btn {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: #3f97e9;
                }
            }
        }
    }
}
</style>