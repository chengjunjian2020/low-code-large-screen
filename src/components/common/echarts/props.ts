import { PropType } from 'vue';
import * as echarts from 'echarts';
declare type EChartsInitOpts = {
    locale?: string;
    renderer?: 'canvas' | 'svg';
    devicePixelRatio?: number;
    useDirtyRect?: boolean;
    ssr?: boolean;
    width?: number;
    height?: number;
};

const chartsProps = {
    width: {
        type: Number,
        default: 1000
    },
    height: {
        type: Number,
        default: 1000
    },
    option: {
        // type: any,
        // type: PropType<unknown>,
        required: true
    },
    opts: {
        type: Object as PropType<EChartsInitOpts>,
        default: {
            devicePixelRatio: 2.5,
            renderer: 'canvas',
            ssr: false,
            locale: 'ZH',
            useDirtyRect: false,
        }
    }
}
export {
    chartsProps
};