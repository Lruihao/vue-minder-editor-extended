<template lang="html">
  <header>
    <ul id="mind_tab">
      <li :class="{selected:switchShow.showEditMenu}">
        <a class="btn-showEditMenu" @click="showMenu">思维导图</a>
      </li>
      <li :class="{selected:switchShow.showViewMenu}">
        <a  class="btn-showViewMenu" @click="showMenu">外观样式</a>
      </li>
    </ul>
    <div id="mind_tab-content">
      <div class="mind-tab-panel" v-show="switchShow.showEditMenu">
        <edit-menu
          :minder="minder"
          :sequence-enable="sequenceEnable"
          :tag-enable="tagEnable"
          :progress-enable="progressEnable"
          :priority-count="priorityCount"
          :priority-prefix="priorityPrefix"
          :priority-start-with-zero="priorityStartWithZero"
          :tags="tags"
        />
      </div>
      <div class="mind-tab-panel" v-show="switchShow.showViewMenu">
        <view-menu
          :minder="minder"
          :default_mold="default_mold"/>
      </div>
    </div>
  </header>
</template>

<script>
  import editMenu from '../menu/edit/editMenu'
  import viewMenu from '../menu/view/viewMenu'
  import {editMenuProps, moleProps, priorityProps, tagProps} from "../props";
  export default {
    name: 'headerVue',
    data() {
      return {
        switchShow: {
          showEditMenu: true,
          showViewMenu: false
        }
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

<style lang="scss" >
  @import "src/style/header";
</style>

<style>

  /*.el-dropdown-menu {*/
  /*    padding: 0 !important;*/
  /*    margin: 0 !important;*/
  /*    left: 40px !important;*/
  /*}*/

  /*.el-dropdown-menu__item {*/
  /*      padding: 5px 0 5px 20px !important;*/
  /*      height: 35px !important;*/
  /*      line-height: 35px !important;*/
  /*      margin: 0 !important;*/
  /*}*/

  /*.el-dropdown-menu .el-dropdown-menu__item {*/
  /*  padding: 0px !important;*/
  /*  height: 40px !important;*/
  /*  margin: 5px !important;*/
  /*}*/

</style>
