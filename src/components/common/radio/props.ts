import type { PropType } from 'vue';
import { componentSize } from "/@/common/enum/componentEnum"
interface radioItem {
    name: string,
    value: string | number
}
const props = {
    modelValue: {
        type: Boolean || String || Number,
    },
    radioList: {
        type: Array as PropType<radioItem[]>,
        default: []
    },
    size: {
        type: String as PropType<componentSize>,
        default: "small"
    }
}

export default props
