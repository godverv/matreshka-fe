<script setup lang="ts">
import {ref} from "vue";

import AppInfo from "@/components/config/app_info/AppInfo.vue";
import ResourcesInfo from "@/components/config/resource/ResourcesInfo.vue";
// import ServersInfo from "@/components/config/server/ServersInfo.vue";


import {GetConfigNodes, PatchConfig} from "@/api/api.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
})

const configChangesStore = useOpenedConfigChangesStore()

const configData = ref<appConfig>({} as appConfig);

function setNodes(c: appConfig) {
  configData.value = c
}

function rollbackAll() {
  configChangesStore.rollbackAll()
}

GetConfigNodes(props.serviceName)
    .then(setNodes)

function save() {
  PatchConfig(props.serviceName, configChangesStore.envVariables)
      .then(setNodes)
      .then(rollbackAll)
}
</script>

<template>
  <div v-if="!configData">Отсутствует информация о сервисе</div>

  <div v-else class="ConfigDialog">
    <transition-group>
      <div
          class="Controls"
          :class="{hidden: configChangesStore.length == 0 }">

        <button @click="save">
          Save
        </button>
        <button @click="rollbackAll">
          Rollback
        </button>

      </div>

      <div class="InfoBlock Node">
        <AppInfo v-model="configData.app_info"/>
      </div>

      <div class="InfoBlock Node">
        <ResourcesInfo
            v-model="configData.data_sources"/>
      </div>

      <!--    <div class="InfoBlock Node">-->
      <!--      <ServersInfo v-model="configData.server"/>-->
      <!--    </div>-->
    </transition-group>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.ConfigDialog {
  width: 100%;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
}

.ConfigDialog > * {
  transition: 0.5s ease;
}

.ConfigDialog > *.hidden {
  height: 0;
  opacity: 0;
}

.Controls {
  display: flex;
  width: 100%;

  flex-direction: column;
  gap: 1em;
}

</style>
