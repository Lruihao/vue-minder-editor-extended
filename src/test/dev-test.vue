<template>
  <div>
    <minder-editor
      :import-json="importJson"
      :progress-enable="false"
      :tag-enable="true"
      :sequence-enable="true"
      :tags="tags"
      @save="save"/>
  </div>
</template>

<script>
import Vue from 'vue'
import minderEditor from "../components/plugin";
Vue.use(minderEditor) //开发测试

export default {
  name: "dev-test",
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
              "data": { "text": "地图aa" , resource: ["模块1"]}
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
