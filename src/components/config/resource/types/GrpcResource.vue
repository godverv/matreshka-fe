<script setup lang="ts">
import {PropType} from "vue";

import Inputer from "@/components/base/Inputer.vue";
import {resourceGrpc} from "@/models/config/resources/resource.ts";


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
    <Inputer v-model="val.connection_string.value"/>
  </div>

  <div class="NodeField">
    <div>Module:</div>
    <Inputer v-model="val.module.value"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
