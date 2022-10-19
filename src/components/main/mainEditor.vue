<template>
  <div class="minder-container" :style="{height: height + 'px'}">
    <el-button :disabled="disabled" class="save-btn" @click="save" type="primary">{{t('minder.main.main.save')}}</el-button>
    <navigator/>
  </div>
</template>

<script>
import { editMenuProps, mainEditorProps, priorityProps } from "../../props";
import Navigator from "./navigator";
import { markChangeNode, setPriorityView, setPriorityViewSpecial } from "../../script/tool/utils";
import Locale from '/src/mixins/locale';
export default {
  components: {Navigator},
  mixins: [Locale],
  props: {
    ...editMenuProps,
    ...mainEditorProps,
    ...priorityProps,
    tags: Array
  },
  data() {
    return {
      minder: {}
    }
  },
  mounted() {
    let Editor = require('../../script/editor');
    let el = this.$el;
    let editor = window.editor = new Editor(el, this.editMenuProps);
    if (this.importJson) {
      editor.minder.importJson(this.importJson);
    }
    window.minder = window.km = editor.minder;
    window.minderEditor = editor;
    window.minder.moveEnable = this.moveEnable;

    window.minder.on('beforeExecCommand', function (event) {
      // 是否允许删除
      const allowDelete = event.minder.getSelectedNodes().every(function (node) {
        return node.data.allowDelete !== false;
      });
      if (event.commandName === 'removenode' && !allowDelete) {
        event.stopPropagationImmediately();
        return false;
      }
    });

    window.minder.on('preExecCommand', function (env) {
      let selectNodes = env.minder.getSelectedNodes();
      let notChangeCommands = new Set(['camera', 'copy', 'expand', 'expandToLevel', 'hand',
        'layout', 'template', 'theme', 'zoom', 'zoomIn', 'zoomOut', 'append', 'appendchildnode', 'appendsiblingnode'])
      if (selectNodes && !notChangeCommands.has(env.commandName.toLocaleLowerCase())) {
        selectNodes.forEach((node) => {
            markChangeNode(node);
        })
      }
      if (env.commandName === 'movetoparent') {
        setTimeout(() => {
          let targetNode = minder.getSelectedNode();
          targetNode.parent.renderTree();
        }, 100);
      }
    });

    this.handlePriorityButton();
    this.handleTagButton();
    this.$emit('afterMount');
  },
  computed: {
    editMenuProps() {
      let sequenceEnable = this.sequenceEnable;
      let tagEnable = this.tagEnable;
      let progressEnable = this.progressEnable;
      let moveEnable = this.moveEnable;
      return {
        sequenceEnable,
        tagEnable,
        progressEnable,
        moveEnable
      }
    },
    prioritySpecial() {
      return this.priorities.length > 0
    }
  },
  methods: {
    save() {
      this.$emit('save', minder.exportJson());
    },
    setPriorityView() {
      if (this.prioritySpecial) {
        return setPriorityViewSpecial(this.priorities);
      }
      setPriorityView(this.priorityStartWithZero, this.priorityPrefix);
    },
    handlePriorityButton() {
      let priorityPrefix = this.priorityPrefix;
      let priorityStartWithZero = this.prioritySpecial ? false : this.priorityStartWithZero;
      let start = priorityStartWithZero ? 0 : 1;
      let res = '';
      let priorityCount = this.priorities.length || this.priorityCount;
      for (let i = 0; i < priorityCount; i++) {
        res += start++;
      }
      let priority = window.minder.hotbox.state('priority');
      res.replace(/./g, (p) => {
        const pVal = Number(p);
        const label = this.prioritySpecial ? this.priorities[pVal - 1] : (priorityPrefix + p);
        priority.button({
          position: 'ring',
          label: label,
          key: p,
          action: () => {
            minder.execCommand('Priority', priorityStartWithZero ? (pVal + 1) : pVal);
            this.setPriorityView();
          }
        });
      });
    },
    handleTagButton() {
      let tag = window.minder.hotbox.state('tag');
      this.tags.forEach((item) => {
        tag.button({
          position: 'ring',
          label: item,
          key: item,
          action: function () {
            minder.execCommand('resource', item);
          }
        });
      });
    }
  },
}
</script>

<style lang="scss">
  @import "../../style/editor.scss";
</style>

<style scoped>

  .save-btn {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }

  .minder-container {
    position: relative;
    /*height: 500px;*/
  }
</style>
