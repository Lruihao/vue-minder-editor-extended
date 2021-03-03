<template>
<div class="main-container">
  <header-menu
    :sequence-enable="sequenceEnable"
    :tag-enable="tagEnable"
    :progress-enable="progressEnable"
  />
  <main-editor/>
  <navigator/>
</div>

</template>

<script>
import headerMenu from '@/components/header'
import mainEditor from '@/components/main/mainEditor'
import navigator from '@/components/main/navigator'

export default {
  name: 'editor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
  props: {
    sequenceEnable: {
      type: Boolean,
      default: true
    },
    tagEnable: {
      type: Boolean,
      default: true
    },
    progressEnable: {
      type: Boolean,
      default: true
    }
  },
}

</script>
