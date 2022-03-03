<template>
    <el-tabs v-model="tabsValue" class="low-code-tree-tabs">
        <el-tab-pane label="样式" name="1"></el-tab-pane>
        <el-tab-pane label="数据" name="2"></el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const tabsValue = ref("1");
</script>

<style lang="less" scoped>
.low-code-tree-tabs {
    :deep(.el-tabs__nav-wrap) {
        .el-tabs__nav {
            width: 100%;
            .el-tabs__item {
                color: #fff;
                font-size: 12px;
                width: 50%;
                text-align: center;
            }
            .el-tabs__active-bar {
                background-color: #3399ff;
                top: 0;
                width: 50% !important;
            }
            .is-active {
                background-color: #22242a;
            }
        }
        &:after {
            content: none;
        }
    }
}
</style>