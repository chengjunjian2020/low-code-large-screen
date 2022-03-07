import type { PropType } from 'vue';

interface collapseItem {
    title: string,
    list: Array<any>

}
const collapseProps = {
    collapseList: {
        type: Array as PropType<collapseItem[]>,
        default: []
    }
}

export {
    collapseProps
}