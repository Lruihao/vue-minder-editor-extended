<template>
  <div>
    <el-select v-model="lang">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="$t(item.label)"
        :value="item.value">
      </el-option>
    </el-select>

    <minder-editor
      :import-json="importJson"
      theme="fresh-green"
      :registerTheme="registerTheme"
      :progress-enable="true"
      :tag-enable="true"
      :sequence-enable="true"
      :tags="tags"
      :move-enable="true"
      :disabled="false"
      :distinct-tags="distinctTags"
      :height="500"
      :priority-count="4"
      :tag-edit-check="test"
      :priority-disable-check="test"
      :priorities="priorities"
      :priority-prefix="priorityPrefix"
      :priority-start-with-zero="true"
      @afterMount="afterMount()"
      :default-mold="3"
      @moldChange="handleMoldChange"
      @save="save"/>
  </div>
</template>

<script>

export default {
  name: "dev-test",
  data() {
    return {
      importJson: {
        // 节点数据
        root: {
          data: {
            // 文本内容
            text: 'vue-minder-editor-extended',
            // 标签
            resource: ['模块1'],
            // 是否禁止修改
            // disable: true,
            // 默认展开或折叠，默认是展开的，collapse 可设为折叠
            // expandState: 'collapse',
            // 在 disable 为 true 的情况下，允许添加标签
            // tagEnable: true,
            // 在 disable 为 true 的情况下，允许删除节点
            // allowDelete: true,
            // 在 disable 为 true 的情况下，允许添加标签，优先级比 tagEnable 高
            // allowDisabledTag: true,
          },
          // 子节点
          children: [
            {
              data: {
                text: 'child1',
                // disable: true,
                expandState: 'collapse',
                priority: 2,
                resource: ['模块2']
              },
              children: [
                {

                  "data": { "text": "地图axxaaaa",
                    disable: true,
                    allowDelete: true,
                    // tagEnable: true,
                    // allowDisabledTag: true,
                    resource: ["模块12"],
                    priority: 3
                  }
                }]
            },
            {
              data: {
                text: 'child2',
                priority: 1
              }
            }
          ]
        },
      },
      tags:  ['模块1','模块2', '模块11'],
      distinctTags:  ['模块1','模块11'],
      options: [{
        value: 'en_US',
        label: 'en_US'
      }, {
        value: 'zh_CN',
        label: 'zh_CN'
      }, {
        value: 'zh_TW',
        label: 'zh_TW'
      }],
      lang: 'zh_CN',
      priorityPrefix: 'P',
      priorities: ['高', '中', '低'],
      registerTheme: {
        // background: 'transparent',
        'root-color': '#430',
        'root-background': '#5eb5bd',
        'root-stroke': '#5eb5bd',
        'root-font-size': 24,
        'root-padding': [15, 25],
        'root-margin': 30,
        'root-radius': 5,
        'root-space': 10,
        'root-shadow': 'rgba(0, 0, 0, .25)',
        'main-color': '#333',
        'main-background': '#a4c5c0',
        'main-stroke': '#a4c5c0',
        'main-font-size': 16,
        'main-padding': [6, 20],
        'main-margin': [20, 40],
        'main-radius': 5,
        'main-space': 5,
        'main-shadow': 'rgba(0, 0, 0, .25)',
        'sub-color': 'black',
        'sub-background': '#F4F8FF',
        'sub-stroke': '#769DFE',
        'sub-font-size': 12,
        'sub-padding': [5, 10],
        'sub-margin': [10, 20],
        'sub-radius': 5,
        'sub-space': 5,
        'connect-color': '#769DFE',
        'connect-width': 1,
        'main-connect-width': 1,
        'connect-radius': 5,
        'selected-background': 'rgb(254, 219, 0)',
        'selected-stroke': 'rgb(254, 219, 0)',
        // 'selected-stroke-width': 2,
        // 'blur-selected-stroke': 'rgb(254, 219, 0)',
        'marquee-background': 'rgba(255,255,255,.3)',
        'marquee-stroke': '#769DFE',
        'drop-hint-color': 'yellow',
        'drop-hint-width': 4,
        'order-hint-area-color': 'rgba(0, 255, 0, .5)',
        'order-hint-path-color': '#0f0',
        'order-hint-path-width': 1,
        'text-selection-color': 'rgb(27,171,255)',
        'line-height': 1.5
      }
    }
  },
  watch: {
    lang() {
      this.$setLang(this.lang);
    }
  },

  methods: {
    save(data) {
      console.log(data);
    },
    test() {
      return false;
    },
    handleMoldChange(a) {
      // console.log(a);
    },
    afterMount() {
      // minder.on('selectionchange ', function (env) {
      //   console.log('selectionchange');
      //   console.log(env);
      //   // let selectNodes = env.minder.getSelectedNodes();
      //   // if (selectNodes) {
      //   //   selectNodes.forEach((node) => {
      //   //     markChangeNode(node);
      //   //   })
      //   // }
      // });
      minder.on('contentchange', function (env) {
        console.log('contentchange');
        // console.log(env);
        let selectNodes = env.minder.getSelectedNodes();
        console.log(selectNodes);
        console.log("=====");

      });
      // minder.on('afterExecCommand', function (env) {
      //   console.log('afterExecCommand');
      //   console.log(env);
      // });
      // minder.on('preExecCommand', function (env) {
      //   console.log('preExecCommand');
      //   console.log(env);
      // });
      minder.on('beforeExecCommand', function (env) {
        console.log('beforeExecCommand');
        console.log(env);
      });

      minder.once('beforeExecCommand', function (env) {
        console.log('beforeExecCommand once');
        console.log(env);
      });

      // const hotboxEl = window.minder.hotbox.$container
      // const hotboxMainEl = hotboxEl.querySelector('.state.main .ring')
      // const children = hotboxMainEl.querySelectorAll('.button')
      // for (const child of children) {
      //   if (['前移', '下级', '同级', '后移', '后移', '删除', '上级'].includes(child.querySelector('.label').innerHTML)) {
      //     hotboxMainEl.removeChild(child)
      //   }
      // }

      this.addHotBox();

    },
    addHotBox() {

      let hotbox = window.minder.hotbox;
      let main = hotbox.state('main');
      main.button({
        position: 'ring',
        label: 'Test',
        key: '/',
        action: function () {
          alert("test")
        },
        enable: function () {
          return true;
        },
        beforeShow: function () {
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
