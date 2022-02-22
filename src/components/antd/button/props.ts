import type { PropType } from 'vue';
import buttonProps from "ant-design-vue/lib/button/buttonTypes"
const ButtonProps = {
    buttonType: {
        type: String as PropType<'click' | 'hover'>,
        default: "hover",
    },
    buttonBackground: {
        type: String,
        default: "#2DABFF",
    },
    buttonBorderColor: {
        type: String,
        default: "#2DABFF",
    },
    textColor: {
        type: String,
        default: "#FFFFFF"
    },
    defaultActive: {
        type: Boolean,
        default: false
    },


    ...buttonProps
}

export default ButtonProps;