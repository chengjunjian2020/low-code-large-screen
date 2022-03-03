import { common } from "/@/type/component";
import type { PropType } from 'vue';
const props = {
    renderData: {
        type: Array as PropType<common.treeItem[]>,
        default: [],
    }
}

export default props