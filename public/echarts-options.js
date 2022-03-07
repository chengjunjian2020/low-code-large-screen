//配置不包含图表数据，取另外一个接口
//凡是以下划线开头的都是额外处理的逻辑 例如_component代表当前节点可以显示隐藏组件配置开关

let echartsOptions = [
  {
    attribute: 'title',
    label: '标题组件',
    children: [
      {
        attribute: 'text',
        label: '主标题文本',
        component: 'Input',
        id: '6663474f-2d73-4dbe-9bd8-864876a21bae',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'textStyle',
        label: '主标题文本样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'bdf42923-2bd7-4af6-a7d8-d392935bbe20',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            component: 'Select',
            data: [
              {
                name: 'normal',
                value: 'normal',
              },
              {
                name: 'italic',
                value: 'italic',
              },
              {
                name: 'oblique',
                value: 'oblique',
              },
            ],
            id: 'ad53dcf6-e260-46f1-beb1-3dbb56b6b6e6',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            component: 'inputNumber',
            componentAttribute: {
              allowCreate: true,
              filterable: true,
            },
            id: '2727ce8a-e203-40ba-aa8a-351ce40bebf4',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            component: 'Input',
            id: '7f938828-b49f-4b53-adbb-11150f71f556',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '54096e43-3326-494c-893d-909086f47e97',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            component: 'inputNumber',
            id: '250e135c-6151-4aae-a29d-3fc955af2ddf',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'width',
            label: '宽度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: '8e4809ef-5161-4896-ad35-b5deded7d3ea',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: 'c979bfa9-ffbf-48de-9fd0-306cf8cbb803',
            parentId: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'a73e6ebd-4b2f-42d3-bcf7-532fef26810a',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
      },
      {
        attribute: 'text',
        label: '副标题文本',
        component: 'Input',
        id: '3cb14863-0b5c-4ad0-ad0f-cf5535cfb01e',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'textStyle',
        label: '副标题文本样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '367e8b77-f6db-40d0-9e95-e0b70684dab0',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            component: 'Select',
            data: [
              {
                name: 'normal',
                value: 'normal',
              },
              {
                name: 'italic',
                value: 'italic',
              },
              {
                name: 'oblique',
                value: 'oblique',
              },
            ],
            id: '43692cb2-9a2f-41ae-ace6-f29a29365463',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            component: 'Select',
            data: [
              {
                name: 'normal',
                value: 'normal',
              },
              {
                name: 'bold',
                value: 'bold',
              },
              {
                name: 'bolder',
                value: 'bolder',
              },
              {
                name: 'lighter',
                value: 'lighter',
              },
            ],
            componentAttribute: {
              allowCreate: true,
              filterable: true,
            },
            id: '5e7ae96b-0b0f-4da7-8754-f4ace687ff37',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            component: 'Input',
            id: 'f0782b44-bcd7-499d-8a6e-b7681171a8d0',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '69c4bd74-7847-4660-be78-1cde0ed23bd2',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'align',
            label: '文字水平对齐方式',
            component: 'Select',
            data: [
              {
                name: 'left',
                value: 'left',
              },
              {
                name: 'center',
                value: 'center',
              },
              {
                name: 'right',
                value: 'right',
              },
            ],
            id: 'c69d7e74-aa06-4a5f-aa65-8e35ed2a0949',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            component: 'inputNumber',
            id: '38a16fd2-55a6-460f-baed-03158b312d3f',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'width',
            label: '宽度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: 'a851d334-2e14-4fd0-898e-648cc4b2acf0',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: '5e2a3062-4ff9-47f0-a31f-6b56a155d786',
            parentId: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '7c67833f-38c9-47b2-be43-5b8dbcd72405',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
      },
      {
        attribute: 'textAlign',
        label: '整体水平对齐方式',
        component: 'Select',
        data: [
          {
            name: 'auto',
            value: 'auto',
          },
          {
            name: 'left',
            value: 'left',
          },
          {
            name: 'right',
            value: 'right',
          },
          {
            name: 'center',
            value: 'center',
          },
        ],
        id: '83cf4628-526c-4c6e-aad7-f58349927ae3',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'padding',
        label: '内边距',
        component: 'Input',
        id: '82e7e25e-c981-40f1-a56b-a560aa471bfe',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'itemGap',
        label: '主副标题之间的间距',
        component: 'inputNumber',
        id: 'f9960c6f-0e93-4333-949d-ab2d97ad6902',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        component: 'Input',
        id: '9d9598fc-abce-4ca9-8835-5aeb9e14ece4',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        component: 'Input',
        id: '5e8519ca-e711-4802-8af3-4cb300622167',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        component: 'Input',
        id: '42bb3b22-fb89-4a3e-8870-eb9fa3517b73',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        component: 'Input',
        id: '4627cfc1-5208-48ea-aa90-d8c263f323fc',
        parentId: '68f43ae4-5183-4749-9093-78e4a4ec391a',
        component_attribute: {
          value: null,
        },
      },
    ],
    id: '68f43ae4-5183-4749-9093-78e4a4ec391a',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'legend',
    label: '图例组件',
    children: [
      {
        attribute: 'type',
        label: '图例类型',
        component: 'Select',
        data: [
          {
            name: 'plain',
            value: 'plain',
          },
          {
            name: 'scroll',
            value: 'scroll',
          },
        ],
        id: 'ebd015df-ddc5-4177-9623-122c524bf1e4',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        component: 'Input',
        id: '831cc530-4efe-4142-8b37-c7a04833edc5',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        component: 'Input',
        id: '60d35d76-6845-45b0-8004-14dac9a19438',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        component: 'Input',
        id: '1e4fa083-18d1-4fd9-98a3-113543b6b4bf',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'width',
        label: '宽度',
        component: 'Input',
        id: '22bcf6ad-1be2-4e8c-a0aa-97ea357bb6c3',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'height',
        label: '高度',
        component: 'Input',
        id: '271a54a0-c9e8-4c28-b734-14d632aab215',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'orient',
        label: '图例列表的布局朝向',
        component: 'Select',
        data: [
          {
            name: 'horizontal',
            value: 'horizontal',
          },
          {
            name: 'vertical',
            value: 'vertical',
          },
        ],
        id: '4e752346-5c4c-4489-bde0-0bbf94e02573',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'align',
        label: '对齐方式',
        component: 'Select',
        data: [
          {
            name: 'auto',
            value: 'auto',
          },
          {
            name: 'left',
            value: 'left',
          },
          {
            name: 'right',
            value: 'right',
          },
        ],
        id: '188dcf8c-ea9e-4126-a968-1e05353af437',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'padding',
        label: '图例内边距',
        component: 'Input',
        id: 'cf982160-628e-46dc-bf59-8c0def672373',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'itemGap',
        label: '图例每项之间的间隔',
        component: 'inputNumber',
        id: 'd06a8d70-6913-4e9f-8b88-72bf3f4f7fa3',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'itemWidth',
        label: '宽度',
        component: 'inputNumber',
        id: '6ce52332-b277-4b1d-b2f7-bb567ef7dcd9',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'itemHeight',
        label: '高度',
        component: 'inputNumber',
        id: '0d476f46-63a8-42d4-bbb7-d2751d04026a',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'itemStyle',
        label: '图形样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'ad29102d-a2dd-4a01-a568-6d6f83271e27',
            parentId: 'e1d703c3-b056-4697-8bd9-efa9a1d05569',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: 'b6ab656e-5bd7-4d37-b57d-f796881dca2b',
            parentId: 'e1d703c3-b056-4697-8bd9-efa9a1d05569',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'e1d703c3-b056-4697-8bd9-efa9a1d05569',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
      },
      {
        attribute: 'lineStyle',
        label: '线的样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '2ea0553d-99fe-4986-92d3-61a5156d3435',
            parentId: '7502e3b9-f5ef-4fd5-9553-ff856ce0cb85',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: '9acc8b71-c609-4d85-8dc1-435a902e6871',
            parentId: '7502e3b9-f5ef-4fd5-9553-ff856ce0cb85',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'width',
            label: '线宽',
            component: 'inputNumber',
            id: '3dbb9db0-27b3-4502-9fbf-9aaf020fd73d',
            parentId: '7502e3b9-f5ef-4fd5-9553-ff856ce0cb85',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'type',
            label: '线的类型',
            component: 'Select',
            data: [
              {
                name: 'solid',
                value: 'solid',
              },
              {
                name: 'dashed',
                value: 'dashed',
              },
              {
                name: 'dotted',
                value: 'dotted',
              },
            ],
            componentAttribute: {
              filterable: true,
              allowCreate: true,
            },
            id: '37031714-6385-42f7-a12a-f5a50fe0a205',
            parentId: '7502e3b9-f5ef-4fd5-9553-ff856ce0cb85',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '7502e3b9-f5ef-4fd5-9553-ff856ce0cb85',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
      },
      {
        attribute: 'textStyle',
        label: '图例文本样式',
        children: [
          {
            attribute: 'color',
            label: '文本颜色',
            component: 'colorPicker',
            id: '6a6a0091-c1b7-4553-94a8-fe057f5ca86e',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            component: 'Select',
            data: [
              {
                name: 'normal',
                value: 'normal',
              },
              {
                name: 'italic',
                value: 'italic',
              },
              {
                name: 'oblique',
                value: 'oblique',
              },
            ],
            id: '6e91ba2f-e49c-40c3-b57d-31da63c4233d',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            component: 'Select',
            data: [
              {
                name: 'normal',
                value: 'normal',
              },
              {
                name: 'bold',
                value: 'bold',
              },
              {
                name: 'bolder',
                value: 'bolder',
              },
              {
                name: 'lighter',
                value: 'lighter',
              },
            ],
            componentAttribute: {
              allowCreate: true,
              filterable: true,
            },
            id: 'b75d750e-852b-4a4f-9dc7-b3c4df50ecb3',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            component: 'Input',
            id: '0097f047-5c8c-42b9-b98a-707f86939344',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '4be5c5e3-7bda-412a-ab7e-d78d87a57200',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            component: 'colorPicker',
            id: 'b6003527-1000-4e81-9077-5122b2272cc5',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: 'c760ff73-20f2-44a3-a4cc-fff2070c018f',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            component: 'inputNumber',
            id: '830db5d5-070a-49c8-b6de-f49d88a95a4f',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'width',
            label: '宽度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: 'b95bc354-34df-455e-9f28-bf268be3bec8',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
            id: '4d7d3556-fc7a-4a4d-8493-e1ef2e6b730b',
            parentId: '796f42bd-35a4-4909-8c28-721fd13bbb91',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '796f42bd-35a4-4909-8c28-721fd13bbb91',
        parentId: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
      },
    ],
    id: 'f40c5125-46bf-4962-91d5-156d417c0cf8',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'grid',
    label: '直角坐标系网格',
    children: [
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        component: 'Input',
        id: '5c3b5e2b-c6cd-4559-afde-403897633c25',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        component: 'Input',
        id: '58a18e61-98b8-45ea-a848-8594c6a10e2f',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        component: 'Input',
        id: '32a40865-8a30-4b9f-8edb-98a80d1ce639',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        component: 'Input',
        id: 'b9fa01d4-ed54-48c9-83b9-0fc14a507080',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'width',
        label: '宽度',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
        id: 'f01ecaa5-07e7-40d0-ac98-177d7ee7a40f',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'height',
        label: '高度',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
        id: '57101393-58e7-4557-b7f1-52e1f9dd5439',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'containLabel',
        label: '包含坐标轴的刻度标签',
        component: 'Radio',
        data: [
          {
            name: '是',
            value: true,
          },
          {
            name: '否',
            value: false,
          },
        ],
        id: 'b62b7f57-0840-4271-8195-db94ca14d6c9',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'backgroundColor',
        label: '背景色',
        component: 'colorPicker',
        id: '4084014f-e3e8-4ee1-967d-76f124ef5dc2',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'tooltip',
        label: '提示框组件',
        children: [
          {
            attribute: 'trigger',
            label: '触发类型',
            component: 'Select',
            data: [
              {
                name: 'item',
                value: 'item',
              },
              {
                name: 'axis',
                value: 'axis',
              },
              {
                name: 'none',
                value: 'none',
              },
            ],
            id: '1534432d-701c-4d5c-af02-f3ea65e67091',
            parentId: '81b2dc99-8a9c-4a4d-9bd1-7041a78b099e',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'axisPointer',
            label: '坐标轴指示器配置项',
            children: [
              {
                attribute: 'type',
                label: '指示器类型',
                component: 'Select',
                data: [
                  {
                    name: 'line',
                    value: 'line',
                  },
                  {
                    name: 'shadow',
                    value: 'shadow',
                  },
                  {
                    name: 'none',
                    value: 'none',
                  },
                  {
                    name: 'cross',
                    value: 'cross',
                  },
                ],
                id: 'c69b1fab-984f-4370-8606-ac39782220bd',
                parentId: 'fac4b146-faac-46b9-9659-06ee6d6ea6b8',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'axis',
                label: '指示器的坐标轴',
                component: 'Select',
                data: [
                  {
                    name: 'x',
                    value: 'x',
                  },
                  {
                    name: 'y',
                    value: 'y',
                  },
                  {
                    name: 'radius',
                    value: 'radius',
                  },
                  {
                    name: 'angle',
                    value: 'angle',
                  },
                ],
                id: '8c9d0092-4048-4b5b-b5c5-384f6a44f39e',
                parentId: 'fac4b146-faac-46b9-9659-06ee6d6ea6b8',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'label',
                label: '指示器文本标签',
                children: [
                  {
                    attribute: 'precision',
                    label: '数值小数点精度',
                    component: 'inputNumber',
                    id: '3386f955-b925-4667-a62f-591a87f49802',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'margin',
                    label: '距离轴的距离',
                    component: 'inputNumber',
                    id: 'b60abb0d-2472-4d95-b8df-9050d488d1c7',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'color',
                    label: '颜色',
                    component: 'colorPicker',
                    id: 'd770a969-d724-49b1-9444-03f8d5561734',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'fontStyle',
                    label: '字体的风格',
                    component: 'Select',
                    data: [
                      {
                        name: 'normal',
                        value: 'normal',
                      },
                      {
                        name: 'italic',
                        value: 'italic',
                      },
                      {
                        name: 'oblique',
                        value: 'oblique',
                      },
                    ],
                    id: '70f8ad6e-3473-47f2-ae8f-439614115b93',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'fontWeight',
                    label: '文字字体的粗细',
                    component: 'Select',
                    data: [
                      {
                        name: 'normal',
                        value: 'normal',
                      },
                      {
                        name: 'bold',
                        value: 'bold',
                      },
                      {
                        name: 'bolder',
                        value: 'bolder',
                      },
                      {
                        name: 'lighter',
                        value: 'lighter',
                      },
                    ],
                    componentAttribute: {
                      allowCreate: true,
                      filterable: true,
                    },
                    id: '98a6b628-69b3-460d-8b01-79a24ddc9454',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'fontFamily',
                    label: '文字字体',
                    component: 'Input',
                    id: '26ea8c1c-ffa6-441e-a9dd-67f219376352',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'fontSize',
                    label: '文字大小',
                    component: 'inputNumber',
                    id: '6c5a15d2-eb8b-4bb2-9bef-ce44299acb1d',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'lineHeight',
                    label: '行高',
                    component: 'inputNumber',
                    id: '235fe4da-d476-4292-ac24-777797b96bb3',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'width',
                    label: '宽度',
                    component: 'inputNumber',
                    componentAttribute: {
                      controls: true,
                    },
                    id: 'b1597ad6-41f5-4b29-9f71-6689f55e537a',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'height',
                    label: '高度',
                    component: 'inputNumber',
                    componentAttribute: {
                      controls: true,
                    },
                    id: 'c5a45d1c-e231-46e5-a453-ef1c1a38634b',
                    parentId: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                    component_attribute: {
                      value: null,
                    },
                  },
                ],
                id: '6ee4312f-3f98-4ffa-a66e-d4e1b9433084',
                parentId: 'fac4b146-faac-46b9-9659-06ee6d6ea6b8',
                _component: 'Checkbox',
                component_attribute: {
                  value: null,
                },
                _component_field: {
                  attribute: 'show',
                },
              },
            ],
            id: 'fac4b146-faac-46b9-9659-06ee6d6ea6b8',
            parentId: '81b2dc99-8a9c-4a4d-9bd1-7041a78b099e',
          },
          {
            attribute: 'position',
            label: '提示框浮层的位置',
            component: 'Input',
            id: 'c80a6c81-1fdf-4654-9188-2acba6228844',
            parentId: '81b2dc99-8a9c-4a4d-9bd1-7041a78b099e',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '81b2dc99-8a9c-4a4d-9bd1-7041a78b099e',
        parentId: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
    ],
    id: '4ceb4159-d7d8-4e49-b266-1abb5ede8526',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'yAxis',
    label: 'y轴',
    children: [
      {
        attribute: 'type',
        label: '坐标轴类型',
        component: 'Select',
        data: [
          {
            name: '数值轴',
            value: 'value',
          },
          {
            name: '类目轴',
            value: 'category',
          },
          {
            name: '时间轴',
            value: 'time',
          },
          {
            name: '对数轴',
            value: 'log',
          },
        ],
        id: 'f0a93b94-c61d-4918-9474-f7577041424f',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'nameTextStyle',
        label: '坐标轴名称的文字样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '46411abd-2362-41a0-85c6-e5e54c898e50',
            parentId: '403102b9-61df-4423-9c95-c108647bf427',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: 'b12c8253-930b-4569-937c-3d10c800092d',
            parentId: '403102b9-61df-4423-9c95-c108647bf427',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '403102b9-61df-4423-9c95-c108647bf427',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
      },
      {
        attribute: 'min',
        label: '刻度最小值',
        component: 'inputNumber',
        id: '4379fbc1-db37-41ec-8dfb-d17b8308962a',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'max',
        label: '刻度最大值',
        component: 'inputNumber',
        id: '4390050b-a48e-4798-b96e-939dc45adcfe',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'axisLine',
        label: '坐标轴轴线',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'bff8aaa5-a0a8-40dd-98a2-ad5e5b5dd8d6',
                parentId: '81621510-87bf-4c19-b706-c4de743b593a',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: 'e9fc6061-c827-449c-9126-d3a3fc55da96',
                parentId: '81621510-87bf-4c19-b706-c4de743b593a',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '77d78525-dfeb-401a-b3a1-69404b952069',
                parentId: '81621510-87bf-4c19-b706-c4de743b593a',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '328efdb9-7a52-43f0-8594-d5b5dbb0b2de',
                parentId: '81621510-87bf-4c19-b706-c4de743b593a',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '81621510-87bf-4c19-b706-c4de743b593a',
            parentId: '5a16971e-d7df-4cd8-8c21-518d69efaa18',
          },
        ],
        id: '5a16971e-d7df-4cd8-8c21-518d69efaa18',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLine',
        label: '坐标轴刻度',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'a8529eb1-1767-4511-89a9-756ff01fd2a6',
                parentId: '2bf541b0-c45f-4165-ac94-1eb4fdf82e4c',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '36c3533b-60ab-46bb-b72e-213136f7f56e',
                parentId: '2bf541b0-c45f-4165-ac94-1eb4fdf82e4c',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '9e0d90ea-5065-4397-8c0b-59140828eb16',
                parentId: '2bf541b0-c45f-4165-ac94-1eb4fdf82e4c',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '62002af5-6d34-4bac-8950-c0cd8b423399',
                parentId: '2bf541b0-c45f-4165-ac94-1eb4fdf82e4c',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '2bf541b0-c45f-4165-ac94-1eb4fdf82e4c',
            parentId: '062a43da-8e9e-440e-9916-bf560742054d',
          },
        ],
        id: '062a43da-8e9e-440e-9916-bf560742054d',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLabel',
        label: '坐标轴刻度标签文字',
        children: [
          {
            attribute: 'interval',
            label: '刻度标签的显示间隔',
            component: 'inputNumber',
            id: '6990f5cb-9b78-4b1c-8419-2c97a98e2a75',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'inside',
            label: '刻度标签是否朝内',
            component: 'Radio',
            data: [
              {
                name: '内',
                value: true,
              },
              {
                name: '外',
                value: false,
              },
            ],
            id: '30d15de2-7087-4377-a147-a97cdf80c25b',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'rotate',
            label: 'label旋转的角度',
            component: 'inputNumber',
            id: '0098d99e-1703-4bcc-a399-2a2ba0a6c4eb',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'margin',
            label: 'label与轴线距离',
            component: 'inputNumber',
            id: '3dc74eac-0778-4306-a608-1401b61ffe99',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '42cd1c93-331d-4e2d-afab-955aa9ad28d2',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '32f244a6-7703-41d0-8d1a-791ed9546403',
            parentId: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'df87e92e-aaa5-4d5b-a04c-5dec099c9c10',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'splitLine',
        label: '分割线',
        children: [
          {
            attribute: 'interval',
            label: '分隔线显示间隔',
            component: 'inputNumber',
            id: '91a351a3-f731-41de-ab67-0127e9adedc7',
            parentId: '9a4e3a5e-5d5f-4d6c-90e6-e44e6eb0ccc1',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineStyle',
            label: '分隔线样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '5f5379a6-7717-49b5-aadc-0933c612f7ab',
                parentId: '7f74def5-b020-4e3b-8c89-a8c61960ac20',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '7587a9aa-3c1c-47af-adbf-669fb26446bc',
                parentId: '7f74def5-b020-4e3b-8c89-a8c61960ac20',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '9d23ab68-53da-445e-88b7-ae1a7149da57',
                parentId: '7f74def5-b020-4e3b-8c89-a8c61960ac20',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'b14794ff-5e11-4d85-86cb-7d313153f66c',
                parentId: '7f74def5-b020-4e3b-8c89-a8c61960ac20',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '7f74def5-b020-4e3b-8c89-a8c61960ac20',
            parentId: '9a4e3a5e-5d5f-4d6c-90e6-e44e6eb0ccc1',
          },
        ],
        id: '9a4e3a5e-5d5f-4d6c-90e6-e44e6eb0ccc1',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'splitArea',
        label: '坐标轴分隔区域',
        children: [
          {
            attribute: 'interval',
            label: '刻度标签的显示间隔',
            component: 'inputNumber',
            id: '26eea029-ea55-47f8-8b70-3a0eab02ff1f',
            parentId: '1e19ff18-ae23-4d8b-a86e-283f5626584a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'areaStyle',
            label: '分隔区域样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '37730e36-90f9-4e35-91d9-2351ea0312b5',
                parentId: '1281afae-3594-4e30-9821-c5720011b62a',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '5f1a3797-ae2e-42a1-bc2a-6b2a5d649fee',
                parentId: '1281afae-3594-4e30-9821-c5720011b62a',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '1281afae-3594-4e30-9821-c5720011b62a',
            parentId: '1e19ff18-ae23-4d8b-a86e-283f5626584a',
          },
        ],
        id: '1e19ff18-ae23-4d8b-a86e-283f5626584a',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'data',
        label: '类目数据',
        children: [
          {
            attribute: 'textStyle',
            label: '文字样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '89910c93-71fa-4c9a-b105-11b825b64b4a',
                parentId: '4730562c-0b10-42a5-afc3-abcc5eecbe63',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '1c31a315-aa37-441c-b22f-318e4d37777d',
                parentId: '4730562c-0b10-42a5-afc3-abcc5eecbe63',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '4730562c-0b10-42a5-afc3-abcc5eecbe63',
            parentId: '73a3f693-9c94-473d-bffd-c693cd9e3d8e',
          },
        ],
        id: '73a3f693-9c94-473d-bffd-c693cd9e3d8e',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
      },
      {
        attribute: 'axisPointer',
        label: '触摸指示器',
        children: [
          {
            attribute: 'type',
            label: '指示器类型',
            component: 'Select',
            data: [
              {
                name: '直线指示器',
                value: 'line',
              },
              {
                name: '阴影指示器',
                value: 'shadow',
              },
              {
                name: '无指示器',
                value: 'none',
              },
            ],
            id: '3859207e-5f19-4706-8317-9e608928828e',
            parentId: '22022dfe-6186-4b27-af2a-5964d392b4fc',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '指示器文本',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '5ed5e000-2488-491f-99ac-8a59eee7144d',
                parentId: 'e9e3af34-5762-4bf9-a0cc-a43acd1ef640',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: 'e3982077-8b1e-4718-99a6-7644b4216ba1',
                parentId: 'e9e3af34-5762-4bf9-a0cc-a43acd1ef640',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'padding',
                label: '内边距',
                component: 'Input',
                id: 'd3971ffe-1a15-4711-bdf9-4f401a83a9e0',
                parentId: 'e9e3af34-5762-4bf9-a0cc-a43acd1ef640',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'e9e3af34-5762-4bf9-a0cc-a43acd1ef640',
            parentId: '22022dfe-6186-4b27-af2a-5964d392b4fc',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'ea9495e7-7724-4d49-9542-d6eb06b6406b',
                parentId: 'f8be5b45-e7b9-477a-bdea-0600bd8d1bf2',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '157d3861-cee8-4aea-9068-e2399784c2fd',
                parentId: 'f8be5b45-e7b9-477a-bdea-0600bd8d1bf2',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'b4757f69-0520-46d7-a47c-a0f663bd6916',
                parentId: 'f8be5b45-e7b9-477a-bdea-0600bd8d1bf2',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'f8be5b45-e7b9-477a-bdea-0600bd8d1bf2',
            parentId: '22022dfe-6186-4b27-af2a-5964d392b4fc',
          },
          {
            attribute: 'shadowStyle',
            label: '阴影样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '68d2f2ea-1182-4c9a-aabe-74c6714c2db6',
                parentId: 'cb60a630-2629-4d41-8fd6-17fcf87392b4',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'f4689e48-08cb-440f-bce3-7e0df1e44021',
                parentId: 'cb60a630-2629-4d41-8fd6-17fcf87392b4',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'triggerTooltip',
                label: '触发tooltip',
                component: 'Radio',
                data: [
                  {
                    name: '是',
                    value: true,
                  },
                  {
                    name: '否',
                    value: false,
                  },
                ],
                id: 'fcae4acf-78e8-4eeb-8cf5-4746cf124ef4',
                parentId: 'cb60a630-2629-4d41-8fd6-17fcf87392b4',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'cb60a630-2629-4d41-8fd6-17fcf87392b4',
            parentId: '22022dfe-6186-4b27-af2a-5964d392b4fc',
          },
        ],
        id: '22022dfe-6186-4b27-af2a-5964d392b4fc',
        parentId: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
    ],
    id: 'f802e8f9-e0a2-45da-9758-8f3382419b57',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'xAxis',
    label: 'x轴',
    children: [
      {
        attribute: 'type',
        label: '坐标轴类型',
        component: 'Select',
        data: [
          {
            name: '数值轴',
            value: 'value',
          },
          {
            name: '类目轴',
            value: 'category',
          },
          {
            name: '时间轴',
            value: 'time',
          },
          {
            name: '对数轴',
            value: 'log',
          },
        ],
        id: '8118c95b-bd01-44d2-9abd-b1fe85ab6ba7',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'nameTextStyle',
        label: '坐标轴名称的文字样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '530dc8b5-d73f-4387-a637-449a58abe8a3',
            parentId: '334a6fe9-602a-4346-9223-945cdc398551',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: 'ef08b19a-9353-40eb-9230-122c795c40b5',
            parentId: '334a6fe9-602a-4346-9223-945cdc398551',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '334a6fe9-602a-4346-9223-945cdc398551',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
      },
      {
        attribute: 'min',
        label: '刻度最小值',
        component: 'inputNumber',
        id: '7a249674-cb8e-498b-a000-2e84c7047eb8',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'max',
        label: '刻度最大值',
        component: 'inputNumber',
        id: '0bf22760-2bb8-4d6d-8dbd-bc732bac735a',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'axisLine',
        label: '坐标轴轴线',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '738b37bd-2843-448b-88ba-75fec638d092',
                parentId: 'd98af6c1-dcc4-431a-9d87-2a6ca3320167',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '3f1cebc3-c521-43ad-9b4e-827f9893fa0c',
                parentId: 'd98af6c1-dcc4-431a-9d87-2a6ca3320167',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '0209571f-40f2-413d-89d9-329c4950a5ef',
                parentId: 'd98af6c1-dcc4-431a-9d87-2a6ca3320167',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '5e3d78b6-8b2d-470b-a15b-896259885658',
                parentId: 'd98af6c1-dcc4-431a-9d87-2a6ca3320167',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'd98af6c1-dcc4-431a-9d87-2a6ca3320167',
            parentId: 'f587b77d-fe83-4129-9d59-a5cf2db81965',
          },
        ],
        id: 'f587b77d-fe83-4129-9d59-a5cf2db81965',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLine',
        label: '坐标轴刻度',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'd36873fc-d4ea-4bb3-a20d-1b19e1ba45c6',
                parentId: '6a05e2f1-2374-48dc-9d96-eb70c86e89b6',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '90aa2ef6-90fc-4cee-ae82-8e00e8d37012',
                parentId: '6a05e2f1-2374-48dc-9d96-eb70c86e89b6',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '2f9bddee-87b3-48b7-9373-6c3550997d85',
                parentId: '6a05e2f1-2374-48dc-9d96-eb70c86e89b6',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '6eb3af77-9f4f-4554-86a1-ba7ef234dc72',
                parentId: '6a05e2f1-2374-48dc-9d96-eb70c86e89b6',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '6a05e2f1-2374-48dc-9d96-eb70c86e89b6',
            parentId: '7d7a8e98-a7b4-4b45-99ff-955790677bde',
          },
        ],
        id: '7d7a8e98-a7b4-4b45-99ff-955790677bde',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLabel',
        label: '坐标轴刻度标签文字',
        children: [
          {
            attribute: 'interval',
            label: '刻度标签的显示间隔',
            component: 'inputNumber',
            id: '23b5992e-384e-4382-96d1-2338f6aca0e6',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'inside',
            label: '刻度标签是否朝内',
            component: 'Radio',
            data: [
              {
                name: '内',
                value: true,
              },
              {
                name: '外',
                value: false,
              },
            ],
            id: '795a2803-4fa7-4095-8419-6463f4eec317',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'rotate',
            label: '文字旋转的角度',
            component: 'inputNumber',
            id: 'bc4a71e4-1f86-4c6e-9278-527b2d5871b6',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'margin',
            label: '文字与轴线的距离',
            component: 'inputNumber',
            id: '11779a39-bb38-43cd-9aa3-efa54ef8acf1',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '2108035b-3969-45cf-a9c2-04ae7b5f1ef7',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '4e05d0fc-a8c5-45d9-92ea-41c64f6aae7a',
            parentId: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '882c8fe9-c118-444a-8fc7-0ff4f0c416f9',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'splitLine',
        label: '分割线',
        children: [
          {
            attribute: 'interval',
            label: '分隔线显示间隔',
            component: 'inputNumber',
            id: '8cf275aa-6c26-4752-9cdb-2b3d841c48e2',
            parentId: '6f7a2b55-2b1a-437e-b0f7-9d78ce713bd7',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineStyle',
            label: '分隔线样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '104ef7e5-b49c-4d4d-9985-e0796b286c99',
                parentId: '44d4e9d6-dbed-44c1-89f3-cf3722f6a2e7',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '167033ab-bd5b-480a-9edb-5dcd4ea41c1b',
                parentId: '44d4e9d6-dbed-44c1-89f3-cf3722f6a2e7',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'dd8c45d4-14d5-471f-bdf2-c65ea8654880',
                parentId: '44d4e9d6-dbed-44c1-89f3-cf3722f6a2e7',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '9e0e594f-db3e-426a-bdf9-231f973ad6ff',
                parentId: '44d4e9d6-dbed-44c1-89f3-cf3722f6a2e7',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '44d4e9d6-dbed-44c1-89f3-cf3722f6a2e7',
            parentId: '6f7a2b55-2b1a-437e-b0f7-9d78ce713bd7',
          },
        ],
        id: '6f7a2b55-2b1a-437e-b0f7-9d78ce713bd7',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'splitArea',
        label: '坐标轴分隔区域',
        children: [
          {
            attribute: 'interval',
            label: '刻度标签的显示间隔',
            component: 'inputNumber',
            id: '81e8de17-31eb-4cf5-b8d4-eaec7e97eafd',
            parentId: '5cecda6b-f926-453a-9f46-0fddf280d39e',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'areaStyle',
            label: '分隔区域样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '018070ed-82db-48a4-8058-70e310064d78',
                parentId: '80988042-c68e-43cc-a373-40f0f2934eb5',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '5dea3f5e-ccc8-4f21-a24b-4c8bd98de598',
                parentId: '80988042-c68e-43cc-a373-40f0f2934eb5',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '80988042-c68e-43cc-a373-40f0f2934eb5',
            parentId: '5cecda6b-f926-453a-9f46-0fddf280d39e',
          },
        ],
        id: '5cecda6b-f926-453a-9f46-0fddf280d39e',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'data',
        label: '类目数据',
        children: [
          {
            attribute: 'textStyle',
            label: '文字样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '352573cb-fcef-4125-a674-d6051ae58efc',
                parentId: '17e48718-7f7e-480d-9d4a-d38c6ff899d8',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '6b82c412-08b0-48f3-bb57-3914da70d9b4',
                parentId: '17e48718-7f7e-480d-9d4a-d38c6ff899d8',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '17e48718-7f7e-480d-9d4a-d38c6ff899d8',
            parentId: '50d87537-ed99-4eda-a2b3-1c1b6171226d',
          },
        ],
        id: '50d87537-ed99-4eda-a2b3-1c1b6171226d',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
      },
      {
        attribute: 'axisPointer',
        label: '触摸指示器',
        children: [
          {
            attribute: 'type',
            label: '指示器类型',
            component: 'Select',
            data: [
              {
                name: '直线指示器',
                value: 'line',
              },
              {
                name: '阴影指示器',
                value: 'shadow',
              },
              {
                name: '无指示器',
                value: 'none',
              },
            ],
            id: 'c4a2c90a-68e4-4212-a2b9-4560dae22306',
            parentId: 'f06fb837-d153-4a04-a9c0-357e9a6efdc7',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '指示器文本',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '5901dea2-05a0-472e-b574-f6a25800d657',
                parentId: 'e9df3510-810f-4f6d-8e5b-2a5de16b6793',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: 'c0461e8b-f5b4-4fc4-9d58-ed4d05d4f7e3',
                parentId: 'e9df3510-810f-4f6d-8e5b-2a5de16b6793',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'padding',
                label: '内边距',
                component: 'Input',
                id: '180b42e0-b4d3-40aa-bcb5-d6a138c45948',
                parentId: 'e9df3510-810f-4f6d-8e5b-2a5de16b6793',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'e9df3510-810f-4f6d-8e5b-2a5de16b6793',
            parentId: 'f06fb837-d153-4a04-a9c0-357e9a6efdc7',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '6cbda5f5-680a-4eeb-86fa-d8f27eddd810',
                parentId: 'e0ec26c3-5e45-4038-9ae4-5e7d371204d3',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'e094bd2f-7acc-4437-86d7-dccbedad9247',
                parentId: 'e0ec26c3-5e45-4038-9ae4-5e7d371204d3',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'fa58441c-e7ca-454b-b0dc-12bb233cee7d',
                parentId: 'e0ec26c3-5e45-4038-9ae4-5e7d371204d3',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'e0ec26c3-5e45-4038-9ae4-5e7d371204d3',
            parentId: 'f06fb837-d153-4a04-a9c0-357e9a6efdc7',
          },
          {
            attribute: 'shadowStyle',
            label: '阴影样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '285a0f6b-3bc2-4f92-a2af-55a2844ea6a8',
                parentId: '067018fb-8de5-41ab-a1d2-08c2eeec7303',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'bb1cdb25-d724-4823-bae3-4fe760512e06',
                parentId: '067018fb-8de5-41ab-a1d2-08c2eeec7303',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'triggerTooltip',
                label: '触发tooltip',
                component: 'Radio',
                data: [
                  {
                    name: '是',
                    value: true,
                  },
                  {
                    name: '否',
                    value: false,
                  },
                ],
                id: '1b93f3bd-adeb-4605-b76b-a6ff73eae2e2',
                parentId: '067018fb-8de5-41ab-a1d2-08c2eeec7303',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '067018fb-8de5-41ab-a1d2-08c2eeec7303',
            parentId: 'f06fb837-d153-4a04-a9c0-357e9a6efdc7',
          },
        ],
        id: 'f06fb837-d153-4a04-a9c0-357e9a6efdc7',
        parentId: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
    ],
    id: 'f98fdc39-9eed-4274-8370-1e19fc3ddc8f',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'radar',
    label: '雷达图',
    children: [
      {
        attribute: 'center',
        label: '中心坐标',
        component: 'Input',
        id: 'd74c511d-5c07-47f3-a843-0b8d824058d9',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'radius',
        label: '半径',
        component: 'Input',
        id: '4705d8e2-a1ff-4fbf-9177-76f631a8bc83',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'startAngle',
        label: '起始角度',
        component: 'inputNumber',
        id: 'cf94062b-bbf1-4f23-b631-91b8f200dfc6',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'axisName',
        label: '指示器名称配置',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '39cedd8c-ada8-4133-bf7c-2213475b74bc',
            parentId: '2c4f76e7-6c8c-4d46-a282-745b70f33881',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '4847632c-ad54-4cf5-acad-cbf2d8ae0c5d',
            parentId: '2c4f76e7-6c8c-4d46-a282-745b70f33881',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            component: 'colorPicker',
            id: '877af422-8a44-4e6a-8fc6-52e18dab1d3e',
            parentId: '2c4f76e7-6c8c-4d46-a282-745b70f33881',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: 'a4365996-0ed8-4bca-be9b-1fe16bf0557e',
            parentId: '2c4f76e7-6c8c-4d46-a282-745b70f33881',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '2c4f76e7-6c8c-4d46-a282-745b70f33881',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLine',
        label: '坐标轴刻度',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'ce9cea2d-0074-46b9-8ca9-5b9af2880c05',
                parentId: 'd4bc62af-32a6-426d-a526-76344c55eb7e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: 'ac41378c-e8dd-4b4a-af25-38efa60d9bc1',
                parentId: 'd4bc62af-32a6-426d-a526-76344c55eb7e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'a432809c-25b4-4856-8b12-f6c022f13afd',
                parentId: 'd4bc62af-32a6-426d-a526-76344c55eb7e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '73245747-1613-4fa9-94c2-2bfff1d1dce9',
                parentId: 'd4bc62af-32a6-426d-a526-76344c55eb7e',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'd4bc62af-32a6-426d-a526-76344c55eb7e',
            parentId: 'ab369266-2ae6-4264-92d7-5d120bc2d322',
          },
        ],
        id: 'ab369266-2ae6-4264-92d7-5d120bc2d322',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisTick',
        label: '坐标轴刻度',
        children: [
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '1aee390e-0459-45aa-a644-b28db0db12e9',
                parentId: 'a0fcecb7-21aa-46c4-a999-a0089abfbc6c',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '2c7c44e1-bbba-4b79-884e-e93a3ef4d3aa',
                parentId: 'a0fcecb7-21aa-46c4-a999-a0089abfbc6c',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '8a3f3fe9-19ad-4c1e-b35a-cfcc5656247f',
                parentId: 'a0fcecb7-21aa-46c4-a999-a0089abfbc6c',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'a0fcecb7-21aa-46c4-a999-a0089abfbc6c',
            parentId: '992fe2eb-78ce-4040-9a06-d0b91894ba7f',
          },
        ],
        id: '992fe2eb-78ce-4040-9a06-d0b91894ba7f',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'axisLabel',
        label: '坐标轴刻度标签文字',
        children: [
          {
            attribute: 'rotate',
            label: 'label旋转的角度',
            component: 'inputNumber',
            id: '04def6bf-518a-4c7f-98c2-eec1cba0dc0b',
            parentId: 'bac03a5c-cf9c-4de6-a725-16410d83ae5c',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'margin',
            label: '文字与轴线的距离',
            component: 'inputNumber',
            id: '7ef5c5fd-4207-4e58-b611-47bd42b75b28',
            parentId: 'bac03a5c-cf9c-4de6-a725-16410d83ae5c',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '1b85dedb-f2b6-4914-8fc7-a054f97566c6',
            parentId: 'bac03a5c-cf9c-4de6-a725-16410d83ae5c',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '77188bfc-0584-4f51-87a3-d8cc8273dde9',
            parentId: 'bac03a5c-cf9c-4de6-a725-16410d83ae5c',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'bac03a5c-cf9c-4de6-a725-16410d83ae5c',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'splitLine',
        label: '分割线',
        children: [
          {
            attribute: 'lineStyle',
            label: '分隔线样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'c10ac7ae-f90d-41a1-b041-aaf0bff949e3',
                parentId: '98505c6f-fd8e-4372-b8b1-801179abeb0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '33039a39-f41f-4847-88ae-7558840f0a81',
                parentId: '98505c6f-fd8e-4372-b8b1-801179abeb0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '4a8a9f09-c889-4465-8e29-964029e7d597',
                parentId: '98505c6f-fd8e-4372-b8b1-801179abeb0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '11264103-a57a-430c-99a0-0ee57a07a8a4',
                parentId: '98505c6f-fd8e-4372-b8b1-801179abeb0f',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '98505c6f-fd8e-4372-b8b1-801179abeb0f',
            parentId: '21d918fc-fd01-4066-bd98-5703e3ecf7a0',
          },
          {
            attribute: 'splitArea',
            label: '坐标轴分隔区域',
            children: [
              {
                attribute: 'areaStyle',
                label: '分隔区域样式',
                children: [
                  {
                    attribute: 'color',
                    label: '颜色',
                    component: 'colorPicker',
                    id: '1a718611-3674-4373-9a14-4346703e9cd5',
                    parentId: '2c94c597-f250-4d50-95e7-faf6561dd222',
                    component_attribute: {
                      value: null,
                    },
                  },
                  {
                    attribute: 'opacity',
                    label: '透明度',
                    component: 'inputNumber',
                    componentAttribute: {
                      precision: 1,
                    },
                    id: 'b2ba659b-1f97-4694-8953-61fa71f909c8',
                    parentId: '2c94c597-f250-4d50-95e7-faf6561dd222',
                    component_attribute: {
                      value: null,
                    },
                  },
                ],
                id: '2c94c597-f250-4d50-95e7-faf6561dd222',
                parentId: '7985c8b8-2bb0-42d8-92e8-4098bbebb4ce',
              },
            ],
            id: '7985c8b8-2bb0-42d8-92e8-4098bbebb4ce',
            parentId: '21d918fc-fd01-4066-bd98-5703e3ecf7a0',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'indicator',
            label: '触摸指示器',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'f38ed36f-463a-41af-8378-6a983a79d310',
                parentId: '775e0795-95ea-4a5b-8925-e970b32fe7e1',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '775e0795-95ea-4a5b-8925-e970b32fe7e1',
            parentId: '21d918fc-fd01-4066-bd98-5703e3ecf7a0',
          },
        ],
        id: '21d918fc-fd01-4066-bd98-5703e3ecf7a0',
        parentId: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
    ],
    id: 'bfbd2393-dd5f-4955-91b0-bdbf195193a8',
    parentId: null,
  },
  {
    attribute: 'tooltip',
    label: '提示框组件',
    children: [
      {
        attribute: 'trigger',
        label: '触发类型',
        component: 'Select',
        data: [
          {
            name: '数据项图形触发',
            value: 'item',
          },
          {
            name: '坐标轴触发',
            value: 'axis',
          },
          {
            name: '什么都不触发',
            value: 'none',
          },
        ],
        id: '46d4411b-7243-4c40-bbfd-3c4ee1ff09e4',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'axisPointer',
        label: '触摸指示器',
        children: [
          {
            attribute: 'type',
            label: '指示器类型',
            component: 'Select',
            data: [
              {
                name: '直线指示器',
                value: 'line',
              },
              {
                name: '阴影指示器',
                value: 'shadow',
              },
              {
                name: '无指示器',
                value: 'none',
              },
              {
                name: '十字准星指示器',
                value: 'cross',
              },
            ],
            id: 'f64e19f9-bad5-4d05-992f-523c301b3136',
            parentId: '27f82aec-32ee-4c8b-a129-d150305074de',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '指示器文本',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '141dc9dd-891a-4be7-808d-a8550c5eb226',
                parentId: '85c631bf-a74d-46dc-a9f5-7e9ad90e0073',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '6e3a0746-026b-4cb9-92b4-24700a98adbd',
                parentId: '85c631bf-a74d-46dc-a9f5-7e9ad90e0073',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'padding',
                label: '内边距',
                component: 'Input',
                id: 'd4103e0b-7fde-46b4-9d43-9fbeabd95a79',
                parentId: '85c631bf-a74d-46dc-a9f5-7e9ad90e0073',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'margin',
                label: '外边距',
                component: 'inputNumber',
                id: '56b713ca-8d7c-466c-b3d5-471b50c488e8',
                parentId: '85c631bf-a74d-46dc-a9f5-7e9ad90e0073',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '85c631bf-a74d-46dc-a9f5-7e9ad90e0073',
            parentId: '27f82aec-32ee-4c8b-a129-d150305074de',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'd7c48550-6acb-4e7e-a23b-492a4ace4881',
                parentId: '7a8041ee-ae84-442e-96ac-373b0733a75d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: 'a4cb75f3-23f3-4b9a-b1c1-3ff18c156958',
                parentId: '7a8041ee-ae84-442e-96ac-373b0733a75d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'be2f9cd3-3ae5-4846-b2ee-d8fa3e39e4c5',
                parentId: '7a8041ee-ae84-442e-96ac-373b0733a75d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'a6f0f2cf-7b93-48e1-97a1-96a49d738b10',
                parentId: '7a8041ee-ae84-442e-96ac-373b0733a75d',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '7a8041ee-ae84-442e-96ac-373b0733a75d',
            parentId: '27f82aec-32ee-4c8b-a129-d150305074de',
          },
          {
            attribute: 'shadowStyle',
            label: '阴影样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '15c4c0bf-cd60-4a60-9830-f7b99a3f54cc',
                parentId: 'f7f04dea-2e84-457a-b3ee-c79f98de9dc3',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: 'd9de7f39-d0d6-4414-b54e-eedb24520cb8',
                parentId: 'f7f04dea-2e84-457a-b3ee-c79f98de9dc3',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'f7f04dea-2e84-457a-b3ee-c79f98de9dc3',
            parentId: '27f82aec-32ee-4c8b-a129-d150305074de',
          },
          {
            attribute: '十字准星指示器',
            label: 'cross类型样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'ef5a3c84-20dd-4f0e-bc20-dd2ea1000735',
                parentId: 'ffe77171-3305-4553-8d85-08b46960d7c4',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: 'a24a98b8-9734-4020-8a7f-17bfc8a21150',
                parentId: 'ffe77171-3305-4553-8d85-08b46960d7c4',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '8244bba5-1987-4ea5-9dbb-12569ad408a8',
                parentId: 'ffe77171-3305-4553-8d85-08b46960d7c4',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '6cd92701-a411-4f6c-ad6a-7718586327b0',
                parentId: 'ffe77171-3305-4553-8d85-08b46960d7c4',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'ffe77171-3305-4553-8d85-08b46960d7c4',
            parentId: '27f82aec-32ee-4c8b-a129-d150305074de',
          },
        ],
        id: '27f82aec-32ee-4c8b-a129-d150305074de',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
      },
      {
        attribute: 'showContent',
        label: '是否显示提示框浮层',
        component: 'Radio',
        data: [
          {
            name: '是',
            value: true,
          },
          {
            name: '否',
            value: false,
          },
        ],
        id: '43d834dc-f714-4da6-ae49-24585a2645cc',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'triggerOn',
        label: '提示框触发的条件',
        component: 'Select',
        data: [
          {
            name: '鼠标移动时触发',
            value: 'mousemove',
          },
          {
            name: '鼠标点击时触发',
            value: 'click',
          },
          {
            name: '不触发',
            value: 'none',
          },
        ],
        id: 'b49ce837-6bc6-4038-a8fb-0ad51947ab2e',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'position',
        label: '位置',
        component: 'Input',
        id: '34c0764b-f8bc-49ef-a323-03d205411ebd',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'backgroundColor',
        label: '背景色',
        component: 'colorPicker',
        id: '8f60335f-1182-4caf-900b-f78433a30272',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'textStyle',
        label: '文字样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '856c1758-fc2e-4705-bc7a-9ca6260b03f3',
            parentId: '357c8bdc-7c1c-41b3-bd75-ad9412e13e79',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '112343d5-11ee-46cd-a226-cf04d0e857ec',
            parentId: '357c8bdc-7c1c-41b3-bd75-ad9412e13e79',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '357c8bdc-7c1c-41b3-bd75-ad9412e13e79',
        parentId: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
      },
    ],
    id: '415318e2-b3cd-42ac-b2a4-d0b7ff207809',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'axisPointer',
    label: '触摸指示器',
    children: [
      {
        attribute: 'type',
        label: '指示器类型',
        component: 'Select',
        data: [
          {
            name: '直线指示器',
            value: 'line',
          },
          {
            name: '阴影指示器',
            value: 'shadow',
          },
          {
            name: '无指示器',
            value: 'none',
          },
        ],
        id: '9346d18f-042e-4eec-a767-dc520e8a01da',
        parentId: '38f05cad-2bc7-42a5-82a1-a90996ac58e6',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'label',
        label: '指示器文本',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'bacb7582-318f-405b-a97a-3c2497156bd7',
            parentId: '1f660821-c8fc-4f8a-b881-505534f73b23',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '49d81e43-33a4-4aec-9def-e490db55b1fd',
            parentId: '1f660821-c8fc-4f8a-b881-505534f73b23',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: '38d9a626-b3c6-4a3b-b6d9-e2ebeb91d097',
            parentId: '1f660821-c8fc-4f8a-b881-505534f73b23',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '1f660821-c8fc-4f8a-b881-505534f73b23',
        parentId: '38f05cad-2bc7-42a5-82a1-a90996ac58e6',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'lineStyle',
        label: '线条样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '91f49f4f-73ec-48fc-961a-635b636147d3',
            parentId: '54203f67-1dd6-4384-ae39-b19354728197',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: 'e7732fbe-225e-4eb9-b3b2-9241c4de4637',
            parentId: '54203f67-1dd6-4384-ae39-b19354728197',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'type',
            label: '线的类型',
            component: 'Select',
            data: [
              {
                name: '实线',
                value: 'solid',
              },
              {
                name: '虚线',
                value: 'dashed',
              },
              {
                name: '点线',
                value: 'dotted',
              },
            ],
            id: '91d4ab38-ef0e-4bff-9803-e2c4b6f6e178',
            parentId: '54203f67-1dd6-4384-ae39-b19354728197',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '54203f67-1dd6-4384-ae39-b19354728197',
        parentId: '38f05cad-2bc7-42a5-82a1-a90996ac58e6',
      },
      {
        attribute: 'shadowStyle',
        label: '阴影样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '7d54ed7a-3eb5-4f10-8983-0a76d21e70e9',
            parentId: '6959b459-5fdf-40bd-9092-09ddd487fc80',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: '9121ca8c-580e-4713-850c-784a838e65b0',
            parentId: '6959b459-5fdf-40bd-9092-09ddd487fc80',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'triggerTooltip',
            label: '触发tooltip',
            component: 'Radio',
            data: [
              {
                name: '是',
                value: true,
              },
              {
                name: '否',
                value: false,
              },
            ],
            id: '7f9a6108-d58f-45cf-a9ac-37928688a715',
            parentId: '6959b459-5fdf-40bd-9092-09ddd487fc80',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'triggerOn',
            label: '触发的条件',
            component: 'Select',
            data: [
              {
                name: '鼠标移动时触发',
                value: 'mousemove',
              },
              {
                name: '鼠标点击时触发',
                value: 'click',
              },
              {
                name: '不触发',
                value: 'none',
              },
            ],
            id: 'dfbcdd7b-1c9a-4de0-862c-41f5b0c5dfd7',
            parentId: '6959b459-5fdf-40bd-9092-09ddd487fc80',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '6959b459-5fdf-40bd-9092-09ddd487fc80',
        parentId: '38f05cad-2bc7-42a5-82a1-a90996ac58e6',
      },
    ],
    id: '38f05cad-2bc7-42a5-82a1-a90996ac58e6',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'geo',
    label: '地理坐标系(暂时只支持echarts内置地图)',
    children: [
      {
        attribute: 'roam',
        label: '鼠标缩放和平移',
        component: 'Radio',
        data: [
          {
            name: '开启',
            value: true,
          },
          {
            name: '关闭',
            value: false,
          },
        ],
        defaultValue: false,
        id: 'a53a1fcf-d435-4a3e-90c7-0921da90d3d9',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'center',
        label: '视角的中心维度',
        component: 'Input',
        id: '452aa06f-cc63-4902-8431-a2fc1019c32b',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'aspectScale',
        label: '地图的长宽比',
        component: 'inputNumber',
        componentAttribute: {
          precision: 2,
        },
        id: 'f2e09ad9-3b91-4bbd-ad09-d4691e6620c6',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'zoom',
        label: '视角缩放比例',
        component: 'inputNumber',
        id: 'c4584ee3-717b-40bf-a9a3-bdec3a5b2dcc',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'label',
        label: '文本标签',
        children: [
          {
            attribute: 'position',
            label: '位置',
            component: 'Input',
            id: 'b8379ab6-9a8e-4ef7-9f88-99a607c0cc4a',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'rotate',
            label: '旋转角度',
            component: 'inputNumber',
            componentAttribute: {
              min: -90,
              max: 90,
            },
            id: '30cc61e0-5e0c-49c1-b9af-79f7f2ce6a46',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '背景色',
            component: 'colorPicker',
            id: 'dfd7ec95-cb4d-4fd4-a72b-587fc5cd4a6f',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '4f97e11d-37d8-4eca-8aca-bd0f99f089b1',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            component: 'colorPicker',
            id: '02ac64d9-1b35-421e-921a-6cb8ad216d03',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: 'e013846e-0ba4-48f4-980b-c8cde6ee70a8',
            parentId: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'd480e56f-d37d-43c3-92c2-0aff826daaf9',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'itemStyle',
        label: '地图区域图形样式',
        children: [
          {
            attribute: 'areaColor',
            label: '区域颜色',
            component: 'colorPicker',
            id: '1bad2cff-1265-4611-9500-3f450094fe5e',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'c7c42888-5375-4736-9a9b-0031a29b41be',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'borderColor',
            label: '区域描边颜色',
            component: 'colorPicker',
            id: 'a3152614-bdf4-4e87-8701-9009bcb1551e',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'borderWidth',
            label: '描边线宽',
            component: 'inputNumber',
            id: '161609b2-6fa1-43ed-a122-ff337f99a43e',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'borderType',
            label: '描边类型',
            component: 'Select',
            data: [
              {
                name: '实线',
                value: 'solid',
              },
              {
                name: '虚线',
                value: 'dashed',
              },
              {
                name: '点线',
                value: 'dotted',
              },
            ],
            id: '57015965-9e86-48c1-8246-8595ed35fd19',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            id: '58be0136-53aa-43fe-8200-d1bd8a8b33f0',
            parentId: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'bce67f34-f662-4562-b2f4-38d502a7ac82',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
      },
      {
        attribute: 'emphasis',
        label: '高亮状态下区域样式',
        children: [
          {
            attribute: 'disabled',
            label: '关闭高亮',
            component: 'Radio',
            data: [
              {
                name: '开启',
                value: true,
              },
              {
                name: '关闭',
                value: false,
              },
            ],
            defaultValue: false,
            id: '929f441b-a6f6-400a-b127-5cdd0eb19284',
            parentId: '6829b2c7-9ab9-460a-adb1-9f966264318e',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '文字标签',
            children: [
              {
                attribute: 'position',
                label: '位置',
                component: 'Input',
                id: '2c303498-319d-4e01-9cdc-d40bcb459c94',
                parentId: 'eb2d06b5-f8fc-498c-b382-925e6cce2f0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'c4b11a9b-30af-4c28-9a16-167f0d518d2d',
                parentId: 'eb2d06b5-f8fc-498c-b382-925e6cce2f0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '89494927-64df-4c55-aa9a-5316ecaa3387',
                parentId: 'eb2d06b5-f8fc-498c-b382-925e6cce2f0f',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'backgroundColor',
                label: '背景色',
                component: 'colorPicker',
                id: 'a83f9ec4-0447-4775-9188-f0f87df4b257',
                parentId: 'eb2d06b5-f8fc-498c-b382-925e6cce2f0f',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'eb2d06b5-f8fc-498c-b382-925e6cce2f0f',
            parentId: '6829b2c7-9ab9-460a-adb1-9f966264318e',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'itemStyle',
            label: '选中区域图形样式',
            children: [
              {
                attribute: 'areaColor',
                label: '区域颜色',
                component: 'colorPicker',
                id: 'b67de48d-7c5d-4002-8308-4e7164ef1f21',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '1a4ac320-3b3d-4f68-a0b0-60e5b9f919d0',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderColor',
                label: '区域描边颜色',
                component: 'colorPicker',
                id: 'b6ca7a76-53a9-439f-8eba-72c83b8ac185',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderWidth',
                label: '描边线宽',
                component: 'inputNumber',
                id: 'b97de714-3ac7-4308-89a8-eb1dd31271e1',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderType',
                label: '描边类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'cf950ecc-d072-4752-985f-9ebf1fee5717',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                id: '604e9b25-35fd-4c94-ac59-76fe44144227',
                parentId: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '40dc55b0-18a9-42f0-ab9c-5c5ccfe3900e',
            parentId: '6829b2c7-9ab9-460a-adb1-9f966264318e',
          },
        ],
        id: '6829b2c7-9ab9-460a-adb1-9f966264318e',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
      },
      {
        attribute: 'select',
        label: '选中状态下的样式',
        children: [
          {
            attribute: 'disabled',
            label: '关闭选中状态',
            component: 'Radio',
            data: [
              {
                name: '开启',
                value: true,
              },
              {
                name: '关闭',
                value: false,
              },
            ],
            defaultValue: false,
            id: 'b99685db-5fcb-42b0-b925-179fec2c1436',
            parentId: '795f4599-d57d-4e91-bea4-04d6c3f292e0',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '文字标签',
            children: [
              {
                attribute: 'position',
                label: '位置',
                component: 'Input',
                id: '83dff90b-7e3e-4c15-8399-ef99fa00f141',
                parentId: '02112469-6203-4daa-ad43-911011c5f50d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '56302026-9b0a-4b32-87ff-a7a7711285b7',
                parentId: '02112469-6203-4daa-ad43-911011c5f50d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: 'bfac1c90-b4db-4dea-aced-606886fdf1e3',
                parentId: '02112469-6203-4daa-ad43-911011c5f50d',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'backgroundColor',
                label: '背景色',
                component: 'colorPicker',
                id: '2e1dbbc6-2bc2-4ed0-915c-bb8fce994037',
                parentId: '02112469-6203-4daa-ad43-911011c5f50d',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '02112469-6203-4daa-ad43-911011c5f50d',
            parentId: '795f4599-d57d-4e91-bea4-04d6c3f292e0',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'itemStyle',
            label: '区域图形样式',
            children: [
              {
                attribute: 'areaColor',
                label: '区域颜色',
                component: 'colorPicker',
                id: 'ffcc488f-f5ef-4876-8950-c3bb013ebf38',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'e9348957-b05c-4022-a369-5fd37d38d22f',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderColor',
                label: '区域描边颜色',
                component: 'colorPicker',
                id: 'dc482b7d-2c50-4016-bfae-7638dfa16155',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderWidth',
                label: '描边线宽',
                component: 'inputNumber',
                id: 'c3ff9a21-237b-44f6-a58b-9002f35ac28a',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderType',
                label: '描边类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '9e3337e0-e729-476f-a16f-bb3979f84232',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                id: '2c4e32ab-6e94-4983-ad5e-d1befc9b9c44',
                parentId: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '749d1dc3-ffde-4efb-ad84-f065fe9b6130',
            parentId: '795f4599-d57d-4e91-bea4-04d6c3f292e0',
          },
        ],
        id: '795f4599-d57d-4e91-bea4-04d6c3f292e0',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        component: 'Input',
        id: '7ee39ec2-2a4f-40ce-bab7-4db0cb2a9f4d',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        component: 'Input',
        id: '87d48427-ca18-416d-984b-6358ded30a68',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        component: 'Input',
        id: '69a3d88b-7e62-4abf-8965-0fba3d0e046d',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        component: 'Input',
        id: '4563622d-21ce-4ade-80c7-c6135e50ab17',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'silent',
        label: '不响应和触发鼠标事件',
        component: 'Radio',
        data: [
          {
            name: '是',
            value: true,
          },
          {
            name: '否',
            value: false,
          },
        ],
        defaultValue: false,
        id: 'f4ca0a12-5c28-4403-9078-716dd0d6420c',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'tooltip',
        label: '提示框组件',
        children: [
          {
            attribute: 'position',
            label: '位置',
            component: 'Input',
            id: '81802591-1b00-4f26-b1fb-d75b5f1a3ab3',
            parentId: '0607a4e8-8449-40f2-a3da-973e85159a60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            component: 'colorPicker',
            id: 'c8d7d4b2-2a54-4868-a472-e184af6cdbdd',
            parentId: '0607a4e8-8449-40f2-a3da-973e85159a60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: 'dabb2c82-decb-4e7c-a611-2ee5b04d1c5d',
            parentId: '0607a4e8-8449-40f2-a3da-973e85159a60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'textStyle',
            label: '提示框浮层样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '4ca40bf2-817e-4495-8668-f3e1992b486b',
                parentId: '1fb9833f-8978-4bc7-a9ce-843c1ecad986',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: 'd44fb22a-7e2c-4e08-a5c9-ecaa7b9bf38a',
                parentId: '1fb9833f-8978-4bc7-a9ce-843c1ecad986',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '1fb9833f-8978-4bc7-a9ce-843c1ecad986',
            parentId: '0607a4e8-8449-40f2-a3da-973e85159a60',
          },
        ],
        id: '0607a4e8-8449-40f2-a3da-973e85159a60',
        parentId: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
    ],
    id: '1be4d73e-30d3-4792-8218-8e14ee243dc0',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'series.line',
    label: '折线图',
    children: [
      {
        attribute: 'symbol',
        label: '折现图拐点图标',
        component: 'upload',
        prefixValue: 'image://',
        id: '7b111aa3-b42e-4de0-9a17-a3dc99ceefc5',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'symbolSize',
        label: '标记图形大小',
        component: 'inputNumber',
        id: 'e7518fc6-7fd2-4f80-8c38-587bc76e2313',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'showSymbol',
        label: '显示symbol',
        component: 'Radio',
        data: [
          {
            name: '显示',
            value: true,
          },
          {
            name: '隐藏',
            value: false,
          },
        ],
        defaultValue: false,
        id: 'b59cfdbb-b6f2-431a-90a3-75e8590e122e',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'label',
        label: '文本标签',
        children: [
          {
            attribute: 'position',
            label: '位置',
            component: 'Input',
            id: '9c7d75c5-c1bd-44ab-b8b8-618af2e9e3cd',
            parentId: '15e5ceb5-9e56-4d95-a6fd-da0ee3b89c60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '55297452-f659-425c-9f3c-eaa6e81a55a5',
            parentId: '15e5ceb5-9e56-4d95-a6fd-da0ee3b89c60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '4ad877b3-280e-4bbc-a22c-a93607e80aee',
            parentId: '15e5ceb5-9e56-4d95-a6fd-da0ee3b89c60',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: '27cbfd31-84f5-4c78-809f-fd4f845e8c78',
            parentId: '15e5ceb5-9e56-4d95-a6fd-da0ee3b89c60',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '15e5ceb5-9e56-4d95-a6fd-da0ee3b89c60',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'lineStyle',
        label: '线条样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'a4965ac6-2406-429b-8405-e12101dc4ca5',
            parentId: '2def03c9-3068-4988-8397-035035ced119',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: '277b2fa4-8c79-4073-93b4-a186d62f8795',
            parentId: '2def03c9-3068-4988-8397-035035ced119',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'type',
            label: '线的类型',
            component: 'Select',
            data: [
              {
                attribute: 'width',
                label: '宽度',
                type: 'number',
                component: 'inputNumber',
              },
              {
                name: '实线',
                value: 'solid',
              },
              {
                name: '虚线',
                value: 'dashed',
              },
              {
                name: '点线',
                value: 'dotted',
              },
            ],
            id: '98a096a3-5c35-4b57-ba65-1a2865fbc493',
            parentId: '2def03c9-3068-4988-8397-035035ced119',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '2def03c9-3068-4988-8397-035035ced119',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
      },
      {
        attribute: 'areaStyle',
        label: '区域填充样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'b1064051-fd22-41e9-97d0-0a389ae1dd70',
            parentId: '79097ef4-2517-4069-8b05-2c76bec14cec',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: '0d0d42ad-bb87-421e-b4b2-0d94f81e21b7',
            parentId: '79097ef4-2517-4069-8b05-2c76bec14cec',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '79097ef4-2517-4069-8b05-2c76bec14cec',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
      },
      {
        attribute: 'emphasis',
        label: '高亮状态',
        children: [
          {
            attribute: 'disabled',
            label: '关闭高亮',
            component: 'Radio',
            data: [
              {
                name: '开启',
                value: true,
              },
              {
                name: '关闭',
                value: false,
              },
            ],
            defaultValue: false,
            id: 'b27a1c43-ef77-4030-b8aa-ef1cbd27855d',
            parentId: 'fdd253b6-9182-4131-937a-b700f3f72393',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '文字标签',
            children: [
              {
                attribute: 'position',
                label: '位置',
                component: 'Input',
                id: '71365d71-8946-427f-91ff-203f62dbce31',
                parentId: 'c57d2786-65eb-4d47-b617-fe5694c3fa26',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'f91c1f2d-e3f8-4eea-b51f-7861d7280569',
                parentId: 'c57d2786-65eb-4d47-b617-fe5694c3fa26',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '54687363-cca3-48a6-86bf-c0df68169991',
                parentId: 'c57d2786-65eb-4d47-b617-fe5694c3fa26',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'backgroundColor',
                label: '背景色',
                component: 'colorPicker',
                id: 'ccdac0a4-fa50-4f01-a697-04560e03366d',
                parentId: 'c57d2786-65eb-4d47-b617-fe5694c3fa26',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'c57d2786-65eb-4d47-b617-fe5694c3fa26',
            parentId: 'fdd253b6-9182-4131-937a-b700f3f72393',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'itemStyle',
            label: '选中区域图形样式',
            children: [
              {
                attribute: 'areaColor',
                label: '区域颜色',
                component: 'colorPicker',
                id: 'ea6fba1f-8a1e-4707-94cc-5e8349dd019d',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'b5ef9b7f-e0d3-444c-a017-ff8b2a1d33ca',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderColor',
                label: '区域描边颜色',
                component: 'colorPicker',
                id: '34526314-b0d1-4408-bc35-2abf47430214',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderWidth',
                label: '描边线宽',
                component: 'inputNumber',
                id: 'c6012cf4-4d47-4a09-8e62-0276cf266521',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderType',
                label: '描边类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: 'c86b58b6-be24-4deb-8a2b-06667ee14a88',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                id: '57e6129a-b3ce-40f9-a4e4-4606a639abf9',
                parentId: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'bf62755e-9d15-4b8e-8de3-5e8e89753e27',
            parentId: 'fdd253b6-9182-4131-937a-b700f3f72393',
          },
        ],
        id: 'fdd253b6-9182-4131-937a-b700f3f72393',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
      },
      {
        attribute: 'emphasis',
        label: '高亮状态',
        children: [
          {
            attribute: 'disabled',
            label: '关闭高亮',
            component: 'Radio',
            data: [
              {
                name: '开启',
                value: true,
              },
              {
                name: '关闭',
                value: false,
              },
            ],
            defaultValue: false,
            id: 'ac1cced6-f37a-4dff-ae88-ee26a5034f79',
            parentId: 'b7b518fa-8df0-4e83-acd6-d6ce74d9b97b',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '文字标签',
            children: [
              {
                attribute: 'position',
                label: '位置',
                component: 'Input',
                id: '4d8968a3-c57b-4ed1-96e0-2cbc0b625576',
                parentId: 'c675e680-0b34-46ca-856f-e66450053d99',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '9b8ff6a0-2477-4863-820e-1ac6f069d5fd',
                parentId: 'c675e680-0b34-46ca-856f-e66450053d99',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: '596e03ee-4d63-4e4f-a196-ae3820a19109',
                parentId: 'c675e680-0b34-46ca-856f-e66450053d99',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'backgroundColor',
                label: '背景色',
                component: 'colorPicker',
                id: 'd8ee6a13-322a-4817-b6fc-c9ca8fe9dcd8',
                parentId: 'c675e680-0b34-46ca-856f-e66450053d99',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'c675e680-0b34-46ca-856f-e66450053d99',
            parentId: 'b7b518fa-8df0-4e83-acd6-d6ce74d9b97b',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'itemStyle',
            label: '选中区域图形样式',
            children: [
              {
                attribute: 'areaColor',
                label: '区域颜色',
                component: 'colorPicker',
                id: 'bca8d256-57d8-475e-bbc5-ad7024b846fd',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'c49c695f-50e9-4095-ac2d-fb81f5696976',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderColor',
                label: '区域描边颜色',
                component: 'colorPicker',
                id: '555ca6d7-9697-44e8-83f1-d4a9f33f1c82',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderWidth',
                label: '描边线宽',
                component: 'inputNumber',
                id: 'f15e7b04-6918-43fa-8f57-323a97b5cbca',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderType',
                label: '描边类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '1cffcdbd-2f52-43af-aaff-f9b00a5d5cea',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                id: '9ba4fd74-d9cd-4f2d-955d-f115384852e9',
                parentId: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'a558d16b-7636-4b5e-a51d-eda6bf30f6ab',
            parentId: 'b7b518fa-8df0-4e83-acd6-d6ce74d9b97b',
          },
        ],
        id: 'b7b518fa-8df0-4e83-acd6-d6ce74d9b97b',
        parentId: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
      },
    ],
    id: '4bfb2bd1-b325-4e99-90fd-fc39c97e356b',
    parentId: null,
  },
  {
    attribute: 'series.bar',
    label: '柱状图',
    children: [
      {
        attribute: 'showBackground',
        label: '显示/隐藏柱条背景',
        component: 'Radio',
        data: [
          {
            name: '显示',
            value: true,
          },
          {
            name: '隐藏',
            value: false,
          },
        ],
        defaultValue: false,
        id: '3b053ec7-dd51-4a28-9a97-c899899079ae',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'backgroundStyle',
        label: '柱条背景样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '90dd1fb9-241e-4f48-a430-4c134110a880',
            parentId: 'c8a89740-4fb2-46b0-915f-5cb0a84961fc',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
            id: '762b8b84-01d8-4454-975e-3e46e3b78785',
            parentId: 'c8a89740-4fb2-46b0-915f-5cb0a84961fc',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'c8a89740-4fb2-46b0-915f-5cb0a84961fc',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
      },
      {
        attribute: 'label',
        label: '文字标签',
        children: [
          {
            attribute: 'position',
            label: '位置',
            component: 'Input',
            id: 'fe96d5c8-76b1-4fb5-9586-6ca17dca77e4',
            parentId: 'a7f9d5d0-cd14-46df-bdc3-58fd85a0212d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'da6e87d7-3b4d-45da-8c4e-2f60a5abe094',
            parentId: 'a7f9d5d0-cd14-46df-bdc3-58fd85a0212d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '1ad7a5d7-9223-4e39-9e9a-ea447f2e0011',
            parentId: 'a7f9d5d0-cd14-46df-bdc3-58fd85a0212d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            component: 'colorPicker',
            id: 'e204f267-98c1-4cfc-9171-ef335647e23d',
            parentId: 'a7f9d5d0-cd14-46df-bdc3-58fd85a0212d',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'a7f9d5d0-cd14-46df-bdc3-58fd85a0212d',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'itemStyle',
        label: '图形样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'd9bbb53c-5f49-4a8b-b045-4630be356a53',
            parentId: 'cc901f90-060f-4d91-8aa9-4597eb9c03f8',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'opacity',
            label: '透明度',
            component: 'inputNumber',
            id: '58f4a7e7-c0dc-4a8b-a04d-0000880a9fa0',
            parentId: 'cc901f90-060f-4d91-8aa9-4597eb9c03f8',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: 'cc901f90-060f-4d91-8aa9-4597eb9c03f8',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
      },
      {
        attribute: 'barWidth',
        label: '柱条的宽度',
        component: 'Input',
        id: '24df61c2-0d20-4c34-acde-d5505a5f21ff',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'barGap',
        label: '不同系列的柱间距离',
        component: 'Input',
        id: '0aced502-4d89-49eb-974f-d9372da2ac29',
        parentId: '36326648-fc9f-4d9c-95ed-2163a68b5525',
        componentAttribute: {
          placeholder: '单位百分比',
        },
        component_attribute: {
          value: null,
        },
      },
    ],
    id: '36326648-fc9f-4d9c-95ed-2163a68b5525',
    parentId: null,
  },
  {
    attribute: 'series.pie',
    label: '饼图',
    children: [
      {
        attribute: 'roseType',
        label: '是否是南丁格尔图',
        component: 'Radio',
        data: [
          {
            name: '是',
            value: true,
          },
          {
            name: '否',
            value: false,
          },
        ],
        defaultValue: false,
        id: 'c815de0c-6fac-4710-b0b7-861580446696',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        component: 'Input',
        id: '9ccfab9e-f4e7-4353-8450-de49bd9f2c7a',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        component: 'Input',
        id: 'bcd96eb6-0911-41b0-b084-0e78efa2e1f6',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        component: 'Input',
        id: 'aba98f1d-a34f-4ff7-bd04-2cccdfe80318',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        component: 'Input',
        id: 'a26de7e8-498f-44cf-9131-449516c92726',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'label',
        label: '文本标签',
        children: [
          {
            attribute: 'position',
            label: '位置',
            component: 'Select',
            data: [
              {
                name: '饼图扇区外侧',
                value: 'outside',
              },
              {
                name: '饼图扇区内部',
                value: 'inside',
              },
              {
                name: '饼图中心位置',
                value: 'center',
              },
            ],
            id: 'fa113083-59ff-4d59-8933-6d7964aec474',
            parentId: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'rotate',
            label: '旋转角度',
            component: 'Select',
            id: '437e43f6-60a6-4711-a44a-ce8cc1fdabf6',
            parentId: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: '2919b339-c2c3-4554-b7ea-835beba8aaab',
            parentId: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            component: 'inputNumber',
            id: '8b06d44f-b202-470b-a5a8-7285b702c3ce',
            parentId: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'padding',
            label: '内边距',
            component: 'Input',
            id: 'a6ad4412-edd8-458c-b21b-886f45d3a1c9',
            parentId: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '6c5608ee-ecc1-4040-a278-fb1b74a2248d',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'labelLine',
        label: '视觉引导线',
        children: [
          {
            attribute: 'smooth',
            label: '是否平滑视觉引导线',
            component: 'Radio',
            data: [
              {
                name: '显示',
                value: true,
              },
              {
                name: '隐藏',
                value: false,
              },
            ],
            id: '5c9b7762-5602-4bce-920d-523cacda1a88',
            parentId: 'd707e514-2b79-4221-a105-b1ddca66576a',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: '1ad61ba3-6435-4624-a299-c9f03d01774f',
                parentId: '69f08045-4795-4619-a643-291c6333eb90',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'width',
                label: '宽度',
                component: 'inputNumber',
                id: '7e0b86f4-2983-46ef-bc37-35e2a8c1bcbe',
                parentId: '69f08045-4795-4619-a643-291c6333eb90',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'type',
                label: '线的类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '6c5c3f64-5405-4965-98cd-2fa31f083413',
                parentId: '69f08045-4795-4619-a643-291c6333eb90',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
                id: '7dc3c64a-d6a7-4f85-8f0f-a08a96233788',
                parentId: '69f08045-4795-4619-a643-291c6333eb90',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: '69f08045-4795-4619-a643-291c6333eb90',
            parentId: 'd707e514-2b79-4221-a105-b1ddca66576a',
          },
        ],
        id: 'd707e514-2b79-4221-a105-b1ddca66576a',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
        _component: 'Checkbox',
        component_attribute: {
          value: null,
        },
        _component_field: {
          attribute: 'show',
        },
      },
      {
        attribute: 'itemStyle',
        label: '图形样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            component: 'colorPicker',
            id: 'd2d3c5c4-0998-468b-b250-b4e18a4f6b9c',
            parentId: '76edaff5-bfaa-4dd7-9c36-1d02ccc4d6c1',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'borderColor',
            label: '描边颜色',
            component: 'colorPicker',
            id: '6f21ef38-2580-4f96-b0a1-47bbc5ea87aa',
            parentId: '76edaff5-bfaa-4dd7-9c36-1d02ccc4d6c1',
            component_attribute: {
              value: null,
            },
          },
        ],
        id: '76edaff5-bfaa-4dd7-9c36-1d02ccc4d6c1',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
      },
      {
        attribute: 'emphasis',
        label: '高亮状态',
        children: [
          {
            attribute: 'disabled',
            label: '关闭高亮',
            component: 'Radio',
            data: [
              {
                name: '开启',
                value: true,
              },
              {
                name: '关闭',
                value: false,
              },
            ],
            defaultValue: false,
            id: '089d104b-a5c8-49bf-803a-1742053c642b',
            parentId: 'fb9b37ef-4adf-4e65-b499-bed1641d8e62',
            component_attribute: {
              value: null,
            },
          },
          {
            attribute: 'label',
            label: '文字标签',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'b79d9f9f-c5bc-4a55-8e8b-23e7c7b2a41b',
                parentId: 'fac36d4f-d5f4-4849-85da-63cbb3dd7bc2',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'fontSize',
                label: '文字大小',
                component: 'inputNumber',
                id: 'f36c3111-2721-4a93-a37f-de2519873031',
                parentId: 'fac36d4f-d5f4-4849-85da-63cbb3dd7bc2',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'backgroundColor',
                label: '背景色',
                component: 'colorPicker',
                id: '29b58280-deee-427b-bfcd-f0f17c83feac',
                parentId: 'fac36d4f-d5f4-4849-85da-63cbb3dd7bc2',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'fac36d4f-d5f4-4849-85da-63cbb3dd7bc2',
            parentId: 'fb9b37ef-4adf-4e65-b499-bed1641d8e62',
            _component: 'Checkbox',
            component_attribute: {
              value: null,
            },
            _component_field: {
              attribute: 'show',
            },
          },
          {
            attribute: 'itemStyle',
            label: '选中区域图形样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                component: 'colorPicker',
                id: 'd6ea79ad-b720-4fb9-ae8a-7dd9eb8bd31a',
                parentId: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderColor',
                label: '区域描边颜色',
                component: 'colorPicker',
                id: '86b7e437-7c9f-4f3e-90fd-031fa1a60c1f',
                parentId: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderWidth',
                label: '描边线宽',
                component: 'inputNumber',
                id: 'aa587bfa-92a9-4d1c-a3e2-a377392bff71',
                parentId: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'borderType',
                label: '描边类型',
                component: 'Select',
                data: [
                  {
                    name: '实线',
                    value: 'solid',
                  },
                  {
                    name: '虚线',
                    value: 'dashed',
                  },
                  {
                    name: '点线',
                    value: 'dotted',
                  },
                ],
                id: '8148f87c-4f64-4c9a-b7fb-df8fc74b85e8',
                parentId: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
                component_attribute: {
                  value: null,
                },
              },
              {
                attribute: 'opacity',
                label: '透明度',
                component: 'inputNumber',
                id: '96caebd1-c06e-4db3-90b0-a323a56782af',
                parentId: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
                component_attribute: {
                  value: null,
                },
              },
            ],
            id: 'e1c42557-73c6-4d67-b856-d1f4e0fbcc27',
            parentId: 'fb9b37ef-4adf-4e65-b499-bed1641d8e62',
          },
        ],
        id: 'fb9b37ef-4adf-4e65-b499-bed1641d8e62',
        parentId: 'c5e1314f-1638-473d-a416-2c9404f77d74',
      },
    ],
    id: 'c5e1314f-1638-473d-a416-2c9404f77d74',
    parentId: null,
    _component: 'Checkbox',
    component_attribute: {
      value: null,
    },
    _component_field: {
      attribute: 'show',
    },
  },
  {
    attribute: 'textStyle',
    label: '全局字体样式',
    children: [
      {
        attribute: 'color',
        label: '颜色',
        component: 'colorPicker',
        id: 'a662fb8f-2add-4239-af22-58583ee7084d',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'fontStyle',
        label: '字体的风格',
        component: 'Select',
        data: [
          {
            name: 'normal',
            value: 'normal',
          },
          {
            name: 'italic',
            value: 'italic',
          },
          {
            name: 'oblique',
            value: 'oblique',
          },
        ],
        id: '235c338d-79e4-4f18-9f63-8096ccfc1200',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'fontWeight',
        label: '文字字体的粗细',
        component: 'inputNumber',
        componentAttribute: {
          allowCreate: true,
          filterable: true,
        },
        id: '49a95fd6-1852-429b-8826-fefc86abe646',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'fontFamily',
        label: '文字字体',
        component: 'Input',
        id: 'fd03061f-6bf5-4f79-8f02-78d245acd3dd',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'fontSize',
        label: '文字大小',
        component: 'inputNumber',
        id: 'a2ce245e-09cf-4c48-a2eb-b61ad549287d',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'lineHeight',
        label: '行高',
        component: 'inputNumber',
        id: 'e1641a55-da12-4d6b-b75c-a32e8b4c0e75',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'width',
        label: '宽度',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
        id: 'c0814ee8-1a86-478a-b71b-8dedf5cc9fd3',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
      {
        attribute: 'height',
        label: '高度',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
        id: '0ac2e477-88ec-439c-bd22-bf6be8da9373',
        parentId: '24da380d-357a-4da1-891e-de41f90bd358',
        component_attribute: {
          value: null,
        },
      },
    ],
    id: '24da380d-357a-4da1-891e-de41f90bd358',
    parentId: null,
  },
]
export default echartsOptions
