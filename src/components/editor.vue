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
import {editMenuProps, importJson, priorityProps, tagProps} from "./props";

export default {
  name: 'editor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
  props: {
    ...editMenuProps,
    ...priorityProps,
    ...tagProps,
    importJson
  },
}

</script>
