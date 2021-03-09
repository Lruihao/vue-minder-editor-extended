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
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'insertBox',
  methods: {
    disabled(command) {
      let minder = this.$minder;
      if (isDisableNode(minder)) {
        return true;
      }
      if (minder && minder.queryCommandState) {
        return minder.queryCommandState(command) === -1;
      }
      return false
    },
    appendChildNode() {
      var minder = this.$minder;
      minder.queryCommandState('AppendChildNode') === -1 || minder.execCommand('AppendChildNode')
    },
    appendParentNode() {
      var minder = this.$minder;
      minder.queryCommandState('AppendParentNode') === -1 || minder.execCommand('AppendParentNode')
    },
    appendSiblingNode() {
      var minder = this.$minder;
      minder.queryCommandState('AppendSiblingNode') === -1 || minder.execCommand('AppendSiblingNode')
    }
  }
}
</script>
