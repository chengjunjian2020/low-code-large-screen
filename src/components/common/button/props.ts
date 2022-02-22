import type { PropType } from 'vue';
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
    active: { //仅在click状态下有效
        type: Boolean,
        default: false
    },
}

export default ButtonProps;