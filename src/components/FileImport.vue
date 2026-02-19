<template>
  <VFileUpload v-model="file"
               :disabled="loading"
               accept=".csv"
               divider-text="Or choose locally"
               title="Drag and drop Hevy CSV file"
               @update:model-value="onUpload">
    <template #item>
      <v-skeleton-loader type="list-item"/>
    </template>
  </VFileUpload>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import useHevyData from "@/stores/hevyData.ts";
import CsvParser from "@/utils/csvParser.ts";

const loading = ref(false);
const file = ref<File | File[]>();
const {setData} = useHevyData();

const onUpload = async (value: File) => {
  if (!value)
    return
  loading.value = true;
  const results = CsvParser.parse(await value.text());
  setData(results);

  file.value = undefined
  loading.value = false;

  // await fetch('https://api.hevyapp.com/v1/workouts?page=1&pageSize=5', {
  //   headers: {
  //     'api-key': '0d4a0dac-e2b1-4a95-bd3d-8c75568dde81',
  //     'accept': 'application/json'
  //   }
  // })

  //if (isString(parsedData)) {
  //  console.error(result)
  // todo display returned string as error
  //}
};
</script>
