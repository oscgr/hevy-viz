/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Plugins

// Composables
import { createApp } from 'vue'

import vuetify from '@/plugins/vuetify.ts'

// Components
import App from './App.vue'
// Styles
import 'unfonts.css'

createApp(App).use(vuetify).mount('#app')
