<script lang="ts" setup>
import { mdiAlertCircle } from '@mdi/js'
import { useLocale } from 'vuetify'

const { t } = useLocale()
</script>

<template>
  <v-empty-state
    :headline="t('$vuetify.custom.notFound.headline')"
    :icon="mdiAlertCircle"
    :text="t('$vuetify.custom.notFound.text')"
  />
</template>
