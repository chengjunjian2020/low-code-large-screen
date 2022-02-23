<template>
    <a-collapse class="collapse-wrapper" v-model="collapseActive" :bordered="false">
        <template #expandIcon="{ isActive }">
            <caret-right-outlined style="color: #fff" :rotate="isActive ? 90 : 0" />
        </template>
        <a-collapse-panel
            v-for="category in menuList"
            :key="category.categoryName"
            :header="category.categoryName"
        >
            <div
                class="menu-item flex flex-col"
                v-for="(menu, index) in category.list"
                :key="index"
            >
                <img :src="menu.img" />
                <span class="menu">{{ menu.name }}</span>
            </div>
        </a-collapse-panel>
    </a-collapse>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import { CaretRightOutlined } from '@ant-design/icons-vue';
import lineCharts from "/@/assets/line.png"
const collapseActive = ref(0);
const menuList = reactive([
    {
        categoryName: "全部",
        list: [
            {
                img: lineCharts,
                name: "线状图",
            },
            {
                img: lineCharts,
                name: "饼状图",
            },
            {
                img: lineCharts,
                name: "柱状图",
            },
            {
                img: lineCharts,
                name: "单值百分比",
            }
        ]
    },
    {
        categoryName: "线状图",
        list: [
            {
                img: lineCharts,
                name: "线状图",
            },
            {
                img: lineCharts,
                name: "饼状图",
            },
            {
                img: lineCharts,
                name: "柱状图",
            },
            {
                img: lineCharts,
                name: "单值百分比",
            }
        ]
    }
])
</script>

<style lang="less" scoped>
.collapse-wrapper {
    background-color: #22242a;
    border: none;
    .ant-collapse-item {
        border-bottom: none;
        ::v-deep .ant-collapse-header {
            padding: 7px 16px;
            padding-left: 20px;
            color: #fff;
            font-size: 12px;
            border: 1px solid #2c2e34;
            background-color: #22242a;
            .anticon {
                left: 0;
            }
        }
        ::v-deep .ant-collapse-content {
            background-color: #22242a;
            .ant-collapse-content-box {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                padding: 0;
                padding-top: 10px;
                .menu-item {
                    margin: 5px 0px;
                    flex- img {
                        width: 75px;
                        height: 50px;
                    }
                    .menu {
                        color: #e9e9e9;
                        font-size: 12px;
                        padding-left: 6px;
                        margin: 8px 0;
                    }
                }
            }
        }
    }
}
</style>
