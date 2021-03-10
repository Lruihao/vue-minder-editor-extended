<template>
<div class="edit-del-group">
  <div class="edit menu-btn" :disabled="disabled('text')" @click="edit" title="编辑">
    <i class="tab-icons"></i>
    <span>编辑</span>
  </div>
  <div class="del menu-btn" :disabled="disabled('RemoveNode')" @click="del" title="删除">
    <i class="tab-icons"></i>
    <span>删除</span>
  </div>
</div>
</template>

<script>
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'edit_del',
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
      if (minder) {
        return minder.queryCommandState && minder.queryCommandState(command) === -1
      }
    },
    edit() {
      minder.queryCommandState('text') === -1 || this.editNode();
    },
    del() {
      minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');
    },
    editNode() {
      let editor = minderEditor;
      let receiverElement = editor.receiver.element;
      let fsm = editor.fsm;
      let receiver = editor.receiver;

      receiverElement.innerText = minder.queryCommandValue('text');
      fsm.jump('input', 'input-request');
      receiver.selectAll();
    }
  }
}
</script>
