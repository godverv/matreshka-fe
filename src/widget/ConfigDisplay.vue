<script setup lang="ts">
import { GetConfigRaw} from "@/api/api.ts";
import {ref} from "vue";
import AppInfo from "@/components/page/app_info/AppInfo.vue";

import ResourcesInfo from "@/components/page/resource/ResourcesInfo.vue";
import ServersInfo from "@/components/page/server/ServersInfo.vue";
import {Config} from "@/models/config.ts";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const config = ref<Config>({} as Config);

GetConfigRaw(props.serviceName)
    .then((c) => {
      config.value = c
    })

</script>

<template>
  <div v-if="!config">Отсутствует информация о сервисе</div>

  <div v-else class="ConfigDialog">
    <div class="InfoBlock Node">
      <AppInfo v-model="config.app_info"/>
    </div>

    <div class="InfoBlock Node">
      <ResourcesInfo v-model="config.data_sources"/>
    </div>

    <div class="InfoBlock Node">
      <ServersInfo v-model="config.servers"/>
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
