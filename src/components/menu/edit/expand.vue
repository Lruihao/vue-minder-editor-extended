<template>
  <div class="expand-group">
    <el-button class="tab-icons expand" @click="expandAll"/>
    <el-dropdown trigger="click" :hide-on-click="true" class="dropdown-toggle menu-btn" @command="handleCommand">
      <span class="el-dropdown-link ">
        {{ t('minder.menu.expand.expand') }}
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="expand-dropdown-list">
        <el-dropdown-item class="expand-1 dropdown-item " command="1">{{ t('minder.menu.expand.expand_one') }}</el-dropdown-item>
        <el-dropdown-item class="expand-2 dropdown-item " command="2">{{ t('minder.menu.expand.expand_tow') }}</el-dropdown-item>
        <el-dropdown-item class="expand-3 dropdown-item " command="3">{{ t('minder.menu.expand.expand_three') }}</el-dropdown-item>
        <el-dropdown-item class="expand-4 dropdown-item " command="4">{{ t('minder.menu.expand.expand_four') }}</el-dropdown-item>
        <el-dropdown-item class="expand-5 dropdown-item " command="5">{{ t('minder.menu.expand.expand_five') }}</el-dropdown-item>
        <el-dropdown-item class="expand-6 dropdown-item " command="6">{{ t('minder.menu.expand.expand_six') }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

import Locale from '/src/mixins/locale';
export default {
  name: 'expand',
  mixins: [Locale],
  methods: {
    handleCommand(command) {
      minder.execCommand && minder.execCommand('ExpandToLevel', command);
    },

    expandAll() {
      minder.execCommand && minder.execCommand('ExpandToLevel', 9999);
    }
  }
}
</script>
