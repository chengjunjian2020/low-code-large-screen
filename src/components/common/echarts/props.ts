import type { PropType } from 'vue';
// import echarts from "echarts"
const props = {
    width: {
        type: Number,
        default: 200
    },
    height: {
        type: Number,
        default: 200
    },
    option: {
        // type: echarts as unknown as PropType<echarts.EChartsOption>,
        required: true
    },
    renderer: {
        type: String as PropType<'canvas' | 'svg'>,
        default: 'canvas'
    }
}

export default props;