<template>
<div class="move-group ">
  <div class="move-up menu-btn" :disabled="disabled('ArrangeUp')" @click="execCommand('ArrangeUp')">
    <i class="tab-icons"></i>
    <span>上移</span>
  </div>
  <div class="move-down menu-btn" :disabled="disabled('ArrangeDown')" @click="execCommand('ArrangeDown')">
    <i class="tab-icons"></i>
    <span>下移</span>
  </div>
</div>
</template>

<script>
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'moveBox',
  methods: {
    disabled(command) {
      if (isDisableNode(this.$minder)) {
        return true;
      }
      let bool = false;
      if (this.$minder) {
        bool = this.$minder.queryCommandState && this.$minder.queryCommandState(command) === -1
      }
      return bool;
    },
    execCommand(command) {
      this.$minder.queryCommandState(command) === -1 || this.$minder.execCommand(command)
    },
  }
}
</script>
