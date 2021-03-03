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
          :sequence-enable="sequenceEnable"
          :tag-enable="tagEnable"
          :progress-enable="progressEnable"
        />
      </div>
      <div class="mind-tab-panel" v-show="switchShow.showViewMenu">
        <view-menu></view-menu>
      </div>
    </div>
  </header>
</template>

<script>
  import editMenu from './menu/edit/editMenu'
  import viewMenu from './menu/view/viewMenu'
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
      sequenceEnable: {
        type: Boolean,
        default: true
      },
      tagEnable: {
        type: Boolean,
        default: true
      },
      progressEnable: {
        type: Boolean,
        default: true
      }
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

<style lang="scss">
  @import "../style/header.scss";
</style>
