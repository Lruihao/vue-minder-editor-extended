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
            return this.$minder && this.$minder.queryCommandState && this.$minder.queryCommandState('resetlayout') === -1;
        }
    },
    methods: {
        resetlayout() {
            this.$minder.queryCommandState('resetlayout') === -1 || this.$minder.execCommand('resetlayout')
        }
    }
}
</script>
