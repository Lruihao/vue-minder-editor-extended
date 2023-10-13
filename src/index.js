import mindEditor from './components/minderEditor';
import * as locale from "./locale";
import PackageJSON from "../package.json";
require('@7polo/kity/dist/kity.js');
require('hotbox-minder/hotbox.js');
/**
 * 即使使用了 patch-package 修改了 node_modules 里的源码，
 * 但是在其他应用安装本插件时，无法完成相同的修改，所以，只能在这里引入修改后的源码
 */
// require('@7polo/kityminder-core');
require('./script/patch/kityminder.core');
require('./script/expose-editor.js');

const install = function (Vue, options = {}) {
  locale.use(options.locale);
  locale.i18n(options.i18n);
  Vue.component(mindEditor.name, mindEditor);
}

const plugin = {
  name: "vueMinderEditorExtended",
  version: PackageJSON.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
