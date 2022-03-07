import { inputNumberProps as props } from "element-plus/lib/components/input-number/src/input-number";
import { componentSize } from "/@/common/enum/componentEnum";
import { PropType } from "vue";
const inputNumberProps = {
    ...props,
    controls: {
        type: Boolean,
        default: false
    },
    precision: {
        type: Number,
        default: 0
    },
    size: {
        type: String as PropType<componentSize>,
        default: "small"
    }
}

export default inputNumberProps