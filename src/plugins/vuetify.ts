/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import LuxonAdapter from '@date-io/luxon'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { VFileUpload } from 'vuetify/labs/VFileUpload'

import { en as vuetifyEn, fr as vuetifyFr } from 'vuetify/locale'
import { en, fr } from '@/i18n'
// Styles
import 'vuetify/styles'
import '@/styles/styles.scss'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'system',
  },
  date: {
    adapter: LuxonAdapter,
  },
  components: {
    VFileUpload,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: navigator.language.slice(0, 2),
    fallback: 'en',
    messages: {
      fr: {
        ...vuetifyFr,
        custom: fr,
      },
      en: {
        ...vuetifyEn,
        custom: en,
      },
    },
  },
})
