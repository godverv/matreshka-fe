<script setup lang="ts">
import {PropType} from "vue";
import {resourceSqlite} from "@/models/config/resources/resource.ts";
import InputerUpdater from "@/components/base/ConfigField.vue";

defineProps({
  val: {
    type: Object as PropType<resourceSqlite>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>File path:</div>
    <InputerUpdater v-model="val.path"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
