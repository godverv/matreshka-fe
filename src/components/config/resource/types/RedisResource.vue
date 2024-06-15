<script setup lang="ts">
import {PropType} from "vue";

import {resourceRedis} from "@/models/config/resources/resource.ts";

import InputerUpdater from "@/components/base/ConfigField.vue";

defineProps({
  val: {
    type: Object as PropType<resourceRedis>,
    required: true,
  }
})

const emit = defineEmits(['set-change'])

function setChange(name: string, value: string | number) {
  emit('set-change', name, value)
}
</script>

<template>
  <div class="NodeField">
    <div>Host:</div>
    <InputerUpdater
        v-model="val.host"
        @set-change="setChange"
    />
  </div>

  <div class="NodeField">
    <div>Post:</div>
    <InputerUpdater v-model="val.port"/>
  </div>

  <div class="NodeField">
    <div>User:</div>
    <InputerUpdater v-model="val.user"/>
  </div>

  <div class="NodeField">
    <div>Password:</div>
    <InputerUpdater v-model="val.pwd"/>
  </div>

  <div class="NodeField">
    <div>Db number:</div>
    <InputerUpdater v-model="val.db"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
