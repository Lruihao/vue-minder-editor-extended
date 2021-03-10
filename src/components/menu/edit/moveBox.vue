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
      try {
        if (!minder) return false;
      } catch (e) {
        // 如果window的还没挂载minder，先捕捉undefined异常
        return false
      }
      if (isDisableNode(minder)) {
        return true;
      }
      let bool = false;
      if (minder) {
        bool = minder.queryCommandState && minder.queryCommandState(command) === -1
      }
      return bool;
    },
    execCommand(command) {
      minder.queryCommandState(command) === -1 || minder.execCommand(command)
    },
  }
}
</script>
