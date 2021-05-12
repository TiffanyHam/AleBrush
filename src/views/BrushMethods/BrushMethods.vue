<template>
    <div class="brushMethods flexC">
        <!-- 头部start -->
        <Header :isRight="header_rightIcon">
            <span v-if="mode=='0'" slot="headerTitle">{{ $t('brushMethods.headerTitle2') }}</span>
            <span v-else slot="headerTitle">{{ $t('brushMethods.headerTitle2')}}</span>
        </Header>
        <!-- 头部end -->
        <div class="mar"></div>
        <div class="methods_main" ref="scroll">
            <div class="wrapper">
                <div v-for="(item,index) in text_cur" :key="index" class="methods_item">
                    <div class="title">{{item.tip}}</div>
                    <div class="subtitle">{{item.subtip}}</div>
                    <div class="img">
                        <span v-if="index < text_cur.length-1" class="back_img" :style="{backgroundImage: 'url(' +require('../../assets/image/product/light/'+item.img)+ ')'}"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BS from "better-scroll";
export default {
    name: "BrushMethods",
    data() {
        return {
            header_rightIcon: false,
            mode: null,
            text_cur: [
                {
                    tip: this.$t("brushMethods.tip7"),
                    subtip: this.$t("brushMethods.subtip7"),
                    img: "I_1.png",
                },
                {
                    tip: this.$t("brushMethods.tip8"),
                    subtip: this.$t("brushMethods.subtip8"),
                    img: "I_2.png",
                },
                {
                    subtip: this.$t("brushMethods.subtip9"),
                    img: this.$i18n.locale === "zh" ? "I_3.png" : "I_3_en.png",
                },
                {
                    subtip: this.$t("brushMethods.subtip10"),
                    img: "I_4.png",
                },
                {
                    subtip: this.$t("brushMethods.subtip11"),
                    img: this.$i18n.locale === "zh" ? "I_5.png" : "I_5_en.png",
                },
                {
                    subtip: this.$t("brushMethods.subtip12"),
                    img:"I_6.png"
                }
               
            ],
            scroll: null
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BS(this.$refs.scroll, {
                probeType: 3,
                click: true,
                scrollY: true,
            });
        });
    },
};
</script>
<style lang='scss' scoped>
.brushMethods {
    background-color: #fff;
    width: 100%;
    height: 100%;
   // padding: 0 8px;
    .mar {
        height: 16px;
    }
    .methods_main {
        flex: 1;
        padding: 0 16px 0;
        overflow: hidden;
        .wrapper {
            padding: 0 0 24px 0;
            .methods_item {
                margin-bottom: 24px;
                .title {
                    color: rgba(0, 0, 0, 0.9);
                    font-size: 19px;
                    margin-bottom: 16px;
                }
                .subtitle {
                    color: rgba(0, 0, 0, 0.6);
                    font-size: 13px;
                    line-height: 18px;
                }
                .img {
                    height: 215px;
                    width: 312px;
                    margin: 16px 0;
                    .back_img {
                        display: inline-block;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
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
}

.theme-dark {
    .brushMethods {
        background-color: #000;
        .methods_main {
            background-color: #000;
            .wrapper {
                .methods_item {
                    .title {
                        color: rgba(255, 255, 255, 0.86);
                    }
                    .subtitle {
                        color: rgba(255, 255, 255, 0.6);
                    }
                }
            }
        }
    }
}
</style>