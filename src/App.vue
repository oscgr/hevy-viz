<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" max-width="900">
        <v-row>
          <v-col cols="12">
            <FileImport/>
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            <DownloadBtn/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import FileImport from './components/FileImport.vue';
import useHevyData from "@/stores/hevyData.ts";
import DownloadBtn from "@/DownloadBtn.vue";

const {data} = useHevyData()
</script>
