<template>
<div class="main-container">
  <header-menu
    :sequence-enable="sequenceEnable"
    :tag-enable="tagEnable"
    :progress-enable="progressEnable"
    :priority-count="priorityCount"
    :priority-prefix="priorityPrefix"
    :priority-start-with-zero="priorityStartWithZero"
    :tags="tags"
  />
  <main-editor :import-json="importJson"/>
  <navigator/>
</div>

</template>

<script>
import headerMenu from '@/components/header'
import mainEditor from '@/components/main/mainEditor'
import navigator from '@/components/main/navigator'

export default {
  name: 'editor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
  props: {
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
      type: String,
      default: 'P'
    },
    tags: {
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
    },
    importJson: {
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
  },
}

</script>
