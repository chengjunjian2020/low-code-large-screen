<template>
    <div class="desigin-header">
        <header class="flex justify-between items-center space-x-4">
            <div class="header-logo flex items-center">
                <img src="../../assets/logo.svg" />
                <span class="title">demo</span>
            </div>
            <div class="center-btn flex">
                <Button buttonType="click" :active="true">组件</Button>
                <Button buttonType="click" :active="true">层数</Button>
                <Button buttonType="click" :active="true">配置</Button>
                <Button buttonType="click">数据网关</Button>
            </div>
            <div class="flex header-btn">
                <Button buttonType="hover">返回</Button>
                <Button buttonType="hover">预览</Button>
                <Button buttonType="hover">发布</Button>
            </div>
        </header>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { Button } from '/@/components/common/'
console.log(Button)
</script>

<style lang="less" scoped>
.desigin-header {
    display: flex;
    width: 100%;
    position: fixed;
    height: 40px;
    line-height: 40px;
    padding: 0;
    z-index: 1;
    background: #22242a 10px -3px no-repeat;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 9%);
    border-bottom: 1px solid #000;
    header {
        width: 100%;
        padding: 0px 10px;

        .header-logo {
            img {
                width: 30px;
                height: 30px;
            }
            .title {
                margin-left: 10px;
                font-size: 18px;
                color: #fff;
            }
        }
        .custome-button {
            margin-right: 2px;
        }
    }
}
</style>