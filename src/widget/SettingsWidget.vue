<script setup lang="ts">

import {ref} from "vue";

import {useSettingsStore} from "@/store/settings.ts";

import {Nullable} from "@primevue/core";

import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel'

const settingsStore = useSettingsStore()

// API URL
const apiURL = ref<string>(settingsStore.getApiURL)

function changeApiUrl() {
  settingsStore.setApiURL(apiURL.value)
}

</script>

<template>
  <div class="Settings">
    <FloatLabel
        style="width: 100%"
        variant="on">
      <InputText
          style="width: 100%"
          v-model="apiURL as Nullable<string>"
          :invalid="apiURL == ''"
          @input="changeApiUrl"
      />
      <label> Api Url </label>
    </FloatLabel>
  </div>
</template>

<style scoped>
.Settings {
  padding: 1em 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>
