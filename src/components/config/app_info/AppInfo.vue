<script setup lang="ts">
import {appInfo} from "@/models/config/info/appInfo.ts";
import ConfigField from "@/components/base/ConfigField.vue";

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
        <ConfigField
            v-model="info.name"
            fieldName="Service name:"
        />
      </div>

      <div class="NodeField">
        <ConfigField
            v-model="info.version"
            field-name="Version"
        />
      </div>

      <div class="NodeField">
        <ConfigField
            v-model="info.startup_duration"
            field-name="Startup duration"
            units="sec"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
