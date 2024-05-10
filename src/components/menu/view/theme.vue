<template>
  <div class="theme-group">
    <el-dropdown
      trigger="click"
      :hide-on-click="true"
      :disabled="disabled"
      placement="bottom-start"
      class="dropdown-toggle menu-btn"
      @command="handleCommand"
    >
      <span class="el-dropdown-link">
        <span
          class="current-theme"
          :style="getThemeThumbStyle(currentTheme)"
        >{{ t(`minder.menu.theme.${currentTheme}`) || t('minder.menu.theme.custom-theme') }}</span>
        <i class="el-icon-caret-bottom" />
      </span>
      <el-dropdown-menu slot="dropdown" class="theme-dropdown-list">
        <el-dropdown-item
          v-for="theme of themeListKeys"
          :key="theme"
          :command="theme"
          :style="getThemeThumbStyle(theme)"
          class="dropdown-item"
          :class="theme"
        >{{ t(`minder.menu.theme.${theme}`) || t('minder.menu.theme.custom-theme') }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Locale from '/src/mixins/locale';

export default {
  name: "theme",
  mixins: [Locale],
  data() {
    return {
      currentTheme: 'fresh-blue',
      themeList: {},
      themeState: true,
    };
  },
  computed: {
    disabled() {
      try {
        if (!window.minder) return false;
      } catch (e) {
        // 如果 window 的还没挂载 minder，先捕捉 undefined 异常
        return false
      }
      return window.minder.minder.queryCommandState('theme') === -1;
    },
    themeListKeys() {
      return Object.keys(this.themeList);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.themeList = window.kityminder.Minder.getThemeList();
      this.themeState = window.minder.queryCommandState('theme')
      this.currentTheme = window.minder.getTheme();
    });
  },
  methods: {
    handleCommand(command) {
      this.currentTheme = command;
      window.minder.execCommand('theme', command)
    },
    getThemeThumbStyle(theme) {
      const themeObj = this.themeList[theme];
      if (!themeObj) {
        return;
      }
      const style = {
        'color': themeObj['root-color'],
        'border-radius': themeObj['root-radius'] / 2
      };
      if (themeObj['root-background']) {
        style['background'] = themeObj['root-background'].toString();
      }
      if (style['border-radius']) {
        style['border-radius'] += 'px';
      }
      return style;
    },
  },
};
</script>
