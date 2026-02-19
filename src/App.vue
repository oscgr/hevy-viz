<script lang="ts" setup>
/* eslint-disable vue/valid-v-slot */
import DownloadBtn from '@/components/DownloadBtn.vue'
import FileImport from '@/components/FileImport.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" max-width="900">
        <v-row>
          <v-col cols="12">
            <v-stepper :items="['Import', 'Download']">
              <template #item.1>
                <FileImport />
              </template>
              <template #item.2>
                <div class="d-flex justify-center">
                  <DownloadBtn />
                </div>
              </template>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
