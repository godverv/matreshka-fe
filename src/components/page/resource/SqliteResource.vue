<script setup lang="ts">
import {PropType} from "vue";
import {ResourceSqlite} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceSqlite>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>File path:</div>
    <Inputer v-model="val.path"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
