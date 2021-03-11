
import mindEditor from './minderEditor'
require('../../node_modules/kity/dist/kity.js')
require('../../node_modules/hotbox/hotbox.js')
require('../../node_modules/kityminder-core/dist/kityminder.core.js')
require('../script/expose-editor.js')

const plugin = {}
plugin.name = "vueMinderEditorPlus";
plugin.install = function (Vue, options) {
  Vue.component(mindEditor.name, mindEditor)
}

if (typeof window != "undefined" && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
