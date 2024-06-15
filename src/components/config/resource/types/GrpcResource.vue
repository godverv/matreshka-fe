<script setup lang="ts">
import {PropType} from "vue";

import {resourceGrpc} from "@/models/config/resources/resource.ts";

import InputerUpdater from "@/components/base/ConfigField.vue";


defineProps({
  val: {
    type: Object as PropType<resourceGrpc>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>Service url:</div>
    <InputerUpdater v-model="val.connection_string"/>
  </div>

  <div class="NodeField">
    <div>Module:</div>
    <InputerUpdater v-model="val.module"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
