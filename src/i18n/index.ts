import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import enTranslation from './locales/en/translation'
import zhTranslation from './locales/zh/translation'

export const LANGUAGE_CODES = {
  EN: 'en',
  ZH: 'zh',
}

const getDefaultLng = () => {
  const locales = RNLocalize.getLocales()
  if (locales?.length > 0) {
    const languageCode = locales[0].languageCode
    const codes = Object.values(LANGUAGE_CODES)
    if (codes.includes(languageCode)) {
      return languageCode
    }
  }
  return LANGUAGE_CODES.EN
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      [LANGUAGE_CODES.EN]: { translation: enTranslation },
      [LANGUAGE_CODES.ZH]: { translation: zhTranslation },
    },
    lng: getDefaultLng(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: LANGUAGE_CODES.EN,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
