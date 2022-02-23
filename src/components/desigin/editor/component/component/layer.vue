<template>
    <div class="left-layer">
        <div class="left-title">图层</div>
        <div class="layer-command-list flex items-center justify-items-start">
            <DeleteOutlined class="icon" />
        </div>
        <div class="layer-list">
            <div
                class="layer-item flex items-center"
                :class="{ active: layer.id === activeLayer }"
                v-for="(layer, index) in layerList"
                :key="index"
                @click="selectLayer(layer)"
            >
                <img :src="layer.layerImg" />
                <span class="name truncate">{{ layer.layerName }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { DeleteOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
import { layerProps } from "./props";
import line from "/@/assets/line.png";
const activeLayer = ref();
const layerList: Array<layerProps> = reactive(
    [
        {
            id: "1",
            layerImg: line,
            layerName: "区域排行"
        },
        {
            id: "2",
            layerImg: line,
            layerName: "现状图"
        }
    ]
)
const selectLayer = (layer: layerProps) => {
    activeLayer.value = layer.id
}
</script>

<style lang="less" scoped>
.left-layer {
    position: absolute;
    left: 220px;
    top: 0;
    width: 190px;
    border-left: 1px solid #000;
    height: 100%;
    .layer-command-list {
        height: 30px;
        padding: 0 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .icon {
            font-size: 12px;
            color: #b3b3b3;
            &:hover {
                opacity: 0.9;
                cursor: pointer;
            }
        }
    }
    .layer-list {
        .layer-item {
            height: 48px;
            padding-left: 10px;
            cursor: pointer;
            img {
                width: 53px;
                height: 34px;
                border: 1px solid #3a4659;
            }
            span {
                font-size: 12px;
                margin-left: 8px;
                color: #fff;
                max-width: 90px;
            }
            &.active {
                background-color: rgba(51, 153, 255, 0.8);
            }
            &:hover {
                background: rgba(51, 153, 255, 0.8);
            }
        }
    }
}
</style>