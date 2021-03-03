<template lang="html">
<div class="menu-container">
  <expand/>
  <selection/>
  <insert-box/>
  <move-box/>
  <edit-del/>
  <sequence-box
    v-if="sequenceEnable"
    :prefix="priorityPrefix"
    :priority-count="priorityCount"
    :start-with-zero="priorityStartWithZero"
  />
  <progress-box v-if="progressEnable"/>
  <tag-box :tags="tags" v-if="tagEnable"/>
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
    },
    tagEnable: {
      type: Boolean,
    },
    progressEnable: {
      type: Boolean,
    },
    priorityCount: {
      type: Number,
      validator: function (value) {
        // 优先级最多支持 9 个级别
        return value <= 9;
      }
    },
    priorityStartWithZero: {
      // 优先级是否从0开始
      type: Boolean,
    },
    priorityPrefix: {
      type: String,
    },
    tags: {
      type: Array
    }
  },
}
</script>
