<template>
  <v-expand-transition>
    <v-btn v-show="data.length > 0" size="large" text="Download" variant="outlined"
           @click="download"></v-btn>
  </v-expand-transition>
</template>
<script lang="ts" setup>
import useHevyData from "@/stores/hevyData.ts";
import XlsxExporter from "@/utils/xlsxExporter.ts";

const {data} = useHevyData();

const download = () => {
  XlsxExporter.download(data.value, {})
}
</script>
