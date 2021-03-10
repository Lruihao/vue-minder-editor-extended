<template>
  <div>
    <minder-editor/>
  </div>
</template>

<script>

import minderEditor1 from '../../dist/static/vue-minder-editor-971f5'

import Vue from 'vue'
Vue.use(minderEditor1);

console.log(minderEditor1);

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
