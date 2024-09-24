<script setup lang="ts">

import ConfigField from "@/components/base/ConfigField.vue";

import {resourceTelegram} from "@/models/config/resources/resource.ts";

const model = defineModel<resourceTelegram>({required: true})
</script>

<template>
  <div>
    <div class="NodeField">
      <ConfigField
          v-model="model.api_key"
          field-name="Api Key"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
