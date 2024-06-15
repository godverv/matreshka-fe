<script setup lang="ts">

import {PropType} from "vue";

import Inputer from "@/components/base/Inputer.vue";
import {serverGrpc} from "@/models/config/servers/servers.ts";

const val = defineModel({
  type: Object as PropType<serverGrpc>,
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
