<template>
    <div class="desigin-header">
        <header class="flex justify-between items-center space-x-4">
            <div class="header-logo flex items-center">
                <img src="../../assets/logo.svg" />
                <span class="title">demo</span>
            </div>
            <div class="center-btn">
                <Button size="small" buttonType="click">组件</Button>
            </div>
            <div class="header-btn">
                <a-button class="">返回</a-button>
                <a-button class="">保存</a-button>
                <a-button type="primary">发布</a-button>
            </div>
        </header>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { Button } from '/@/components/antd/'
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
        .header-logo {
            padding-left: 10px;
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
    }
}
</style>