import { createI18n } from 'vue-i18n'

// 引入语言文件
import en from './lang/en.json'
import zh from './lang/zh-cn.json'

// 创建 i18n 实例，配置默认语言
const i18n = createI18n({
  legacy: false,
  locale: 'window.navigator.language', // 默认语言
  fallbackLocale: 'en', // 备用语言，当找不到某个翻译时使用
  messages: {
    en: en,
    zh: zh
  }
})

export default i18n
