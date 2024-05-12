<script setup lang="ts">

import {PropType} from "vue";
import {ResourceUnknown} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourceUnknown>,
    required: true,
  }
})
</script>

<template>
  <div v-for="(value, key) in val.environment" :key="key">
    <div>{{key}}: {{value}}</div>
  </div>
</template>

<style scoped>

</style>
