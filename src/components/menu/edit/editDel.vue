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
import {
  mapGetters
} from 'vuex';
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'edit_del',
  computed: {
    ...mapGetters({
      'minder': 'getMinder',
      'editor': 'getEditor'
    }),
  },
  methods: {
    disabled(command) {
      if (isDisableNode(this.minder)) {
        return true;
      }
      return this.minder.queryCommandState && this.minder.queryCommandState(command) === -1
    },
    edit() {
      this.minder.queryCommandState('text') === -1 || this.editNode();
    },
    del() {
      this.minder.queryCommandState('RemoveNode') === -1 || this.minder.execCommand('RemoveNode');
    },
    editNode() {
      var editor = this.editor;
      var receiverElement = editor.receiver.element;
      var fsm = editor.fsm;
      var receiver = editor.receiver;

      receiverElement.innerText = this.minder.queryCommandValue('text');
      fsm.jump('input', 'input-request');
      receiver.selectAll();
    }
  }
}
</script>
