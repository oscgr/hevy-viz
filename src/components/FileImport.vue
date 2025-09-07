<template>
  <VFileUpload v-model="csv" :disabled="loading" accept=".csv" divider-text="Or choose locally"
               title="Drag and drop Hevy CSV file"
               @update:model-value="onUpload"/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useHevyData from "@/stores/hevyData.ts";
import CsvParser from "@/utils/csvParser.ts";

const loading = ref(false);
const csv = ref<File>();
const { setData } = useHevyData();

const onUpload = async (file: File) => {
	const results = CsvParser.parse(await file.text());
	setData(results);
	//if (isString(parsedData)) {
	//  console.error(result)
	// todo display returned string as error
	//}
};
</script>
