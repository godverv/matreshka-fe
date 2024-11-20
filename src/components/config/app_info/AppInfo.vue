<script setup lang="ts">

import {AppInfo} from "@/models/config/info/appInfo.ts";
import ConfigField from "@/components/base/ConfigField.vue";

const info = defineModel<AppInfo>()

</script>

<template>
  <div v-if="!info">No app info</div>

  <div v-else class="Node">
        <ConfigField
            v-model="info.name"
            fieldName="Service name"/>

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
