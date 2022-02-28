import type { PropType } from 'vue';
interface optionItem {
    name: string,
    value: string | number
}
const selectProps = {
    selectList: {
        type: Array as PropType<optionItem[]>,
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