/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Plugins

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Styles
import "unfonts.css";
import vuetify from "@/plugins/vuetify.ts";

const app = createApp(App).use(vuetify).mount("#app");
