<script setup lang="ts">
import {resourcePostgres} from "@/models/config/resources/resource.ts";

import ConfigField from "@/components/base/ConfigField.vue";

const model = defineModel<resourcePostgres>({
  required: true,
})
</script>

<template>
  <div>
    <div class="NodeField">
      <ConfigField
          v-model="model.name"
          field-name="Database name"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="model.host"
          field-name="Host"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="model.port"
          field-name="Port"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="model.user"
          field-name="Username"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="model.pwd"
          field-name="Password"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
