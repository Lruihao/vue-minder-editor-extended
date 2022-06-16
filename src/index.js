import mindEditor from './components/minderEditor'
import * as locale from "./locale";
import PackageJSON from "../package.json"
import VueI18n from 'vue-i18n'
require('@7polo/kity/dist/kity.js');
require('hotbox-minder/hotbox.js');
require('@7polo/kityminder-core');
require('./script/expose-editor.js');


const install = function (Vue, options = {}) {
  Vue.use(VueI18n);
  Vue.component(mindEditor.name, mindEditor);
  locale.use(options.locale);
  locale.i18n(options.i18n);
}

const plugin = {
  name: "vueMinderEditorPlus",
  version: PackageJSON.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
