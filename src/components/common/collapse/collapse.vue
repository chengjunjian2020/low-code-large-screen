<template>
    <el-collapse class="collapse-wrapper" accordion v-model="collapseActive">
        <el-collapse-item v-for="collapseItem in collapseList" :key="collapseItem.title">
            <template #title>
                <el-icon class="header-icon" :icon="JSON.stringify(collapseItem.list)">
                    <caret-right />
                </el-icon>
                {{ collapseItem.title }}
            </template>
            <slot :collapseItems="collapseItem.list"></slot>
        </el-collapse-item>
    </el-collapse>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { collapseProps } from "./props";
import { CaretRight } from '@element-plus/icons-vue'
const collapseActive = ref("");
const props = defineProps(collapseProps)
</script>

<style lang="less" scoped>
.collapse-wrapper {
    // background-color: #22242a;
    border: none;
    .el-collapse-item {
        border-bottom: none;
        :deep(.el-collapse-item__header) {
            transition: all 0.5s;

            padding: 7px 10px;
            color: #fff;
            font-size: 12px;
            border: 1px solid #2c2e34;
            background-color: #22242a;
            .header-icon {
                width: 14px;
                height: 14px;
                svg {
                    width: 100%;
                    height: 100%;
                }
                margin-right: 10px;
            }
            .el-collapse-item__arrow {
                display: none;
            }
            &.is-active {
                .header-icon {
                    transform: rotate(90deg);
                }
            }
        }
        :deep(.el-collapse-item__wrap) {
            background-color: #22242a;
            border: none;
            .el-collapse-item__content {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                padding: 0;
                padding-top: 10px;
            }
        }
    }
}
</style>