<template>
  <div class="minder-container" :style="{height: height + 'px'}">
    <el-button :disabled="disabled" class="save-btn" @click="save" type="primary">保存</el-button>
    <navigator/>
  </div>
</template>

<script>
  import {editMenuProps, mainEditorProps, priorityProps} from "../props";
import Navigator from "./navigator";
import {markChangeNode} from "../../script/tool/utils";
export default {
  components: {Navigator},
  props: {
    ...editMenuProps,
    ...mainEditorProps,
    ...priorityProps
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

    window.minder.on('preExecCommand', function (env) {
      let selectNodes = env.minder.getSelectedNodes();
      let notChangeCommands = new Set(['camera', 'copy', 'expand', 'expandToLevel', 'hand',
        'layout', 'template', 'theme', 'zoom', 'zoomIn', 'zoomOut', 'append', 'appendchildnode', 'appendsiblingnode'])
      if (selectNodes && !notChangeCommands.has(env.commandName.toLocaleLowerCase())) {
        selectNodes.forEach((node) => {
            markChangeNode(node);
        })
      }
    });
    this.handlePriorityButton();
    this.$emit('afterMount');
  },
  computed: {
    editMenuProps() {
      let sequenceEnable = this.sequenceEnable;
      let tagEnable = this.tagEnable;
      let progressEnable = this.progressEnable;
      return {
        sequenceEnable,
        tagEnable,
        progressEnable
      }
    }
  },
  methods: {
    save() {
      this.$emit('save', minder.exportJson());
    },
    handlePriorityButton() {
      let priorityPrefix = this.priorityPrefix;
      let priorityStartWithZero = this.priorityStartWithZero;
      let start = priorityStartWithZero ? 0 : 1;
      let res = '';
      for (let i = 0; i < this.priorityCount; i++) {
        res += start++;
      }
      let priority = window.minder.hotbox.state('priority');
      res.replace(/./g, function (p) {
        priority.button({
          position: 'ring',
          label: priorityPrefix + p,
          key: p,
          action: function () {
            let pVal = parseInt(p);
            minder.execCommand('Priority', priorityStartWithZero ? (pVal + 1) : pVal);
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
