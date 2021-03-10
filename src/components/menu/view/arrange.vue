<template>
<div class="arrange-group">
    <div class="arrange menu-btn" @click="resetlayout" :disabled="disabled">
        <span class="tab-icons"></span>
        <span class="label">整理布局</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'arrange',
    computed: {
        disabled() {
          try {
            if (!minder) return false;
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }
          return minder && minder.queryCommandState && minder.queryCommandState('resetlayout') === -1;
        }
    },
    methods: {
        resetlayout() {
            minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')
        }
    }
}
</script>
