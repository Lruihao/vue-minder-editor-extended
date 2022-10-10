import Vue from 'vue';
import App from './App';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import vueMinderEditorExtended from "../src/index"
Vue.config.productionTip = true;

// 方式一
// import locale from '/src/locale/lang/en-US'
// Vue.use(vueMinderEditorExtended, {
//   locale
// });

// 方式二
// import lang from '/src/locale/lang/en-US'
// import locale from '/src/locale'
// // 设置语言
// locale.use(lang)
// Vue.use(vueMinderEditorExtended);

// 方式三
import i18n from "./test/i18n/index";
Vue.use(vueMinderEditorExtended, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(ElementUI, {
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
