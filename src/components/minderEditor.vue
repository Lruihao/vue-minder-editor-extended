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
      :distinct-tags="distinctTags"
      :default_mold="default_mold"
    />
    <main-editor
      :sequence-enable="sequenceEnable"
      :tag-enable="tagEnable"
      :progress-enable="progressEnable"
      :import-json="importJson"
      :height="height"
      @save="save"/>
  </div>
</template>

<script>
import headerMenu from './main/header'
import mainEditor from './main/mainEditor'
import {editMenuProps, mainEditorProps, moleProps, priorityProps, tagProps} from "./props";

export default {
  name: 'minderEditor',
  components: {
    headerMenu,
    mainEditor
  },
  data() {
    return {
      minder: {}
    }
  },
  methods: {
    save(data) {
      this.$emit('save', data);
    },
  },
  props: {
    ...editMenuProps,
    ...priorityProps,
    ...tagProps,
    ...moleProps,
    ...mainEditorProps
  },
}

</script>

<style scoped>
</style>
