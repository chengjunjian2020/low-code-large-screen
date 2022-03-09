<template>
    <div id="big-ecology-screen">
        <div ref="currentEchartsDom" :style="getStyle"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, onMounted, computed } from "vue";
import useWindowResize from "/@/hooks/useWindowResize";
import usePageScale from "/@/hooks/usePageScale";
import * as echarts from 'echarts';
import { chartsProps } from "./props";
const props = defineProps(chartsProps);
let currentChart: echarts.ECharts | null = null;
const currentEchartsDom = ref();

watch(() => props.option, (options) => {
    if (!options) {
        return;
    }
    nextTick(() => {
        loadCharts(options);
    })
})
onMounted(() => {
    initCharts(props.option as echarts.EChartsOption);
    onResizeCharts();
    usePageScale(document.querySelector(':root') as Element);
})
const getStyle = computed(() => {
    const { width, height } = props;
    return `width: ${width}px;height: ${height}px`
})
const initCharts = (options: echarts.EChartsOption) => {
    currentChart = echarts.init(currentEchartsDom.value as HTMLElement, undefined, { devicePixelRatio: 2.5 });
    currentChart.setOption((options as any), { lazyUpdate: true, notMerge: true });
}
const loadCharts = (options: any) => {
    (currentChart as echarts.ECharts).setOption((options as any), { lazyUpdate: true, notMerge: true });
}
const onResizeCharts = () => {
    useWindowResize((width: any, height: any) => {
        currentChart?.resize();
    })
}

const pageScale = () => {
    let width = 1920;
    let height = 1080;
    let zoomX = document.documentElement.offsetWidth / width;

    let zoomY = document.documentElement.offsetHeight / height;
    useScaleType(zoomX, zoomY);

    window.onresize = () => {
        zoomX = document.documentElement.offsetWidth / width;
        zoomY = document.documentElement.offsetHeight / height;
        useScaleType(zoomX, zoomY);
    };
};
//缩放
const useScaleType = (zoomX: number, zoomY: number) => {
    let bigScreen = document.getElementById("big-ecology-screen");
    if (bigScreen) {
        bigScreen.style.transform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.msTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.WebkitTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.MozTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.OTransform = "scale(" + zoomX + "," + zoomY + ")";
        bigScreen.style.transformOrigin = "left top";
        // bigScreen.style.msTransformOrigin = "left top";
        // bigScreen.style.WebkitTransformOrigin = "left top";
        // bigScreen.style.MozTransformOrigin = "left top";
        // bigScreen.style.OTransformOrigin = "left top";
    }

};
</script>

<style lang="less" scoped>
#big-ecology-screen {
    transform: scale(var(--page-scale-zoomX), var(--page-scale-zoomY));
    transform-origin: "left top";
}
</style>