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
  <main-editor @save="save" :import-json="importJson"/>
  <navigator/>
</div>

</template>

<script>
import headerMenu from '@/components/main/header'
import mainEditor from '@/components/main/mainEditor'
import navigator from '@/components/main/navigator'
import {editMenuProps, importJson, moleProps, priorityProps, tagProps} from "./props";

export default {
  name: 'minderEditor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
  methods: {
    save(data) {
      this.$emit('save', data);
    }
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
