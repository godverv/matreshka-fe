<script setup lang="ts">
import Inputer from "@/components/base/Inputer.vue";
import {resourcePostgres} from "@/models/resource.ts";

const model = defineModel<resourcePostgres>({
    required: true,
})
</script>

<template>
    <div class="NodeField">
      <div>Database name:</div>
      <Inputer v-model="model.name.value"/>
    </div>

    <div class="NodeField">
      <div>Host:</div>
      <Inputer v-model="model.host.value"/>
    </div>

    <div class="NodeField">
      <div>Port:</div>
      <Inputer v-model="model.port.value"/>
    </div>

    <div class="NodeField">
      <div>Username:</div>
      <Inputer v-model="model.user.value"/>
    </div>

    <div class="NodeField">
      <div>Password:</div>
      <Inputer v-model="model.pwd.value"/>
    </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
