import type { PropType } from 'vue';
import { common } from "/@/type/component"
const selectProps = {
    selectList: {
        type: Array as PropType<common.optionItem[]>,
        default: []
    },
    allowCreate: {
        type: Boolean,
        default: false
    },
    filterable: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String || Number,
    },

}
export {
    selectProps
}