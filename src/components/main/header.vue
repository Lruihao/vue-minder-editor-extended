<template>
  <header>
    <el-tabs v-model="activeName" class="mind_tab-content">
      <el-tab-pane :label="t('minder.main.header.minder')" name="editMenu">
        <div class="mind-tab-panel">
          <edit-menu
            :minder="minder"
            :move-enable="moveEnable"
            :sequence-enable="sequenceEnable"
            :tag-enable="tagEnable"
            :progress-enable="progressEnable"
            :priority-count="priorityCount"
            :priorities="priorities"
            :priority-prefix="priorityPrefix"
            :tag-edit-check="tagEditCheck"
            :tag-disable-check="tagDisableCheck"
            :priority-disable-check="priorityDisableCheck"
            :priority-start-with-zero="priorityStartWithZero"
            :tags="tags"
            :distinct-tags="distinctTags"
          >
            <template slot="edit-menu">
              <slot name="edit-menu" />
            </template>
          </edit-menu>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="t('minder.main.header.style')" name="viewMenu">
        <div class="mind-tab-panel">
          <view-menu
            @moldChange="handleMoldChange"
            :minder="minder"
            :default-mold="defaultMold"
          >
            <template slot="view-menu">
              <slot name="view-menu" />
            </template>
          </view-menu>
        </div>
      </el-tab-pane>
    </el-tabs>
  </header>
</template>

<script>
  import editMenu from '../menu/edit/editMenu'
  import viewMenu from '../menu/view/viewMenu'
  import Locale from '/src/mixins/locale';
  import {editMenuProps, moleProps, priorityProps, tagProps} from "../../props";
  export default {
    name: 'headerVue',
    mixins: [Locale],
    data() {
      return {
        switchShow: {
          showEditMenu: true,
          showViewMenu: false,
        },
        activeName: 'editMenu'
      }
    },
    props: {
      ...editMenuProps,
      ...priorityProps,
      ...tagProps,
      ...moleProps,
      minder: {}
    },
    components: {
      editMenu,
      viewMenu
    },
    methods: {
      handleMoldChange(data) {
        this.$emit('moldChange', data);
      },
      showMenu: function (e) {
        for (var variable in this.switchShow) {
          if (this.switchShow.hasOwnProperty(variable)) {
            this.switchShow[variable] = false
          }
        }
        this['switchShow'][e.target.className.replace('btn-', '')] = true
      }
    }
  }
</script>

<style lang="scss">
@import "src/style/header";
</style>
