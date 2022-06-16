import Vue from 'vue';
import App from './App';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import vueMinderEditorPlus from "../src/index"


Vue.config.productionTip = true;

Vue.use(ElementUI);

// 方式一
// import locale from '/src/locale/lang/en-US'
// Vue.use(vueMinderEditorPlus, {
//   locale
// });

// 方式二
// import lang from '/src/locale/lang/en-US'
// import locale from '/src/locale'
// // 设置语言
// locale.use(lang)
// Vue.use(vueMinderEditorPlus);

// 方式三
import i18n from "./test/i18n";
Vue.use(vueMinderEditorPlus, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  i18n
})
