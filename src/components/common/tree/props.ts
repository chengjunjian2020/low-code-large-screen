import { ElTree } from "element-plus";
import { PropType } from "vue";
const props = {
    ...ElTree.props,
    nodeBgColor: {
        type: Array as PropType<string[]>,
        default: [],
    }
}
export default props;