<!--
 * @Description: 设置页面
 * @version: 
 * @Author: HeZhen
 * @Date: 2020-10-23 14:40:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-12 09:41:19
-->
<template>
    <div class="setting flexC">
        <!-- 头部start -->
        <Header :selfB='selfB' :isRight="header_rightIcon" :backC='backC'>
            <span slot="headerTitle">{{$t('setting.header')}}</span>
        </Header>
        <!-- 头部end -->
        <!-- 内容设置start -->
        <div class="setting_main flexC">
            <div class="other_setting">
                <div @click="gotoBrushMethod(item.code)" v-for="(item,index) in settingGuide" :key="index" :class=" index < settingGuide.length-1 ? 'common com_border flex':'common flex'">
                    <div class="common_left">
                        <div class="setting_title">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                    <div class="common_right flex">
                       <div class="see">{{$t('setting.otherOptions.see')}}</div>
                       <div class="log_right"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 内容设置end -->
    </div>
</template>

<script>
export default {
    name: "Setting",
    inject: ['isDarks'],
    data() {
        return {
            selfB: true,
            backC: window.isDark ? '#000' : '#fff',
            header_rightIcon: false,
            settingGuide: [
                { title: this.$t("setting.otherOptions.methodsU"), code: "0" }, //刷牙步骤
                { title: this.$t("setting.otherOptions.methodsI"), code: "1" }, //  代表使用方法
                { title: this.$t("setting.otherOptions.title2"), code: "2" }, //  代表常见问题
            ],
          
        };
    },


    methods: {
        /**
         * @description: 设置页面点击跳转刷牙方法
         * @param {Number} code 0 或 1
         * @return {*}
         */
        gotoBrushMethod(code) {
            if (code == 0) {
                this.$router.push("TeethSteps");
            } else if(code == 1){
                this.$router.push("BrushMethods");
            } else {
                this.$router.push("CommonProblem");
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
            .other_title {
                color: rgba(0, 0, 0, 0.6);
                font-size: 14px;
                height: 48px;
                line-height: 48px;
            }
            .common_right{
               .see{
                  color: rgba(0, 0, 0, 0.6);
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
                .log_right {
                    display: inline-block;
                     width: 12px;
                    height: 24px;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0 0 1px 4px;
                    opacity: 0.38;
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
                .common_right{
                .see{
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
                    // .log_right {
                    //     background: url("../../assets/image/icon/dark/date_right.png")
                    //         no-repeat center;
                    //     background-size: auto 16px;
                    // }
                }
                .com_border {
                    border-bottom: 0.00694rem solid rgba(255, 255, 255, 0.2);
                }
            }
        }
    }
}
</style>