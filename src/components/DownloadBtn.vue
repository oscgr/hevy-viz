<template>
  <v-btn size="large" text="Download" variant="outlined" @click="download"></v-btn>
</template>
<script lang="ts" setup>
import useHevyData from "@/stores/hevyData.ts";
import XlsxExporter from "@/utils/xlsxExporter.ts";

const {download} = useHevyData();

</script>
