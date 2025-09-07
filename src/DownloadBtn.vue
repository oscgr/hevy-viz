<template>
  <v-btn :disabled="data.length === 0" color="primary" size="large" text="Download" variant="outlined"
         @click="download"></v-btn>
</template>
<script lang="ts" setup>
import useHevyData from "@/stores/hevyData.ts";
import XlsxExporter from "@/utils/xlsxExporter.ts";

const {data} = useHevyData();

const download = () => {
  XlsxExporter.download(data.value, {})
}
</script>
