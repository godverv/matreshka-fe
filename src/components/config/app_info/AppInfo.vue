<script setup lang="ts">

import {AppInfo} from "@/models/AppConfig/info/appInfo.ts";
import ConfigField from "@/components/base/ConfigField/ConfigInput.vue";
import ServiceName from "@/components/config/app_info/ServiceName.vue";

const info = defineModel<AppInfo>()

</script>

<template>
  <div v-if="!info">No app info</div>

  <div v-else class="Node">
        <ServiceName
            v-model="info.name"
        />

        <ConfigField
            v-model="info.version"
            field-name="Version"
        />

        <ConfigField
            v-model="info.startup_duration"
            field-name="Startup duration"
            units="sec"
        />
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
