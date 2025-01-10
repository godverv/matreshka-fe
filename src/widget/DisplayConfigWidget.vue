<script setup lang="ts">
import {ref} from "vue";

import {GetConfigNodes, PatchConfig} from "@/processes/Api/Api.ts";
import {handleGrpcError} from "@/processes/Api/ErrorCodes.ts";

import {AppConfigClass} from "@/models/AppConfig/AppConfig.ts";
import {useActiveConfigStore} from "@/app/store/opened_config.ts";

import Button from 'primevue/button';
import InputGroup from "primevue/inputgroup";
import {useToast} from "primevue/usetoast";

import AppInfo from "@/components/config/AppInfo/AppInfo.vue";
import ResourcesInfo from "@/components/config/Resource/ResourcesInfo.vue";
import ServersInfo from "@/components/config/Server/ServersInfo.vue";

const toastApi = useToast();

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const configChangesStore = useActiveConfigStore()

const configData = ref<AppConfigClass | undefined>();

function setData(c: AppConfigClass) {
  configData.value = c
}

function rollbackAll() {
  configChangesStore.rollbackAll()
}

function fetchConfig() {
  configData.value = undefined
  GetConfigNodes(props.serviceName)
      .then(setData)
      .catch(handleGrpcError(toastApi))
}

function save() {
  PatchConfig(props.serviceName, configChangesStore.envVariables)
      .then(setData)
      .then(rollbackAll)
      .then(fetchConfig)
      .catch(handleGrpcError(toastApi))
}

fetchConfig()
</script>

<template>
  <div v-if="!configData">No App config data</div>

  <div v-else class="Display">
    <div class="Content">
      <div
          class="ContentBlock"
          :style="{
            borderColor: configData.appInfo.isChanged() ? 'var(--warn)':'var(--good)',
          }"
      >
        <AppInfo
            v-model="configData.appInfo"/>
      </div>
      <div
          class="ContentBlock"
          :style="{
            borderColor: configData.getChangedDataSources().length != 0 ? 'var(--warn)':'var(--good)',
          }"
      >
        <ResourcesInfo
            v-model="configData.dataSources"/>
      </div>
      <div
          class="ContentBlock"
          :style="{
            borderColor: configData.getChangedServers().length != 0 ? 'var(--warn)':'var(--good)',
          }"
      >
        <ServersInfo
            v-model="configData.servers"/>
      </div>
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
}

.ContentBlock {
  border: solid;
  /*border: var(--good) solid;*/
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
