# Vue-MindEditor based on fex-team/kityminder-core
> 该项目是参考 [vue-mindeditor](https://github.com/fudax/vue-mindeditor) 以及 [kityminder-editor](https://github.com/fex-team/kityminder-editor)
> 源码，基于 [kityminder-core](https://github.com/fex-team/kityminder-core) 实现

## developing
``` bash
功能完善中，之后会完善api及文档。。。
```

## install
``` bash
npm install vue-minder-editor --save
```

## Usage
```javascript
import minderEditor from 'vue-minder-editor'
import Vue from 'vue'
Vue.use(minderEditor);
```

## component
```html
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
```

## Build Setup

``` bash
# install npm dependencies
    npm install

# serve with hot reload at localhost:8088
    npm run dev

# build for plugin with minification
    npm run build

# License
    BSD-3-Clause License
```


