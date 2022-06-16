<template>
  <el-container>
    <el-main>
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
              sfsdfc
            </el-button>
          </el-tooltip>

        </el-button-group>

        <template v-slot:header>
          <slot name="header"></slot>
        </template>
        <div>
          <minder-editor
            :import-json="importJson"
            :progress-enable="true"
            :tag-enable="true"
            :sequence-enable="true"
            :tags="tags"
            @save="save"/>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "ms-test",
  data() {
    return {
      importJson: {
        "root": {
          "data": {
            "text": "test222",
            "disable": true
          },
          "children": [
            {
              "data": { "text": "地图axxa" , resource: ["模块1"]}
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
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
