<script setup lang="ts">
import {PropType} from "vue";
import {ResourcePostgres} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourcePostgres>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <div>{{val.dbName}}</div>
    <div>{{val.host}}</div>
    <div>{{val.port}}</div>
    <div>{{val.userName}}</div>
    <div>{{val.pwd}}</div>
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
