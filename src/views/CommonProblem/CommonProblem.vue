<template>
    <div class="commonProblem flexC">
        <!-- 头部start -->
        <div class="proHeader">
            <Header :isRight='header_rightIcon' :selfB='selfB' :backC='backC'>
                <span slot="headerTitle">{{ $t('CommonProbl.title2') }}</span>
            </Header>
        </div>
        <!-- 头部end -->
        <div class="mar"></div>
        <div class="methods_main" ref="scroll">
            <div class="wrapper">
                <div v-for="(item,index) in problems" :key="index" class="methods_item">
                    <div class="title">{{item.tip}}</div>
                    <div class="subtitle">{{item.subtip}}</div>
                    <div class="subtitle" v-if="index == 3">{{item.subtipMore}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BS from "better-scroll";
export default {
    name: "CommonProblem",
    data() {
        return {
            header_rightIcon: false,
            selfB: true,
            backC: window.isDark ? '#000' : '#fff',
            problems: [
                {
                    tip: this.$t('CommonProbl.tip'),
                    subtip:this.$t('CommonProbl.subtip')
                },
                {
                    tip: this.$t('CommonProbl.tip2'),
                    subtip:this.$t('CommonProbl.subtip2')
                },
                {
                    tip: this.$t('CommonProbl.tip3'),
                    subtip: this.$t('CommonProbl.subtip3')
                },
                {
                    tip: this.$t('CommonProbl.tip4'),
                    subtip: this.$t('CommonProbl.subtip4'),
                    subtipMore:this.$t('CommonProbl.subtipMore')
                },
                {
                    tip: this.$t('CommonProbl.tip5'),
                    subtip: this.$t('CommonProbl.subtip5')
                },
                {
                    tip: this.$t('CommonProbl.tip6'),
                    subtip: this.$t('CommonProbl.subtip6')
                },
            ],
            scroll: null,
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

    methods: {},
};
</script>
<style lang='scss' scoped>
.commonProblem {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    //padding: 0 8px;
    .proHeader {
        height: 80px;
    }
    .mar {
        height: 16px;
    }
    .methods_main {
        flex: 1;
        overflow: hidden;
        padding: 0 16px 0;
        .wrapper {
            .methods_item {
                margin-bottom: 24px;
                .title {
                    color: rgba(0, 0, 0, 0.9);
                    font-size: 20px;
                    line-height: 22px;
                    margin-bottom: 16px;
                }
                .subtitle {
                    color: rgba(0, 0, 0, 0.6);
                    font-size: 13px;
                    line-height: 18px;
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
    .commonProblem {
        background-color: #000;
        .methods_main {
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