<script setup lang="ts">

import {PropType} from "vue";

import ConfigField from "@/components/base/ConfigField.vue";
import CopyButton from "@/components/base/CopyButton.vue";

import {resourceTelegram} from "@/models/config/resources/resource.ts";

defineProps({
  val: {
    type: Object as PropType<resourceTelegram>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>Api Key:</div>
    <ConfigField v-model="val.api_key"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
