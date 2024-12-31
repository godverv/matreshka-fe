<script setup lang="ts">

import {fsHandler} from "@/models/AppConfig/servers/servers.ts";
import ConfigField from "@/components/base/ConfigField/ConfigInput.vue";

const fsInfo = defineModel<fsHandler>({required: true})

</script>

<template>
  <div class="NodeField">
    <ConfigField
        v-model="fsInfo.dist"
        field-name="Dist folder:"
    />
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
