<script lang="ts" setup>
import { ref } from 'vue'
import { useLocale } from 'vuetify'
import useHevyData from '@/stores/hevyData.ts'
import CsvParser from '@/utils/csvParser.ts'

const loading = ref(false)
const file = ref<File | File[] | undefined>()
const { setData, hasData } = useHevyData()
const { t } = useLocale()

async function onUpload(value: File | File[]) {
  if (!value || Array.isArray(value))
    return
  loading.value = true
  const results = CsvParser.parse(await value.text())
  setData(results)

  file.value = undefined
  loading.value = false
  // todo redirect
}
</script>

<template>
  <v-container max-width="900">
    <v-row>
      <v-col cols="12">
        <VFileUpload
          v-model="file"
          :disabled="loading"
          :divider-text="t('$vuetify.custom.fileUpload.dividerText')"
          :title="t('$vuetify.custom.fileUpload.title')"
          accept=".csv"
          @update:model-value="onUpload"
        >
          <template #item>
            <v-skeleton-loader type="list-item" />
          </template>
        </VFileUpload>

        <!--        <a href="https://hevy.com/settings?export" target="_blank">https://hevy.com/settings?export</a> -->
      </v-col>
    </v-row>
  </v-container>
</template>
