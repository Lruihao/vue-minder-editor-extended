<template>
  <div>
    <minder-editor
      :import-json="importJson"
      :progress-enable="true"
      :tag-enable="true"
      :sequence-enable="true"
      :tags="tags"
      :distinct-tags="tags"
      :height="500"
      :tag-edit-check="test"
      :priority-disable-check="test"
      @afterMount="afterMount()"
      :default-mold="3"
      @moldChange="handleMoldChange"
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
            // "disable": true
          },
          "children": [
            {
              "data": { "text": "地图axxaaaa",
                // disable: true,
                // tagEnable: true,
                // allowDisabledTag: true,
                resource: ["模块1"]}
            },
            { "data": {
              "text": "百科aa",
                "expandState":"collapse"}}
          ]
        },
        "template":"default"
      },
      tags:  ['模块1','用例']
    }
  },
  mounted() {

  },

  methods: {
    save(data) {
      console.log(data);
    },
    test() {
      // return () => {
        return true
      // };
    },
    handleMoldChange(a) {
      console.log(a);
    },
    afterMount() {
      minder.on('selectionchange ', function (env) {
        console.log('selectionchange');
        console.log(env);
        // let selectNodes = env.minder.getSelectedNodes();
        // if (selectNodes) {
        //   selectNodes.forEach((node) => {
        //     markChangeNode(node);
        //   })
        // }
      });
      minder.on('contentchange', function (env) {
        console.log('contentchange');
        console.log(env);
      });
    },
  }
}
</script>

<style scoped>

</style>
