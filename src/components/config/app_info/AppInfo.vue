<script setup lang="ts">
import {appInfo} from "@/models/config/info/appInfo.ts";
import InputerUpdater from "@/components/base/ConfigField.vue";

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
        <InputerUpdater v-model="info.name"/>
      </div>

      <div class="NodeField">
        <div>Version:</div>
        <InputerUpdater v-model="info.version"/>
      </div>

      <div class="NodeField">
        <div>Startup duration:</div>
        <InputerUpdater v-model="info.startup_duration"/>
        <div>seconds</div>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
