<template>
    <div class="hi-errTip">
        <div class="icon ic-err"></div>
        <div class="msg">{{tip}}</div>
    </div>
</template>

<script>
export default {
    name: 'HiErrtip',
    props: {
        tip: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped>
.hi-errTip {
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 100vw;
    height: 48px;
    font-size: 16px;
    background-color: #fff4f4;
    color: #fb2a2d;
    position: fixed;
    top: 80px;
    .msg {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .icon {
        height: 24px;
        width: 24px;
        margin-right: 16px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
.theme-dark {
    .hi-errTip {
        background-color: #372222;
        color: #e64548;
    }
}
</style>
