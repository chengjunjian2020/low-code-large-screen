<template>
    <Collapse :collapseList="menuList">
        <template v-slot="item">
            <div
                class="menu-item flex flex-col"
                v-for="(component, index) in item.collapseItems"
                :key="index"
                @click="clickMenu(component)"
                @mousedown="componentMouseDown($event, component)"
                @mouseleave="componentMouseLeave($event, component)"
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
import { useAppStore } from "/@/store/modules/app";
import * as echarts from 'echarts';
const collapseActive = ref(0);
const menuList = reactive([
    {
        title: "全部",
        list: [
            {
                img: lineCharts,
                name: "线状图",
                option: {
                    backgroundColor: '#080b30',
                    title: {
                        text: '哎呦,不错哦',
                        textStyle: {
                            align: 'center',
                            color: '#fff',
                            fontSize: 20,
                        },
                        top: '5%',
                        left: 'center',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 255, 233,0)',
                                        },
                                        {
                                            offset: 0.5,
                                            color: 'rgba(255, 255, 255,1)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 255, 233,0)',
                                        },
                                    ],
                                    global: false,
                                },
                            },
                        },
                    },
                    grid: {
                        top: '15%',
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        // containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: {
                                show: true,
                            },
                            splitArea: {
                                // show: true,
                                color: '#f00',
                                lineStyle: {
                                    color: '#f00',
                                },
                            },
                            axisLabel: {
                                color: '#fff',
                            },
                            splitLine: {
                                show: false,
                            },
                            boundaryGap: false,
                            data: ['A', 'B', 'C', 'D', 'E', 'F'],
                        },
                    ],

                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            // max: 140,
                            splitNumber: 4,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(255,255,255,0.1)',
                                },
                            },
                            axisLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                                margin: 20,
                                textStyle: {
                                    color: '#d1e6eb',
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],
                    series: [
                        {
                            name: '注册总量',
                            type: 'line',
                            // smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: 25,
                            lineStyle: {
                                normal: {
                                    color: '#6c50f3',
                                    shadowColor: 'rgba(0, 0, 0, .3)',
                                    shadowBlur: 0,
                                    shadowOffsetY: 5,
                                    shadowOffsetX: 5,
                                },
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#6c50f3',
                                },
                            },
                            itemStyle: {
                                color: '#6c50f3',
                                borderColor: '#fff',
                                borderWidth: 3,
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 0,
                                shadowOffsetY: 2,
                                shadowOffsetX: 2,
                            },
                            tooltip: {
                                show: false,
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: 'rgba(108,80,243,0.3)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(108,80,243,0)',
                                            },
                                        ],
                                        false
                                    ),
                                    shadowColor: 'rgba(108,80,243, 0.9)',
                                    shadowBlur: 20,
                                },
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
                        },
                        {
                            name: '注册总量',
                            type: 'line',
                            // smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: 25,
                            lineStyle: {
                                normal: {
                                    color: '#00ca95',
                                    shadowColor: 'rgba(0, 0, 0, .3)',
                                    shadowBlur: 0,
                                    shadowOffsetY: 5,
                                    shadowOffsetX: 5,
                                },
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#00ca95',
                                },
                            },

                            itemStyle: {
                                color: '#00ca95',
                                borderColor: '#fff',
                                borderWidth: 3,
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 0,
                                shadowOffsetY: 2,
                                shadowOffsetX: 2,
                            },
                            tooltip: {
                                show: false,
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: 'rgba(0,202,149,0.3)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(0,202,149,0)',
                                            },
                                        ],
                                        false
                                    ),
                                    shadowColor: 'rgba(0,202,149, 0.9)',
                                    shadowBlur: 20,
                                },
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
                        },
                    ],
                },
            },
            {
                img: lineCharts,
                name: "饼状图",
                option: {
                    title: {
                        text: '2019年销售水量和主营业务收入对比',
                        textStyle: {
                            align: 'center',
                            color: '#fff',
                            fontSize: 20,
                        },
                        top: '3%',
                        left: '10%',
                    },
                    backgroundColor: '#0f375f',
                    grid: {
                        top: '25%',
                        bottom: '10%', //也可设置left和right设置距离来控制图表的大小
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                            },
                        },
                    },
                    legend: {
                        data: ['销售水量', '主营业务'],
                        top: '15%',
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                    xAxis: {
                        data: [
                            '当年完成水量',
                            '去年同期水量',
                            '滚动目标值水量',
                            '全年目标值水量',
                            '当年完成金额',
                            '去年同期金额',
                            '滚动目标金额',
                            '全年目标值',
                        ],
                        axisLine: {
                            show: true, //隐藏X轴轴线
                            lineStyle: {
                                color: '#01FCE3',
                            },
                        },
                        axisTick: {
                            show: true, //隐藏X轴刻度
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ebf8ac', //X轴文字颜色
                            },
                        },
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name: '亿元',
                            nameTextStyle: {
                                color: '#ebf8ac',
                            },
                            splitLine: {
                                show: false,
                            },
                            axisTick: {
                                show: true,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#FFFFFF',
                                },
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#ebf8ac',
                                },
                            },
                        },
                        {
                            type: 'value',
                            name: '同比',
                            nameTextStyle: {
                                color: '#ebf8ac',
                            },
                            position: 'right',
                            splitLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                formatter: '{value} %', //右侧Y轴文字显示
                                textStyle: {
                                    color: '#ebf8ac',
                                },
                            },
                        },
                        {
                            type: 'value',
                            gridIndex: 0,
                            min: 50,
                            max: 100,
                            splitNumber: 8,
                            splitLine: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)'],
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            name: '销售水量',
                            type: 'line',
                            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                            smooth: true, //平滑曲线显示
                            showAllSymbol: true, //显示所有图形。
                            symbol: 'circle', //标记的图形为实心圆
                            symbolSize: 10, //标记的大小
                            itemStyle: {
                                //折线拐点标志的样式
                                color: '#058cff',
                            },
                            lineStyle: {
                                color: '#058cff',
                            },
                            areaStyle: {
                                color: 'rgba(5,140,255, 0.2)',
                            },
                            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
                        },
                        {
                            name: '主营业务',
                            type: 'bar',
                            barWidth: 15,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#00FFE3',
                                        },
                                        {
                                            offset: 1,
                                            color: '#4693EC',
                                        },
                                    ]),
                                },
                            },
                            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
                        },
                    ],
                },
            },
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
        ]
    }
])
const clickMenu = (component: any) => {
    console.log(component)
}
const componentMouseDown = (event: MouseEvent, component: any) => {
    console.log(event);
    console.log(component);
}
const componentMouseLeave = (event: MouseEvent, component: any) => {
    console.log(event);
    console.log(component);
    const appStore = useAppStore();
    console.log(appStore.getWorkspace)
}
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
