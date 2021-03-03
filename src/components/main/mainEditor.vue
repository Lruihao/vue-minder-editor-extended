<template>
  <div class="mind-editor"></div>
</template>

<script>
import {
  mapActions,
  mapMutations,
  mapGetters
} from 'vuex'
import {importJson} from "../props";
export default {
  props: {
    importJson
  },
  mounted() {
    let Editor = require('../../script/editor');
    let el = this.$el;
    let editor = window.editor = new Editor(el);
    this.setEditor(editor);
    if (this.importJson) {
      editor.minder.importJson(this.importJson);
    }
    window.minder = window.km = editor.minder;
    this.setMinder(editor.minder);
    this.executeCallback();
  },
  computed: {
    ...mapGetters([
      'minder',
    ])
  },
  methods: {
    ...mapActions([
      'executeCallback'
    ]),
    ...mapMutations([
      'setMinder',
      'setEditor'
    ])
  },
}
</script>

<style lang="scss">
  @import "../../style/editor.scss";
</style>
