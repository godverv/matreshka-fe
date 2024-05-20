<script setup lang="ts">
import {PropType} from "vue";
import {ResourcePostgres} from "@/api/grpc/matreshka-be_api.pb.ts";
import Inputer from "@/components/base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourcePostgres>,
    required: true,
  }
})
</script>

<template>
  <div class="InfoTable">
    <div class="InfoTableColumn">
      <div>Database name</div>
      <Inputer v-model="val.dbName"/>
    </div>

    <div class="InfoTableColumn">
      <div>Host</div>
      <Inputer v-model="val.host"/>
    </div>

    <div class="InfoTableColumn">
      <div>Port</div>
      <Inputer v-model="val.port"/>
    </div>

    <div class="InfoTableColumn">
      <div>Username</div>
      <Inputer v-model="val.userName"/>
    </div>

    <div class="InfoTableColumn">
      <div>Password</div>
      <Inputer v-model="val.pwd"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/resource_info.css";

</style>
