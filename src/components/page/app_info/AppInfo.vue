<script setup lang="ts">
import {ConfigAppConfig} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

const appConfig = defineModel<ConfigAppConfig>()
</script>

<template>
  <div v-if="!appConfig">No app info</div>

  <div v-else class="AppInfo">
    <Inputer
        inputTittle="Service name:"
        v-model="appConfig.name"
    />

    <Inputer
        inputTittle="Version"
        v-model="appConfig.version"
    />
    <Inputer
        inputTittle="Startup duration:"
        v-model="appConfig.startupDurationSec"
    />
  </div>

</template>

<style scoped>
.AppInfo {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
</style>
