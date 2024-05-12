<script setup lang="ts">
import {PropType} from "vue";
import {ResourceRedis} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourceRedis>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <div>{{ val.host }}</div>
    <div>{{ val.port }}</div>
    <div>{{ val.user }}</div>
    <div>{{ val.pwd }}</div>
    <div>{{ val.db }}</div>
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
