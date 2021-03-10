<template>
  <div class="mind-editor">
    <el-button class="save-btn" @click="save" type="primary">保存</el-button>
  </div>
</template>

<script>
import {editMenuProps, importJson} from "../props";
import Vue from 'vue'
export default {
  props: {
    ...editMenuProps,
    importJson
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
      this.$emit('save', this.$minder.exportJson());
    }
  },
}
</script>

<style lang="scss">
  @import "../../style/editor.scss";
</style>

<style scoped>
  .save-btn {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
</style>
