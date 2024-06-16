<script setup lang="ts">

import {PropType} from "vue";

import ConfigField from "@/components/base/ConfigField.vue";
import {serverRest} from "@/models/config/servers/servers.ts";

const val = defineModel({
  type: Object as PropType<serverRest>,
  required: true,
})
</script>

<template>
  <div class="NodeField">
    <div>Port:</div>
    <ConfigField v-model="val.port"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
