<template>
<div class="style-group">
    <div class="clear-style-btn menu-btn" @click="clearstyle" :disabled="disabled">
        <span class="tab-icons"></span>
        <span class="label">清除样式</span>
    </div>
    <div class="copy-paste-panel" @click="copystyle">
        <div class="copy-style menu-btn" :disabled="disabled">
            <span class="tab-icons"></span>
            <span class="label">复制样式</span>
        </div>
        <div class="paste-style menu-btn" @click="pastestyle" :disabled="disabled">
            <span class="tab-icons"></span>
            <span class="label">粘贴样式</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "styleOpreation",
    data() {
      return {
        minder: undefined
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.minder = minder;
      })
    },
    computed: {
        disabled() {
          try {
            if (!this.minder) {
              return false;
            }
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }

          let nodes = minder.getSelectedNodes();
          if (nodes != null && nodes.length > 0) {
            return false;
          }
          return true;
        },
    },
    methods: {
        clearstyle() {
            minder.queryCommandState("clearstyle") === -1 ||
                minder.execCommand("clearstyle");
        },
        copystyle() {
            minder.queryCommandState("copystyle") === -1 ||
                minder.execCommand("copystyle");
        },
        pastestyle() {
            minder.queryCommandState("pastestyle") === -1 ||
                minder.execCommand("pastestyle");
        },
    },
};
</script>
