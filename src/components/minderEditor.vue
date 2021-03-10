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
      :default_mold="default_mold"
    />
    <main-editor
      :sequence-enable="sequenceEnable"
      :tag-enable="tagEnable"
      :progress-enable="progressEnable"
      :import-json="importJson"
      @save="save"/>
    <navigator/>
  </div>
</template>

<script>
import headerMenu from './main/header'
import mainEditor from './main/mainEditor'
import navigator from './main/navigator'
import {editMenuProps, importJson, moleProps, priorityProps, tagProps} from "./props";

export default {
  name: 'minderEditor',
  components: {
    headerMenu,
    mainEditor,
    navigator
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
    importJson
  },
}

</script>
