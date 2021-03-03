
import mindEditor from './minderEditor'

let plugin = {}
plugin.install = function (Vue, options) {
  Vue.component(mindEditor.name, mindEditor)
}
export default plugin
