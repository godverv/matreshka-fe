<script setup lang="ts">

import {ResourceGrpc} from "@/models/config/resources/resource.ts";

import ConfigField from "@/components/base/ConfigField.vue";

const model = defineModel<ResourceGrpc>({required: true})
</script>

<template>
    <div class="NodeField">
      <ConfigField
          v-model="model.connection_string"
          field-name="Service url"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="model.module"
          field-name="Module"
      />
    </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
