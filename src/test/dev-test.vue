<template>
  <div>
    <minder-editor/>
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
            "text": "test222"
          },
          "children": [
            { "data": { "text": "地图aa" } },
            { "data": { "text": "百科aa","expandState":"collapse"}}
          ]
        },
        "template":"default"
      }
    }
  }
}
</script>

<style scoped>

</style>
