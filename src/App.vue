<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" max-width="900">
        <v-row>
          <v-col cols="12">
            <FileImport/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import FileImport from './components/FileImport.vue';
</script>
