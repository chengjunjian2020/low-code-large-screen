<template>
    <div class="global-style-setting">
        <div class="component-name">基础平面地图</div>
        <div class="content">
            <div class="header-setting">
                <header-setting></header-setting>
            </div>
            <tree-render></tree-render>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { headerSetting, treeRender } from './';
</script>

<style lang="less" scoped>
.global-style-setting {
    border-left: 1px solid #000;
    .content {
        height: calc(100vh - 79px);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .component-name {
        font-size: 12px;
        color: #fff;
        border-bottom: 1px solid #30343d;
        height: 36px;
        line-height: 36px;
        padding: 0 5%;
    }
}
</style>