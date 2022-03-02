let echartsOptions = [
  {
    attribute: 'title',
    label: '标题组件',
    children: [
      {
        attribute: 'show',
        label: '显示/隐藏该组件',
        type: 'boolean',
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
      },
      {
        attribute: 'text',
        label: '主标题文本',
        type: 'string',
        component: 'Input',
      },
      {
        attribute: 'textStyle',
        label: '主标题文本样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: '#333',
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            type: 'string',
            component: 'Select',
            defaultValue: 'normal',
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
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            type: 'string',
            component: 'inputNumber',
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
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            type: 'string',
            component: 'Input',
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'width',
            label: '宽度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
        ],
      },
      {
        attribute: 'text',
        label: '副标题文本',
        type: 'string',
        component: 'Input',
      },
      {
        attribute: 'textStyle',
        label: '副标题文本样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: '#333',
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            type: 'string',
            component: 'Select',
            defaultValue: 'normal',
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
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            type: 'number',
            component: 'inputNumber',
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
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            type: 'string',
            component: 'Input',
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'align',
            label: '文字水平对齐方式',
            type: 'string',
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
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'width',
            label: '宽度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
        ],
      },
      {
        attribute: 'textAlign',
        label: '整体水平对齐方式',
        type: 'string',
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
      },
      {
        attribute: 'padding',
        label: '内边距',
        type: 'number|array',
        component: 'Input',
      },
      {
        attribute: 'itemGap',
        label: '主副标题之间的间距',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        type: 'number',
        component: 'Input',
      },
    ],
  },
  {
    attribute: 'legend',
    label: '图例组件',
    children: [
      {
        attribute: 'type',
        label: '图例类型',
        type: 'string',
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
      },
      {
        attribute: 'show',
        label: '显示/隐藏',
        type: 'boolean',
        component: 'Select',
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
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'width',
        label: '宽度',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'height',
        label: '高度',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'orient',
        label: '图例列表的布局朝向',
        type: 'string',
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
      },
      {
        attribute: 'align',
        label: '对齐方式',
        type: 'string',
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
      },
      {
        attribute: 'padding',
        label: '图例内边距',
        type: 'number/array',
        component: 'Input',
      },
      {
        attribute: 'itemGap',
        label: '图例每项之间的间隔',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'itemWidth',
        label: '宽度',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'itemHeight',
        label: '高度',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'itemStyle',
        label: '图形样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
          },
          {
            attribute: 'opacity',
            label: '透明度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
          },
        ],
      },
      {
        attribute: 'lineStyle',
        label: '线的样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
          },
          {
            attribute: 'opacity',
            label: '透明度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              precision: 1,
            },
          },
          {
            attribute: 'width',
            label: '线宽',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'type',
            label: '线的类型',
            type: 'string',
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
          },
        ],
      },
      {
        attribute: 'formatter',
        label: '格式化图例文本',
        type: 'code',
        component: 'codeEditor',
      },
      {
        attribute: 'textStyle',
        label: '图例文本样式',
        children: [
          {
            attribute: 'color',
            label: '文本颜色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: '#333',
          },
          {
            attribute: 'fontStyle',
            label: '字体的风格',
            type: 'string',
            component: 'Select',
            defaultValue: 'normal',
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
          },
          {
            attribute: 'fontWeight',
            label: '文字字体的粗细',
            type: 'number',
            component: 'inputNumber',
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
          },
          {
            attribute: 'fontFamily',
            label: '文字字体',
            type: 'string',
            component: 'Input',
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'backgroundColor',
            label: '背景色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: 'transparent',
          },
          {
            attribute: 'padding',
            label: '内边距',
            type: 'number|array',
            component: 'Input',
          },
          {
            attribute: 'lineHeight',
            label: '行高',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'width',
            label: '宽度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
          {
            attribute: 'height',
            label: '高度',
            type: 'number',
            component: 'inputNumber',
            componentAttribute: {
              controls: true,
            },
          },
        ],
      },
    ],
  },
  {
    attribute: 'grid',
    label: '直角坐标系网格',
    children: [
      {
        attribute: 'show',
        label: '显示/隐藏',
        type: 'boolean',
        component: 'Select',
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
      },
      {
        attribute: 'left',
        label: '离容器左侧的距离',
        type: 'number/string',
        component: 'Input',
      },
      {
        attribute: 'right',
        label: '离容器右侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'bottom',
        label: '离容器下侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'top',
        label: '离容器上侧的距离',
        type: 'number',
        component: 'Input',
      },
      {
        attribute: 'width',
        label: '宽度',
        type: 'number',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
      },
      {
        attribute: 'height',
        label: '高度',
        type: 'number',
        component: 'inputNumber',
        componentAttribute: {
          controls: true,
        },
      },
      {
        attribute: 'containLabel',
        label: '是否包含坐标轴的刻度标签',
        type: 'boolean',
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
      },
      {
        attribute: 'backgroundColor',
        label: '背景色',
        type: 'string',
        component: 'colorPicker',
        defaultValue: 'transparent',
      },
      {
        attribute: 'tooltip',
        label: '提示框组件',
        children: [
          {
            attribute: 'show',
            label: '显示/隐藏',
            type: 'boolean',
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
          },
          {
            attribute: 'trigger',
            label: '触发类型',
            type: 'boolean',
            component: 'Radio',
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
          },
          {
            attribute: 'axisPointer',
            label: '坐标轴指示器配置项',
            children: [
              {
                attribute: 'type',
                label: '指示器类型',
                type: 'string',
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
              },
              {
                attribute: 'axis',
                label: '指示器的坐标轴',
                type: 'string',
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
              },
              {
                attribute: 'label',
                label: '指示器文本标签',
                children: [
                  {
                    attribute: 'show',
                    label: '显示/隐藏',
                    type: 'boolean',
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
                  },
                  {
                    attribute: 'precision',
                    label: '数值小数点精度',
                    type: 'number',
                    component: 'inputNumber',
                  },
                  {
                    attribute: 'formatter',
                    label: '文字格式化',
                    type: 'code',
                    component: 'codeEditor',
                  },
                  {
                    attribute: 'margin',
                    label: '距离轴的距离',
                    type: 'number',
                    component: 'inputNumber',
                  },
                  {
                    attribute: 'color',
                    label: '颜色',
                    type: 'string',
                    component: 'colorPicker',
                    defaultValue: '#333',
                  },
                  {
                    attribute: 'fontStyle',
                    label: '字体的风格',
                    type: 'string',
                    component: 'Select',
                    defaultValue: 'normal',
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
                  },
                  {
                    attribute: 'fontWeight',
                    label: '文字字体的粗细',
                    type: 'string',
                    component: 'inputNumber',
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
                  },
                  {
                    attribute: 'fontFamily',
                    label: '文字字体',
                    type: 'string',
                    component: 'Input',
                  },
                  {
                    attribute: 'fontSize',
                    label: '文字大小',
                    type: 'number',
                    component: 'inputNumber',
                  },
                  {
                    attribute: 'lineHeight',
                    label: '行高',
                    type: 'number',
                    component: 'inputNumber',
                  },
                  {
                    attribute: 'width',
                    label: '宽度',
                    type: 'number',
                    component: 'inputNumber',
                    componentAttribute: {
                      controls: true,
                    },
                  },
                  {
                    attribute: 'height',
                    label: '高度',
                    type: 'number',
                    component: 'inputNumber',
                    componentAttribute: {
                      controls: true,
                    },
                  },
                ],
              },
            ],
          },
          {
            attribute: 'position',
            label: '提示框浮层的位置',
            type: 'string',
            component: 'Input',
          },
          {
            attribute: 'formatter',
            label: '格式化图例文本',
            type: 'code',
            component: 'codeEditor',
          },
        ],
      },
    ],
  },
  {
    attribute: 'xAxis',
    label: 'x轴',
    children: [
      {
        attribute: 'show',
        label: '显示/隐藏',
        type: 'boolean',
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
      },
      {
        attribute: 'type',
        label: '坐标轴类型',
        type: 'string',
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
      },
      {
        attribute: 'nameTextStyle',
        label: '坐标轴名称的文字样式',
        children: [
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: '#333',
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            type: 'number',
            component: 'inputNumber',
          },
        ],
      },
      {
        attribute: 'min',
        label: '刻度最小值',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'max',
        label: '刻度最大值',
        type: 'number',
        component: 'inputNumber',
      },
      {
        attribute: 'axisLine',
        label: '坐标轴轴线',
        children: [
          {
            attribute: 'show',
            label: '显示/隐藏',
            type: 'boolean',
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
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                type: 'string',
                component: 'colorPicker',
                defaultValue: '#333',
              },
              {
                attribute: 'width',
                label: '宽度',
                type: 'number',
                component: 'inputNumber',
              },
              {
                attribute: 'type',
                label: '线的类型',
                type: 'string',
                component: 'Radio',
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
              },
              {
                attribute: 'opacity',
                label: '透明度',
                type: 'number',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
              },
            ],
          },
        ],
      },
      {
        attribute: 'axisLine',
        label: '坐标轴刻度',
        children: [
          {
            attribute: 'show',
            label: '显示/隐藏',
            type: 'boolean',
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
          },
          {
            attribute: 'lineStyle',
            label: '线条样式',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                type: 'string',
                component: 'colorPicker',
                defaultValue: '#333',
              },
              {
                attribute: 'width',
                label: '宽度',
                type: 'number',
                component: 'inputNumber',
              },
              {
                attribute: 'type',
                label: '线的类型',
                type: 'string',
                component: 'Radio',
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
              },
              {
                attribute: 'opacity',
                label: '透明度',
                type: 'number',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
              },
            ],
          },
        ],
      },
      {
        attribute: 'axisLabel',
        label: '坐标轴刻度标签文字',
        children: [
          {
            attribute: 'show',
            label: '显示/隐藏该组件',
            type: 'boolean',
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
            defaultValue: true,
          },
          {
            attribute: 'interval',
            label: '刻度标签的显示间隔',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'inside',
            label: '刻度标签是否朝内',
            type: 'boolean',
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
          },
          {
            attribute: 'rotate',
            label: 'label旋转的角度',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'margin',
            label: 'label与轴线的距离',
            type: 'number',
            component: 'inputNumber',
          },
          {
            attribute: 'formatter',
            label: '格式化图例文本',
            type: 'code',
            component: 'codeEditor',
          },
          {
            attribute: 'color',
            label: '颜色',
            type: 'string',
            component: 'colorPicker',
            defaultValue: '#333',
          },
          {
            attribute: 'fontSize',
            label: '文字大小',
            type: 'number',
            component: 'inputNumber',
          },
        ],
      },
      {
        attribute: 'splitLine',
        label: '分割线',
        children: [
          {
            attribute: 'show',
            label: '显示/隐藏',
            type: 'boolean',
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
          },
          {
            attribute: 'interval',
            label: '分隔线显示间隔',
            type: 'number',
            component: 'inputNumber',
            children: [
              {
                attribute: 'color',
                label: '颜色',
                type: 'string',
                component: 'colorPicker',
                defaultValue: '#333',
              },
              {
                attribute: 'width',
                label: '宽度',
                type: 'number',
                component: 'inputNumber',
              },
              {
                attribute: 'type',
                label: '线的类型',
                type: 'string',
                component: 'Radio',
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
              },
              {
                attribute: 'opacity',
                label: '透明度',
                type: 'number',
                component: 'inputNumber',
                componentAttribute: {
                  precision: 1,
                },
              },
              {
                attribute: 'splitArea',
                label: '坐标轴分隔区域',
                children: [
                  {
                    attribute: 'show',
                    label: '显示/隐藏',
                    type: 'boolean',
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
                  },
                  {
                    attribute: 'interval',
                    label: '刻度标签的显示间隔',
                    type: 'number',
                    component: 'inputNumber',
                  },
                  {
                    attribute: 'areaStyle',
                    label: '分隔区域样式',
                    children: [
                      {
                        attribute: 'color',
                        label: '颜色',
                        type: 'string',
                        component: 'colorPicker',
                        defaultValue: '#333',
                      },
                      {
                        attribute: 'opacity',
                        label: '透明度',
                        type: 'number',
                        component: 'inputNumber',
                        componentAttribute: {
                          precision: 1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export default echartsOptions
