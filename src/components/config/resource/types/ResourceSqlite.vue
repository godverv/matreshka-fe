<script setup lang="ts">
import {ResourceSqlite} from "@/models/app_config/resources/resource.ts";
import ConfigField from "@/components/base/ConfigInput.vue";

const model = defineModel<ResourceSqlite>({
  required: true,
})
</script>

<template>
    <div class="NodeField">
      <ConfigField
          v-model="model.path"
          field-name="File path"
      />
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
