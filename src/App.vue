<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" max-width="900">
        <v-row>
          <v-col cols="12">
            <v-stepper :items="['Import', 'Download']">
              <template v-slot:item.1>
                <FileImport/>
              </template>
              <template v-slot:item.2>
                <div class="d-flex justify-center">

              <DownloadBtn/>
                </div>
              </template>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import DownloadBtn from "@/components/DownloadBtn.vue";
import FileImport from "@/components/FileImport.vue";
import useHevyData from "@/stores/hevyData";

const {data} = useHevyData();
</script>
