<script setup lang="ts">
import {PropType} from "vue";
import {ResourceGrpc} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourceGrpc>,
    required: true,
  }
})
</script>

<template>
  <div class=".Info">
    <div>{{val.connectionString}}</div>
    <div>{{val.module}}</div>
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
