<script setup lang="ts">
import {PropType} from "vue";
import {ResourceGrpc} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceGrpc>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>Service url:</div>
    <Inputer v-model="val.connectionString"/>
  </div>

  <div class="NodeField">
    <div>Module:</div>
    <Inputer v-model="val.module"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
