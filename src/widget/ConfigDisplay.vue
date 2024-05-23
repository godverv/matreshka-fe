<script setup lang="ts">
import {ref} from "vue";

import AppInfo from "@/components/config/app_info/AppInfo.vue";
import ResourcesInfo from "@/components/config/resource/ResourcesInfo.vue";
import ServersInfo from "@/components/config/server/ServersInfo.vue";

import { appConfig } from "@/models/appConfig.ts";

import { GetConfigRaw} from "@/api/api.ts";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const cfg = ref<appConfig>({} as appConfig);

GetConfigRaw(props.serviceName)
    .then((c) => {
      cfg.value = c
    })

</script>

<template>
  <div v-if="!cfg">Отсутствует информация о сервисе</div>

  <div v-else class="ConfigDialog">
    <div class="InfoBlock Node">
      <AppInfo v-model="cfg.app_info"/>
    </div>

    <div class="InfoBlock Node">
      <ResourcesInfo v-model="cfg.data_sources"/>
    </div>

    <div class="InfoBlock Node">
      <ServersInfo v-model="cfg.server"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.ConfigDialog {
  min-width: 40vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.InfoBlock {
  display: flex;
  flex-direction: column;
  border: #78042f solid;
  border-radius: 0.75vw;
  gap: 1em;
  padding: 0.5em 0 0.5em 0;
}

</style>
