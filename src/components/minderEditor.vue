<template>
  <div class="main-container">
    <header-menu
      :sequence-enable="sequenceEnable"
      :tag-enable="tagEnable"
      :progress-enable="progressEnable"
      :priority-count="priorityCount"
      :priorities="priorities"
      :priority-prefix="priorityPrefix"
      :priority-start-with-zero="priorityStartWithZero"
      :tags="tags"
      :move-enable="moveEnable"
      :tag-edit-check="tagEditCheck"
      :tag-disable-check="tagDisableCheck"
      :priority-disable-check="priorityDisableCheck"
      :distinct-tags="distinctTags"
      :default-mold="defaultMold"
      @moldChange="handleMoldChange"
    >
      <template slot="edit-menu">
        <slot name="edit-menu" />
      </template>
      <template slot="view-menu">
        <slot name="view-menu" />
      </template>
    </header-menu>
    <main-editor
      :theme="theme"
      :registerTheme="registerTheme"
      :disabled="disabled"
      :sequence-enable="sequenceEnable"
      :tag-enable="tagEnable"
      :move-enable="moveEnable"
      :progress-enable="progressEnable"
      :import-json="importJson"
      :height="height"
      :tags="tags"
      :priorities="priorities"
      :priority-count="priorityCount"
      :priority-prefix="priorityPrefix"
      :priority-start-with-zero="priorityStartWithZero"
      :priority-disable-check="priorityDisableCheck"
      :tag-edit-check="tagEditCheck"
      @afterMount="$emit('afterMount')"
      @save="save"
    >
      <template slot="default">
        <slot name="default" />
      </template>
    </main-editor>
  </div>
</template>

<script>
import headerMenu from './main/header'
import mainEditor from './main/mainEditor'
import {editMenuProps, mainEditorProps, moleProps, priorityProps, tagProps} from "../props";
import Locale from '/src/mixins/locale';

export default {
  name: 'minderEditor',
  mixins: [Locale],
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
    handleMoldChange(data) {
      this.$emit('moldChange', data);
    },
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
