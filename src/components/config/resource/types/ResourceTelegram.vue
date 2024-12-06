<script setup lang="ts">

import ConfigField from "@/components/base/ConfigField.vue";

import {ResourceTelegram} from "@/models/app_config/resources/resource.ts";

const model = defineModel<ResourceTelegram>({required: true})
</script>

<template>
    <div class="NodeField">
      <ConfigField
          v-model="model.api_key"
          field-name="Api Key"
      />
    </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
