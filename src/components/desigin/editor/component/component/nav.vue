<template>
    <div class="left-component-nav">
        <div
            class="nav-item flex justify-center items-center"
            :class="{ active: nav.id === active }"
            v-for="(nav, index) in navList"
            :key="index"
            :title="nav.name"
            @click="switchNav(nav)"
        >
            <img :src="getNavIcon(nav)" :alt="nav.name" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import chart from "/src/assets/chart.svg";
import chartActive from "/src/assets/chart-active.svg";
import map from "/src/assets/map.svg";
import mapActive from "/src/assets/map-active.svg";
import { navListType } from "./props";

const active = ref(1);
const navList: Array<navListType> = reactive([
    {
        id: 1,
        icon: chart,
        iconActive: chartActive,
        name: "常用图表",
    },
    {
        id: 2,
        icon: map,
        iconActive: mapActive,
        name: "地图",
    }
]);
const getNavIcon = computed(() => {
    return function (nav: navListType) {
        return nav.id === active.value ? nav.iconActive : nav.icon;
    }
})
const switchNav = (nav: navListType) => {
    active.value = nav.id
}
</script>
<style lang="less" scoped>
.left-component-nav {
    height: calc(100vh - 68px);
    width: 36px;
    background: #2e3134;

    .nav-item {
        font-size: 16px;
        color: #e9e9e9;
        height: 42px;
        line-height: 42px;
        cursor: pointer;
        img {
            width: 40%;
            height: 40%;
        }
        &.active {
            background: #22242a;
            border-left: 3px solid #3399ff;
        }
    }
}
</style>