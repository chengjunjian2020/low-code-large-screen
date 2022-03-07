<template>
    <el-tabs v-model="tabsValue" class="low-code-tree-tabs">
        <el-tab-pane label="样式" name="1">
            <style-setting></style-setting>
        </el-tab-pane>
        <el-tab-pane label="数据" name="2">
            <div></div>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { styleSetting } from "./rightComponent";
import { ref } from "vue";
const tabsValue = ref("1");
</script>

<style lang="less" scoped>
.low-code-tree-tabs {
    :deep(.el-tabs__header) {
        margin: 0;
        .el-tabs__nav-wrap {
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
    :deep(.el-tabs__content) {
        .el-tab-pane > div {
            background: #22242a;
            height: calc(100vh - 79px);
            overflow: hidden;
        }
    }
}
</style>