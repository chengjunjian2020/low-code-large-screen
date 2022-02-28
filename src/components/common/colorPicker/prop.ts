import type { PropType } from 'vue';
const colorPickerProps = {
    modelValue: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String as PropType<"large" | "default" | "small">,
        default: "small"
    },
    showAlpha: {
        type: Boolean,
        default: true
    },
    colorFormat: {
        type: String as PropType<"hsl" | "hsv" | "hex" | "rgb">,
        default: "hex",
    },
    popperClass: {
        type: String as PropType<any>
    },
    predefine: {
        type: Array,
        default: []
    }

}

export {
    colorPickerProps
}