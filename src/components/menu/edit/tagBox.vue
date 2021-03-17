<template>
<div :disabled="commandDisabled">
    <el-tag v-for="(item, index) in tags"
            :key="item"
            size="small"
            :color="getResourceColor(item)"
            @click="editResource(item)">{{item}}</el-tag>
<!--  <el-button class="add-btn" icon="el-icon-plus"></el-button>-->
</div>
</template>

<script>

import {tagProps} from "../../props";
import {isDisableNode} from "../../../script/tool/utils";

export default {
  name: 'tagBox',
  props: {
    ...tagProps
  },
  data() {
    return {
      minder: undefined
    }
  },
  computed: {
    commandDisabled() {
      let minder = this.minder;
      if (!minder) return true;
      minder.on && minder.on('interactchange', function () {
        this.commandValue = minder.queryCommandValue('resource');
      });
      let node = minder.getSelectedNode();
      if (node && node.data.allowDisabledTag) {
        return false;
      }
      if (isDisableNode(minder)) {
        return true;
      }
      return minder.queryCommandState && minder.queryCommandState('resource') === -1;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.minder = minder;
    })
  },
  methods: {
    getResourceColor(resource) {
      if (this.minder && this.minder.getResourceColor) {
        return this.minder.getResourceColor(resource).toHEX();
      }
    },
    editResource(resourceName) {
      if (this.commandDisabled) {
        return;
      }
      let origin = this.minder.queryCommandValue('resource');
      if (!resourceName || !/\S/.test(resourceName)) return;
      let index = origin.indexOf(resourceName);
      // 先删除排他的标签
      if (this.distinctTags.indexOf(resourceName) > -1) {
        for (let i = 0; i < origin.length; i++) {
          if (this.distinctTags.indexOf(origin[i]) > -1) {
            origin.splice(i, 1);
            i--;
          }
        }
      }
      if (index != -1) {
        origin.splice(index, 1);
      } else {
        origin.push(resourceName);
      }
      this.minder.execCommand('resource', origin);
    },
  },
}
</script>

<style scoped>

 .el-tag {
   margin-right: 4px;
   border: 0px;
   color: black;
 }

 .el-tag:hover {
   cursor: pointer;
 }

 .el-tag:first-child {
   margin-left: 4px;
 }
</style>

<style scoped>
   .add-btn {
     height: 24px;
     width: 36px;
     padding: 0px !important;
     border-style: dashed !important;
   }
</style>
