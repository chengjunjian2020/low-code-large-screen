export namespace common {
    export interface optionItem {
        name: string,
        value: number | string
    }
    interface _component_attr {
        attribute: string
    }
    export interface treeItem {
        id: string | number,
        parentId: string | number,
        attribute: string,
        label: string,
        type?: string,
        component?: string,
        data?: Array<optionItem[]>,
        defaultValue?: string | number,
        value?: string | number,
        children?: Array<treeItem>,
        _component?: string,
        _component_field?: _component_attr,
        component_attribute?: any,
        // _componentAttribute?: any;
    }

}