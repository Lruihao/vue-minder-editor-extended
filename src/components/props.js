/**
 * Api 列表
 */

export let importJson = {
  type: Object,
  default() {
    return {
      "root": {
        "data": {
          "text": "test111"
        },
        "children": [
          { "data": { "text": "地图" } },
          { "data": { "text": "百科","expandState":"collapse"}}
        ]
      },
      "template":"default"
    }
  }
}

export let priorityProps = {
  priorityCount: {
    type: Number,
    default: 4,
    validator: function (value) {
      // 优先级最多支持 9 个级别
      return value <= 9;
    }
  },
  priorityStartWithZero: {
    // 优先级是否从0开始
    type: Boolean,
    default: true
  },
  priorityPrefix: {
    // 优先级显示的前缀
    type: String,
    default: 'P'
  },
}

export let tagProps = {
  tags: {
    // 自定义标签
    type: Array,
    default() {
      return [
        {
          key: 'module',
          value: '模块',
        },
        {
          key: 'case',
          value: '用例',
        },
        {
          key: 'prerequisite',
          value: '前置条件',
        },
        {
          key: 'steps',
          value: '测试步骤',
        },
        {
          key: 'result',
          value: '预期结果',
        },
        {
          key: 'remark',
          value: '备注',
        }]
    }
  }
}

export let editMenuProps = {
  sequenceEnable: {
    type: Boolean,
    default: true
  },
  tagEnable: {
    type: Boolean,
    default: true
  },
  progressEnable: {
    type: Boolean,
    default: true
  },
}
