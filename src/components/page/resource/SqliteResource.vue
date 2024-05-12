<script setup lang="ts">
import {PropType} from "vue";
import {ResourceRedis, ResourceSqlite} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourceSqlite>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <div>{{val.path}}</div>
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
