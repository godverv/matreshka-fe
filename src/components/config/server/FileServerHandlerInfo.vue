<script setup lang="ts">

import {fsHandler} from "@/models/config/servers/servers.ts";
import ConfigField from "@/components/base/ConfigField.vue";

const fsInfo = defineModel<fsHandler>({required: true})

</script>

<template>
  <div class="NodeField">
    <div> Dist folder:</div>
    <ConfigField v-model="fsInfo.dist"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
