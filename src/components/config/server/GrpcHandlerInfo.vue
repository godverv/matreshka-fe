<script setup lang="ts">

import ConfigField from "@/components/base/ConfigInput.vue";
import {grpcHandler} from "@/models/app_config/servers/servers.ts";

const grpcInfo = defineModel<grpcHandler>({required: true})

</script>

<template>
  <div class="NodeField">
    <ConfigField
        v-model="grpcInfo.module"
        field-name="Module"
    />
  </div>

  <div class="NodeField">
    <ConfigField
        v-model="grpcInfo.gateway"
        field-name="Gateway"
    />
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
