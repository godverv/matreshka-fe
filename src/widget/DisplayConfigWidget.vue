<script setup lang="ts">
import {ref} from "vue";

import AppInfo from "@/components/config/app_info/AppInfo.vue";
import ResourcesInfo from "@/components/config/resource/ResourcesInfo.vue";
import ServersInfo from "@/components/config/server/ServersInfo.vue";

import Button from 'primevue/button';

import {GetConfigNodes, PatchConfig} from "@/api/api.ts";
import {AppConfig} from "@/models/config/appConfig.ts";
import {useActiveConfigStore} from "@/store/opened_config.ts";
import InputGroup from "primevue/inputgroup";
import { handleGrpcError } from "@/api/error_codes.ts";
import {useToast} from "primevue/usetoast";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const configChangesStore = useActiveConfigStore()

const configData = ref<AppConfig>({} as AppConfig);

function setNodes(c: AppConfig) {
  configData.value = c
}

function rollbackAll() {
  configChangesStore.rollbackAll()
}

function fetchConfig() {
  GetConfigNodes(props.serviceName)
      .then(setNodes)
      .catch(handleGrpcError(useToast()))
}

function save() {
  PatchConfig(props.serviceName, configChangesStore.envVariables)
      .then(setNodes)
      .then(rollbackAll)
}

fetchConfig()
</script>

<template>
  <div v-if="!configData">Отсутствует информация о сервисе</div>

  <div v-else class="Display">
    <div class="Content">
      <AppInfo
          v-model="configData.app_info"/>
      <ResourcesInfo
          v-model="configData.data_sources"/>
      <ServersInfo
          v-model="configData.servers"/>
    </div>

    <Transition name="BottomControls">
      <InputGroup
          v-show="configChangesStore.length > 0"
          :style="{
              display: 'flex',
              justifyContent: 'center'
            }"
      >
        <Button
            @click="save"
            label="Save"
            icon="pi pi-check" iconPos="right"
            severity="danger"
        />
        <Button
            @click="rollbackAll"
            label="Rollback"
            icon="pi pi-refresh" iconPos="right"
        />
      </InputGroup>
    </Transition>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.Display {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.Content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 5vh;
}

.Content > * {
  border: var(--good) solid;
  border-radius: 16px;
  padding: 1em;
}

.BottomControls-enter-active,
.BottomControls-leave-active {
  transition: 0.25s;
}

.BottomControls-enter-to,
.BottomControls-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.BottomControls-enter-from,
.BottomControls-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>
