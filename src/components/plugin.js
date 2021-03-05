
import mindEditor from './minderEditor'

const plugin = {}
plugin.name = "vueMinderEditorPlus";
plugin.install = function (Vue, options) {
  Vue.component(mindEditor.name, mindEditor)
}

if (typeof window != "undefined" && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
