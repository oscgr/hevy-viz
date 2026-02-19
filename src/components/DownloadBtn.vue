<script lang="ts" setup>
import useHevyData from '@/stores/hevyData.ts'

const { download } = useHevyData()
</script>

<template>
  <v-btn size="large" text="Download" variant="outlined" @click="download" />
</template>
