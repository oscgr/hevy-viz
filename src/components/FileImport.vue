<template>
  <VFileUpload v-model="csv" :disabled="loading" divider-text="or choose locally" title="Drag and drop Hevy CSV file"
               @update:model-value="onUpload"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import useCsvParser from "@/stores/csvParser.ts";
import {isString} from "es-toolkit";

const loading = ref(false)
const csv = ref<File>()
const {parse, data} = useCsvParser()


const onUpload = async (file: File) => {
  const result = parse(await file.text())
  if (isString(result)) {
    console.error(result)
    // todo display returned string as error
  }
}

</script>
