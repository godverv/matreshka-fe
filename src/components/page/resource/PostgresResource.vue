<script setup lang="ts">
import Inputer from "@/components/base/Inputer.vue";
import {resourcePostgres} from "@/models/resource.ts";

const model = defineModel<resourcePostgres>({
    required: true,
})
</script>

<template>
  <div>
    <div class="NodeField">
      <div>Database name:</div>
      <Inputer v-model="model.name"/>
    </div>

    <div class="NodeField">
      <div>Host:</div>
      <Inputer v-model="model.host"/>
    </div>

    <div class="NodeField">
      <div>Port:</div>
      <Inputer v-model="model.port"/>
    </div>

    <div class="NodeField">
      <div>Username:</div>
      <Inputer v-model="model.user"/>
    </div>

    <div class="NodeField">
      <div>Password:</div>
      <Inputer v-model="model.pwd"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
