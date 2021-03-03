<template>
  <div>
    <minder-editor :progress-enable="false" :import-json="importJson"/>
  </div>
</template>

<script>

import minderEditor from '../../dist/static/js/vueMinderEditor'
import vue from 'vue'
vue.use(minderEditor);
export default {
  name: "test-plugin",
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
