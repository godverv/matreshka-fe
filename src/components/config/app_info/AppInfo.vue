<script setup lang="ts">
import Inputer from "@/components/base/Inputer.vue";
import {appInfo} from "@/models/appConfig.ts";

const info = defineModel<appInfo>()
</script>

<template>
  <div v-if="!info">No app info</div>

  <div v-else class="Node">
    <div class="NodeHeader">
      AppInfo:
    </div>

    <div class="Node">
      <div class="NodeField">
        <div>Service name:</div>
        <Inputer v-model="info.name.value"/>
      </div>

      <div class="NodeField">
        <div>Version:</div>
        <Inputer v-model="info.version.value"/>
      </div>

      <div class="NodeField">
        <div>Startup duration:</div>
        <Inputer v-model="info.startup_duration.value"/>
        <div>seconds</div>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
