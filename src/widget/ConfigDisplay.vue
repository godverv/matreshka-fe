<script setup lang="ts">
import {GetConfig} from "@/api/api.ts";
import {ref} from "vue";
import {Config} from "@/api/grpc/matreshka-be_api.pb.ts";
import AppInfo from "@/components/page/app_info/AppInfo.vue";

import ResourcesInfo from "@/components/page/resource/ResourcesInfo.vue";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const config = ref<Config | undefined>({} as Config)

GetConfig(props.serviceName)
    .then((r) => {
      config.value = r
    })

</script>

<template>
  <div v-if="!config">Отсутствует информация о сервисе</div>

  <div v-else class="ConfigDialog">
    <div class="InfoBlock Node">
      <AppInfo v-model="config.appConfig"/>
    </div>

    <div class="InfoBlock Node">
      <ResourcesInfo v-model="config.resources"/>
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
