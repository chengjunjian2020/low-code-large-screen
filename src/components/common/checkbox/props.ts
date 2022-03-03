import { ElCheckbox } from "element-plus";
import type { PropType } from 'vue';
import { componentSize } from "/@/common/enum/componentEnum"
const props = {
    ...ElCheckbox.props,
    size: {
        type: String as PropType<componentSize>,
        default: "small"
    }
}

export default props