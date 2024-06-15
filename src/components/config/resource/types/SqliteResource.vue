<script setup lang="ts">
import {PropType} from "vue";
import Inputer from "@/components/base/Inputer.vue";
import {resourceSqlite} from "@/models/config/resources/resource.ts";

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
    <Inputer v-model="val.path.value"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
