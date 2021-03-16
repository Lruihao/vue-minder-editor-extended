<template>
  <el-card class="card-content">

    <el-button-group >

      <el-tooltip class="item" effect="dark" :content="'leftTip'" placement="left">
        <el-button plain style="width: 44px;height: 32px;padding: 5px 8px;"  :class="{active: true}">caaaa</el-button>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" :content="'middleTip'" placement="top">
        <el-button plain style="width: 44px;height: 32px;padding: 1px;"  :class="{active: false}">cccc</el-button>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" :content="'rightTip'" placement="right">
        <el-button plain  style="width: 44px;height: 32px;padding: 1px;"  :class="{active: false}">
          sfsdf
        </el-button>
      </el-tooltip>

    </el-button-group>

    <template v-slot:header>
      <slot name="header"></slot>
    </template>
    <div>
      <minder-editor :import-json="importJson" @save="save"/>
    </div>
  </el-card>
</template>

<script>

import minderEditor1 from '../../dist/static/vue-minder-editor-plus'

import Vue from 'vue'
Vue.use(minderEditor1);

console.log(minderEditor1);

export default {
  name: "test-plugin",
  data() {
    return {
    //   importJson: {
    //     "root": {
    //       "data": {
    //         "text": "test222",
    //         disable: true
    //       },
    //       "children": [
    //         { "data": { "text": "地图aa" } },
    //         { "data": { "text": "百科aa","expandState":"collapse"}}
    //       ]
    //     },
    //     "template":"default"
    //   }
      // }
        importJson: {
          "root": {
            "data": {
              "text": "test2cc22",
              "disable": true
            },
            "children": [
              {
                "data": {
                  "text": "地图ccaxxaaa" ,
                  disable: true,
                  allowDisabledTag: true,
                  resource: ["模块1"]}
              },
              { "data": { "text": "百科aa","expandState":"collapse"}}
            ]
          },
          "template":"default"
        },
        tags:  ['模块1','用例','前置条件','测试步骤', '预期结果','备注',]
      }

  },
  methods: {
    save(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
