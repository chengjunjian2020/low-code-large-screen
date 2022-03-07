import { defineComponent, reactive, h } from "vue";
import { Checkbox, colorPicker, Input, inputNumber, Radio, Select, tree as Tree, Button } from "/@/components/common";
import { hasChildren } from "/@/common/utils/utils"
import { common } from "/@/type/component";
import { isValidKey } from "/@/type/utils";
import echartsOptiopn from "../../../../../../../public/echarts-options";
import Node from "element-plus/lib/components/tree/src/model/node";
import "element-plus/theme-chalk/el-checkbox.css"
import "./treeRender.less";
import { renderComponentListField } from "/@/common/enum/renderComponentEnum";
export default defineComponent({
    setup() {
        const getRowClass = (data: common.treeItem, node: Node) => {
            let classList = [];
            hasChildren(data) && data._component ? classList.push('row-title') : classList.push('row-item');
            node.level !== 1 ? classList.push("node-child") : classList.push("node-first");
            return classList.join(" ")
        }

        const renderComponent = (data: common.treeItem, component: string) => {
            if (isValidKey(component, data)) {
                let props = data.component_attribute || {};
                const componentName = data[component];
                if (componentName === 'Select' || componentName === 'Radio') {
                    let field = renderComponentListField[componentName];
                    props[field] = data.data;
                }
                props.modelValue = props.value;
                props['onUpdate:modelValue'] = (value: string) => {
                    if (!value) {
                        return;
                    }
                    data.component_attribute.value = value;
                    data.component_attribute.modelValue = value;
                }
                return h(componentList[componentName], props)
            }
        };
        const option = reactive(echartsOptiopn);
        const customNodeClass = (data: common.treeItem, node: Node) => {
            return node.level === 1 ? "first-node" : "child-node";
        }

        const getData = (data: any) => {
            console.log(data);
        }

        const componentList: any = {
            Checkbox,
            colorPicker,
            Input,
            inputNumber,
            Radio,
            Select
        }

        const clicks = () => {
            console.log(echartsOptiopn);
        }
        return () => (
            <Tree data={option} props={{ class: customNodeClass }} class="low-code-tree-render" >
                {{
                    default: ({ node: { data }, node }: any) => (
                        <div class="low-code-tree-row flex items-center">
                            {
                                hasChildren(data, 'children') ? <div class={getRowClass(data, node)} >
                                    <div class="flex items-center justify-between">
                                        <div class="label">{data.label}</div>
                                        {
                                            data._component && <div class="component">
                                                {
                                                    renderComponent(data, "_component")
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                    :
                                    <div class="node-component">
                                        <div class="flex items-center">
                                            <div class="label">{data.label}</div>
                                            {
                                                data.component && <div class="component">
                                                    {
                                                        renderComponent(data, "component")
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    ),
                }}
            </Tree >
        )

    }
})

