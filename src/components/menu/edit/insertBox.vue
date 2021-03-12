<template>
<div class="insert-group">
  <div class="insert-child-box menu-btn" :disabled="appendChildNodeDisabled" @click="execCommand('AppendChildNode')">
    <i class="tab-icons"></i>
    <span>插入下级主题</span>
  </div>
  <div class="insert-parent-box menu-btn" :disabled="appendParentNodeDisabled" @click="execCommand('AppendParentNode')">
    <i class="tab-icons"></i>
    <span>插入上级主题</span>
  </div>
  <div class="insert-sibling-box menu-btn" :disabled="appendSiblingNodeDisabled" @click="execCommand('AppendSiblingNode')">
    <i class="tab-icons"></i>
    <span>插入同级主题</span>
  </div>
</div>
</template>

<script>
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'insertBox',
  data() {
    return {
      minder: undefined
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.minder = minder;
      // 点击节点，触发computed
    })
  },
  computed: {
    appendChildNodeDisabled() {
      return this.isDisabled('AppendChildNode');
    },
    appendParentNodeDisabled() {
      return this.isDisabled('AppendParentNode');
    },
    appendSiblingNodeDisabled() {
      return this.isDisabled('AppendSiblingNode');
    },
  },
  methods: {
    execCommand(command) {
      minder.queryCommandState(command) === -1 || minder.execCommand(command);
    },
    isDisabled(command) {
      try {
        if (!this.minder) return false;
      } catch (e) {
        // 如果window的还没挂载minder，先捕捉undefined异常
        return false
      }

      if (isDisableNode(minder) && command.indexOf("AppendParentNode") > 0) {
        return true;
      }
      if (minder && minder.queryCommandState) {
        return minder.queryCommandState(command) === -1;
      }
      return false;
    }
  }
}
</script>
