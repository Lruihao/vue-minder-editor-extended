<template>
<div :disabled="commandDisabled">
    <el-tag v-for="(item, index) in tags"
            :key="item.key"
            size="small"
            :color="getResourceColor(item.value)"
            @click="editResource(item.value)">{{item.value}}</el-tag>
</div>
</template>

<script>
import {
  mapGetters,
} from 'vuex'
export default {
  name: 'tagBox',
  data() {
    return {
      used: false,
      // minder: {}
    }
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [
          {
            key: 'module',
            value: '模块',
          },
          {
            key: 'case',
            value: '用例',
          },
          {
            key: 'prerequisite',
            value: '前置条件',
          },
          {
            key: 'steps',
            value: '测试步骤',
          },
          {
            key: 'result',
            value: '预期结果',
          },
          {
            key: 'remark',
            value: '备注',
          }]
      }
    }
  },
  // props: ['minder'],
  computed: {
    ...mapGetters({
      'minder': 'getMinder'
    }),
    commandDisabled() {
      let minder = this.minder
      minder.on && minder.on('interactchange', function () {
        this.commandValue = minder.queryCommandValue('resource');
      });
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
