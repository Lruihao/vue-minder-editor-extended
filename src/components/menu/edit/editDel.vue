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
      if (isDisableNode(this.$minder)) {
        return true;
      }
      if (this.$minder) {
        return this.$minder.queryCommandState && this.$minder.queryCommandState(command) === -1
      }
    },
    edit() {
      this.$minder.queryCommandState('text') === -1 || this.editNode();
    },
    del() {
      this.$minder.queryCommandState('RemoveNode') === -1 || this.$minder.execCommand('RemoveNode');
    },
    editNode() {
      let editor = this.$minderEditor;
      let receiverElement = editor.receiver.element;
      let fsm = editor.fsm;
      let receiver = editor.receiver;

      receiverElement.innerText = this.$minder.queryCommandValue('text');
      fsm.jump('input', 'input-request');
      receiver.selectAll();
    }
  }
}
</script>
