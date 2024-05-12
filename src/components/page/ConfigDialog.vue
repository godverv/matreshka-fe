<script setup lang="ts">
import {GetConfig} from "../../api/api.ts";
import {ref} from "vue";
import {Config} from "../../api/grpc/matreshka-be_api.pb";
import OneOfResourceConfig from "./resource/OneOfResource.vue";
import AppInfo from "./app_info/AppInfo.vue";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const config = ref<Config | undefined>({})

GetConfig(props.serviceName)
    .then((r) => {
      console.log(r)
      config.value = r
    })

</script>

<template>
  <div v-if="!config">Отсутствует информация о сервисе</div>
  <div v-else class="ConfigDialog">
    <div class="InfoBlock">
      <AppInfo v-model="config.appConfig"/>
    </div>

    <div class="InfoBlock">
      <div
          v-for="res in config.resources"
          :key="res.name"
          class="Resources"
      >
        <div>Conn: {{ res.conn }}</div>
        <div>Resource type: {{ res.resourceType }}</div>

        <div>Config:
          <OneOfResourceConfig
              v-if=res.resourceConfig
              :config="res.resourceConfig"/>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border: red solid;
  gap: 1em;
  padding: 0.5em;
}

.Resources {
  border: blue solid;
}

</style>
