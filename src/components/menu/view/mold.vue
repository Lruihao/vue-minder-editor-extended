<template>
  <div class="mold-group">
    <el-dropdown
      trigger="click"
      :hide-on-click="true"
      :disabled="disabled"
      class="dropdown-toggle menu-btn"
      @command="handleCommand"
    >
      <span class="el-dropdown-link">
        <span
          class="current-mold mold-icons"
          :class="'mold-' + (moldIndex + 1)"
        />
        <i class="el-icon-caret-bottom" />
      </span>
      <el-dropdown-menu slot="dropdown" class="mold-dropdown-list">
        <el-dropdown-item
          v-for="(item, index) in 6"
          :key="item"
          class="dropdown-item mold-icons"
          :class="'mold-' + item" :command="index"
        />
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {moleProps} from "../../../props";
import Locale from '/src/mixins/locale';

export default {
  name: 'mold',
  mixins: [Locale],
  props: {
    ...moleProps
  },
  data() {
    return {
      moldIndex: 0
    }
  },
  computed: {
    disabled() {
      try {
        if (!window.minder) return false;
      } catch (e) {
        // 如果 window 的还没挂载 minder，先捕捉 undefined 异常
        return false
      }
      return window.minder.minder.queryCommandState('template') === -1;
    },
    templateList() {
      return kityminder.Minder.getTemplateList();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleCommand(this.defaultMold);
    })
  },
  methods: {
    handleCommand(command) {
      this.moldIndex = command;
      minder.execCommand('template', Object.keys(this.templateList)[command]);
      this.$emit('moldChange', command);
    }
  }
}
</script>

<style scoped>
.mold-dropdown-list .mold-icons, .mold-icons {
  background-image: url("../../../assets/minder/mold.png");
  background-repeat: no-repeat;
}
</style>
