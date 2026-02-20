<script lang="ts" setup>
import { mdiGithub, mdiMoonWaningCrescent, mdiWeatherSunny } from '@mdi/js'
import { useLocale, useTheme } from 'vuetify'
import { VFadeTransition } from 'vuetify/components'

const theme = useTheme()
const { t } = useLocale()
</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <v-spacer />
      <router-link :to="{ name: 'Home' }" class="text-h5">
        Heavy VIZ
      </router-link>
      <v-spacer />
      <v-btn
        v-tooltip="t('$vuetify.custom.app.themeTooltip')"
        :icon="theme.current.value.dark ? mdiMoonWaningCrescent : mdiWeatherSunny"
        flat
        @click="theme.toggle(['light', 'dark'])"
      />
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="route.meta.transition || VFadeTransition" hide-on-leave>
          <component :is="Component" />
        </component>
      </router-view>
    </v-main>
    <v-footer app>
      <v-spacer />
      <v-btn
        :icon="mdiGithub"
        flat
        href="https://github.com/oscgr/hevy-viz"
        target="_blank"
      />
    </v-footer>
  </v-app>
</template>
