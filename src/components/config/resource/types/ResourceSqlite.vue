<script setup lang="ts">
import {ResourceSqlite} from "@/models/AppConfig/resources/resource.ts";
import ConfigField from "@/components/base/ConfigField/ConfigInput.vue";

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
