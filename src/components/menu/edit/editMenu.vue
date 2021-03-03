<template lang="html">
<div class="menu-container">
  <expand/>
  <selection/>
  <insert-box/>
  <move-box/>
  <edit-del/>
  <sequence-box v-if="sequenceEnable"/>
  <progress-box v-if="progressEnable"/>
  <tag-box v-if="tagEnable"/>
</div>
</template>

<script>
import insertBox from './insertBox'
import moveBox from './moveBox'
import editDel from './editDel'
import sequenceBox from './sequenceBox'
import progressBox from './progressBox'
import expand from './expand'
import selection from './selection'
import TagBox from "./tagBox";

export default {
  name: 'editMenu',
  components: {
    TagBox,
    insertBox,
    moveBox,
    editDel,
    sequenceBox,
    progressBox,
    expand,
    selection
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
