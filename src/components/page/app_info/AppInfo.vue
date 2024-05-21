<script setup lang="ts">
import {ConfigAppConfig} from "@/api/grpc/matreshka-be_api.pb.ts";
import Inputer from "@/components/base/Inputer.vue";

const appConfig = defineModel<ConfigAppConfig>()

</script>

<template>
  <div v-if="!appConfig">No app info</div>
  <div v-else class="Node">
    <div class="NodeHeader">
      AppInfo:
    </div>

    <div class="Node">
      <div class="NodeField">
        <div>Service name:</div>
        <Inputer v-model="appConfig.name"/>
      </div>

      <div class="NodeField">
        <div>Version:</div>
        <Inputer v-model="appConfig.version"/>
      </div>

      <div class="NodeField">
        <div>Startup duration:</div>
        <Inputer v-model="appConfig.startupDurationSec"/>
        <div>seconds</div>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
