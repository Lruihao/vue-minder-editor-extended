import Vue from 'vue'
import App from './App'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

require('../node_modules/codemirror/lib/codemirror.js')
require('../node_modules/codemirror/mode/xml/xml.js')
require('../node_modules/codemirror/mode/javascript/javascript.js')
require('../node_modules/codemirror/mode/css/css.js')
require('../node_modules/codemirror/mode/htmlmixed/htmlmixed.js')
require('../node_modules/codemirror/mode/markdown/markdown.js')
require('../node_modules/codemirror/addon/mode/overlay.js')
require('../node_modules/codemirror/mode/gfm/gfm.js')
require('../node_modules/marked/lib/marked.js')
require('../node_modules/kity/dist/kity.js')
require('../node_modules/hotbox/hotbox.js')
require('../node_modules/kityminder-core/dist/kityminder.core.js')
require('./script/expose-editor.js')

Vue.config.productionTip = true
Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
})
