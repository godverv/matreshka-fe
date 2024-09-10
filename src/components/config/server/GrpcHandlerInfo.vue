<script setup lang="ts">

import ConfigField from "@/components/base/ConfigField.vue";
import {grpcHandler} from "@/models/config/servers/servers.ts";

const grpcInfo = defineModel<grpcHandler>({required: true})

</script>

<template>
  <div class="NodeField">
    <div>Module:</div>
    <ConfigField v-model="grpcInfo.module"/>
  </div>

  <div class="NodeField">
    <div>Gateway:</div>
    <ConfigField v-model="grpcInfo.gateway"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
