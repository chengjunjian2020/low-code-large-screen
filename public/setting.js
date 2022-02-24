let settings = {
  name: '时间器',
  settingList: [
    {
      label: '图表尺寸',
      typesetting: 'row',
      settingList: [
        {
          text: '宽',
          component: 'InputNumber',
          value: 0,
        },
        {
          text: '高',
          component: 'InputNumber',
          value: 0,
        },
      ],
    },
    {
      label: '图表位置',
      typesetting: 'vertical',
      settingList: [
        {
          text: '',
          component: 'InputNumber',
          value: 0,
        },
        {
          text: '',
          component: 'InputNumber',
          value: 0,
        },
      ],
    },
  ],
  categorySetting: [
    {
      categoryName: '图标样式',
      disabled: false,
      typesetting: 'vertical',
      settingList: [
        {
          text: '字号',
          component: 'inputNumber',
          value: 14,
        },
        {
          text: '颜色',
          component: 'colorPicker ',
          value: '#fff',
        },
        {
          text: '右边距',
          component: 'SliderInput ',
          value: 0,
        },
      ],
    },
    {
      categoryName: '时间器',
      disabled: false,
      typesetting: 'vertical',
      settingList: [
        {
          text: '字体',
          component: 'Select',
          value: '',
        },
        {
          text: '格式化',
          component: 'Input',
          rules: [
            {
              required: true,
              message: '请输入',
              trigger: 'blur',
            },
          ],
          value: 'yyyy-MM-dd hh:mm:ss',
        },
        {
          text: '格式化',
          component: 'Checkbox',
          value: [],
        },
      ],
    },
    {
      categoryName: '图标样式',
      disabled: false,
      typesetting: 'vertical',
      orgType: 'tree',
      settingList: [
        {
          text: '字号',
          component: 'inputNumber',
          value: 14,
        },
        {
          text: '颜色',
          component: 'colorPicker ',
          value: '#fff',
        },
        {
          text: '右边距',
          component: 'SliderInput ',
          value: 0,
        },
      ],
      childrenList: [
        {
          categoryName: '图标样式',
          disabled: false,
          typesetting: 'vertical',
          orgType: 'tree',
          settingList: [
            {
              text: '字号',
              component: 'inputNumber',
              value: 14,
            },
            {
              text: '颜色',
              component: 'colorPicker ',
              value: '#fff',
            },
            {
              text: '右边距',
              component: 'SliderInput ',
              value: 0,
            },
          ],
          childrenList: [
            {
              categoryName: '图标样式',
              disabled: false,
              typesetting: 'vertical',
              orgType: 'tree',
              settingList: [],
              childrenList: [],
            },
          ],
        },
      ],
    },
  ],
}

/**
 * 数据源笔记
 * 字体
 * 字体粗细 数字千分位分隔
 *
 */
