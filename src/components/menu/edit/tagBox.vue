<template>
<div :disabled="commandDisabled">
    <el-tag v-for="(item, index) in tags"
            :key="item.key"
            size="small"
            :color="getResourceColor(item.value)"
            @click="editResource(item.value)">{{item.value}}</el-tag>
<!--  <el-button class="add-btn" icon="el-icon-plus"></el-button>-->
</div>
</template>

<script>
import {
  mapGetters,
} from 'vuex'
import {tagProps} from "../../props";
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'tagBox',
  props: {
    ...tagProps
  },
  computed: {
    ...mapGetters({
      'minder': 'getMinder'
    }),
    commandDisabled() {
      let minder = this.minder
      minder.on && minder.on('interactchange', function () {
        this.commandValue = minder.queryCommandValue('resource');
      });
      if (isDisableNode(minder)) {
        return true;
      }
      return minder.queryCommandState && minder.queryCommandState('resource') === -1;
    },
  },
  mounted() {
  },
  methods: {
    getResourceColor(resource) {
      if (this.minder.getResourceColor) {
        return this.minder.getResourceColor(resource).toHEX();
      }
    },
    editResource(resourceName) {
      let origin = this.minder.queryCommandValue('resource');
      if (!resourceName || !/\S/.test(resourceName)) return;
      let index = origin.indexOf(resourceName);
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

<style >
   .add-btn {
     height: 24px;
     width: 36px;
     padding: 0px !important;
     border-style: dashed !important;
   }
</style>
