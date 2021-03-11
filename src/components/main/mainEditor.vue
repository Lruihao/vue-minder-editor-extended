<template>
  <div class="minder-container">
    <el-button class="save-btn" @click="save" type="primary">保存</el-button>
    <navigator/>
  </div>
</template>

<script>
import {editMenuProps, importJson} from "../props";
import Vue from 'vue'
import Navigator from "./navigator";
export default {
  components: {Navigator},
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
      this.$emit('save', minder.exportJson());
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
    height: 500px;
  }
</style>
