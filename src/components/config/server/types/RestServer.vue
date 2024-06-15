<script setup lang="ts">

import {PropType} from "vue";

import Inputer from "@/components/base/Inputer.vue";
import {serverRest} from "@/models/config/servers/servers.ts";

const val = defineModel({
  type: Object as PropType<serverRest>,
  required: true,
})
</script>

<template>
  <div class="NodeField">
    <div>Port:</div>
    <Inputer v-model="val.port.value"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
