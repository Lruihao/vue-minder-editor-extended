<template>
  <div>
    <minder-editor @save="save"/>
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
