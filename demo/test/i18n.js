import Vue from 'vue';
import VueI18n from 'vue-i18n'
import enLocale from "element-ui/lib/locale/lang/en";
import zh_CNLocale from "element-ui/lib/locale/lang/zh-CN";
import zh_TWLocale from "element-ui/lib/locale/lang/zh-TW";
import zh_CN from "../../src/locale/lang/zh-CN";
import en_US from "../../src/locale/lang/en-US";
import zh_TW from "../../src/locale/lang/zh-TW";

Vue.use(VueI18n);

const messages = {
  'en_US': {
    ...enLocale,
    ...en_US
  },
  'zh_CN': {
    ...zh_CNLocale,
    ...zh_CN
  },
  'zh_TW': {
    ...zh_TWLocale,
    ...zh_TW
  }
};

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages,
  silentTranslationWarn: true
});

export default i18n;

export {
  i18n
}
