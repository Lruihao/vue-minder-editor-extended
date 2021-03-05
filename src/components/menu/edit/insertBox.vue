<template>
<div class="insert-group">
  <div class="insert-child-box menu-btn" :disabled="disabled('AppendChildNode')" @click="appendChildNode">
    <i class="tab-icons"></i>
    <span>插入下级主题</span>
  </div>
  <div class="insert-parent-box menu-btn" :disabled="disabled('AppendParentNode')" @click="appendParentNode">
    <i class="tab-icons"></i>
    <span>插入上级主题</span>
  </div>
  <div class="insert-sibling-box menu-btn" :disabled="disabled('AppendSiblingNode')" @click="appendSiblingNode">
    <i class="tab-icons"></i>
    <span>插入同级主题</span>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'insertBox',
  computed: {
    ...mapGetters([
      'getMinder'
    ]),
  },
  methods: {
    disabled(command) {
      let minder = this.getMinder;
      if (isDisableNode(minder)) {
        return true;
      }
      if (minder.queryCommandState) {
        return minder.queryCommandState(command) === -1;
      }
      return false
    },
    appendChildNode() {
      var minder = this.getMinder;
      minder.queryCommandState('AppendChildNode') === -1 || minder.execCommand('AppendChildNode')
    },
    appendParentNode() {
      var minder = this.getMinder;
      minder.queryCommandState('AppendParentNode') === -1 || minder.execCommand('AppendParentNode')
    },
    appendSiblingNode() {
      var minder = this.getMinder;
      minder.queryCommandState('AppendSiblingNode') === -1 || minder.execCommand('AppendSiblingNode')
    }
  }
}
</script>
