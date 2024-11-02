<script setup lang="ts">
import {ref} from "vue";

import AppInfo from "@/components/config/app_info/AppInfo.vue";
import ResourcesInfo from "@/components/config/resource/ResourcesInfo.vue";
import ServersInfo from "@/components/config/server/ServersInfo.vue";

import Button from 'primevue/button';

import {GetConfigNodes, PatchConfig} from "@/api/api.ts";
import {AppConfig} from "@/models/config/appConfig.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";
import InputGroup from "primevue/inputgroup";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const configChangesStore = useOpenedConfigChangesStore()

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

  <div v-else class="ConfigDialog">
    <div class="ConfigDisplay">
        <AppInfo
            v-model="configData.app_info"/>
        <ResourcesInfo
            v-model="configData.data_sources"/>
        <ServersInfo
            v-model="configData.servers"/>
    </div>

    <Transition name="Controls">
      <div class="Controls" v-show="configChangesStore.length > 0">
        <div>
          <InputGroup>
            <Button
                @click="save"
                label="Save"
                icon="pi pi-check" iconPos="right"
                severity="danger"
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup>
            <Button
                @click="rollbackAll"
                label="Rollback"
                icon="pi pi-refresh" iconPos="right"
            />
          </InputGroup>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.ConfigDialog {
  overflow-x: hidden;
}

.ConfigDisplay {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 5vh;
}

.Controls {
  position: fixed;
  right: 0;
  bottom: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  background-color: var(--background);

  display: flex;
  justify-content: center;

  width: 100%;
  height: 5vh;
}

.ConfigDisplay > * {
  border: var(--good) solid;
  border-radius: 16px;
  padding: 1em;
}

.Controls-enter-active,
.Controls-leave-active {
  transition: 0.25s;
}

.Controls-enter-to,
.Controls-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.Controls-enter-from,
.Controls-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>
