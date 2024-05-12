<script setup lang="ts">
import {GetConfig} from "../../api/api.ts";
import {ref} from "vue";
import {Config} from "../../api/grpc/matreshka-be_api.pb";
import AppInfo from "./app_info/AppInfo.vue";
import Resource from "./resource/Resource.vue";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const config = ref<Config | undefined>({})

GetConfig(props.serviceName)
    .then((r) => {
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
      <div v-if="!config.resources"> No resources</div>
      <Resource
          v-else
          v-for="(res, i) in config.resources"
          :key="res.name"
          v-model="config.resources[i]"
      >

      </Resource>
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
  border: #78042f solid;
  border-radius: 0.75vw;
  gap: 1em;
  padding: 0.5em 0 0.5em 0 ;
}

</style>
