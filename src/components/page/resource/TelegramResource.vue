<script setup lang="ts">

import {PropType} from "vue";
import {ResourceTelegram} from "@/api/grpc/matreshka-be_api.pb.ts";
import Inputer from "@/components/base/Inputer.vue";
import CopyButton from "@/components/base/CopyButton.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceTelegram>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>Api Key:</div>
    <Inputer v-model="val.apiKey"/>
    <CopyButton v-model="val.apiKey"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
