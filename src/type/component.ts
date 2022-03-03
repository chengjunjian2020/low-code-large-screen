export namespace common {
    export interface optionItem {
        name: string,
        value: number | string
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
        children?: Array<treeItem>
    }
}