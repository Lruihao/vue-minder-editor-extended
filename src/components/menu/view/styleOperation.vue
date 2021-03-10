<template>
<div class="style-group">
    <div class="clear-style-btn menu-btn" @click="clearstyle" :disabled="disabled1">
        <span class="tab-icons"></span>
        <span class="label">清除样式</span>
    </div>
    <div class="copy-paste-panel" @click="copystyle">
        <div class="copy-style menu-btn" :disabled="disabled2">
            <span class="tab-icons"></span>
            <span class="label">复制样式</span>
        </div>
        <div class="paste-style menu-btn" @click="pastestyle" :disabled="disabled3">
            <span class="tab-icons"></span>
            <span class="label">粘贴样式</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "styleOpreation",
    computed: {
        disabled1() {
          try {
            if (!minder) return false;
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }

          return (
              minder &&
              minder.queryCommandState &&
              minder.queryCommandState("clearstyle") === -1
            );
        },
        disabled2() {
          try {
            if (!minder) return false;
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }

          return (
              minder &&
              minder.queryCommandState &&
              minder.queryCommandState("copystyle") === -1
            );
        },
        disabled3() {
          try {
            if (!minder) return false;
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }

          return (
              minder &&
              minder.queryCommandState &&
              minder.queryCommandState("pastestyle") === -1
            );
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
