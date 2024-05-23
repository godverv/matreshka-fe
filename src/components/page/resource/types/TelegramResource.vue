<script setup lang="ts">

import {PropType} from "vue";

import Inputer from "@/components/base/Inputer.vue";
import CopyButton from "@/components/base/CopyButton.vue";

import {resourceTelegram} from "@/models/resource.ts";

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
    <Inputer v-model="val.api_key"/>
    <CopyButton v-model="val.api_key"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
