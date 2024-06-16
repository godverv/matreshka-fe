<script setup lang="ts">
import {resourcePostgres} from "@/models/config/resources/resource.ts";

import ConfigField from "@/components/base/ConfigField.vue";

const model = defineModel<resourcePostgres>({
    required: true,
})
</script>

<template>
    <div class="NodeField">
      <div>Database name:</div>
      <ConfigField v-model="model.name"/>
    </div>

    <div class="NodeField">
      <div>Host:</div>
      <ConfigField v-model="model.host"/>
    </div>

    <div class="NodeField">
      <div>Port:</div>
      <ConfigField v-model="model.port"/>
    </div>

    <div class="NodeField">
      <div>Username:</div>
      <ConfigField v-model="model.user"/>
    </div>

    <div class="NodeField">
      <div>Password:</div>
      <ConfigField v-model="model.pwd"/>
    </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
