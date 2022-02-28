import { inputNumberProps as props } from "element-plus/lib/components/input-number/src/input-number";

const inputNumberProps = {
    ...props,
    controls: {
        type: Boolean,
        default: false
    },
    precision: {
        type: Number,
        default: 0
    }
}

export default inputNumberProps