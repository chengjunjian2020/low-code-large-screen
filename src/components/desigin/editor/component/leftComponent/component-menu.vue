<template>
    <Collapse :collapseList="menuList">
        <template v-slot="item">
            <div
                class="menu-item flex flex-col"
                v-for="(component, index) in item.collapseItems"
                :key="index"
            >
                <img :src="component.img" />
                <span class="menu">{{ component.name }}</span>
            </div>
        </template>
    </Collapse>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import lineCharts from "/@/assets/line.png"
import { Collapse } from "/@/components/common/"
const collapseActive = ref(0);
const menuList = reactive([
    {
        title: "全部",
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
        title: "线状图",
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
// .collapse-wrapper {
//     // background-color: #22242a;
//     border: none;
//     .el-collapse-item {
//         border-bottom: none;
//         :deep(.el-collapse-item__header) {
//             transition: all 0.5s;

//             padding: 7px 10px;
//             color: #fff;
//             font-size: 12px;
//             border: 1px solid #2c2e34;
//             background-color: #22242a;
//             .header-icon {
//                 width: 14px;
//                 height: 14px;
//                 svg {
//                     width: 100%;
//                     height: 100%;
//                 }
//                 margin-right: 10px;
//             }
//             .el-collapse-item__arrow {
//                 display: none;
//             }
//             &.is-active {
//                 .header-icon {
//                     transform: rotate(90deg);
//                 }
//             }
//         }
//         :deep(.el-collapse-item__wrap) {
//             background-color: #22242a;
//             border: none;
//             .el-collapse-item__content {
//                 // .ant-collapse-content-box {
//                 display: flex;
//                 justify-content: space-evenly;
//                 flex-wrap: wrap;
//                 padding: 0;
//                 padding-top: 10px;
//                 .menu-item {
//                     margin: 5px 0px;
//                     flex- img {
//                         width: 75px;
//                         height: 50px;
//                     }
//                     .menu {
//                         color: #e9e9e9;
//                         font-size: 12px;
//                         padding-left: 6px;
//                         margin: 8px 0;
//                     }
//                 }
//             }
//         }
//     }
// }

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
</style>
