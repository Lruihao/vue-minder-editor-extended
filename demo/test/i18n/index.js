import Vue from 'vue';
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zh_CNLocale from "element-ui/lib/locale/lang/zh-CN";
import zh_TWLocale from "element-ui/lib/locale/lang/zh-TW";
import zh_CN from "./zh-CN";
import en_US from "./en-US";
import zh_TW from "./zh-TW";

import minder_zh_CN from "../../../src/locale/lang/zh-CN";
import minder_en_US from "../../../src/locale/lang/en-US";
import minder_zh_TW from "../../../src/locale/lang/zh-TW";

export const CURRENT_LANGUAGE = 'current_language';

Vue.use(VueI18n);

const messages = {
  'en_US': {
    ...enLocale,
    ...en_US,
    ...minder_en_US
  },
  'zh_CN': {
    ...zh_CNLocale,
    ...zh_CN,
    ...minder_zh_CN

  },
  'zh_TW': {
    ...zh_TWLocale,
    ...zh_TW,
    ...minder_zh_TW

  }
};

const index = new VueI18n({
  locale: 'zh_CN',
  messages,
  silentTranslationWarn: true
});

const loadedLanguages = ['en_US', 'zh_CN', 'zh_TW'];

function setI18nLanguage(lang) {
  index.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  localStorage.setItem(CURRENT_LANGUAGE, lang);
  return lang;
}

Vue.prototype.$setLang = function (lang) {
  if (index.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      let file = lang.replace("_", "-");
      return import(`./${file}`).then(response => {
        index.mergeLocaleMessage(lang, response.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
};

export default index;
