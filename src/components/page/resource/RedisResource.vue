<script setup lang="ts">
import {PropType} from "vue";
import {ResourceRedis} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceRedis>,
    required: true,
  }
})
</script>

<template>
  <div class="NodeField">
    <div>Host:</div>
    <Inputer v-model="val.host"/>
  </div>

  <div class="NodeField">
    <div>Post:</div>
    <Inputer v-model="val.port"/>
  </div>

  <div class="NodeField">
    <div>User:</div>
    <Inputer v-model="val.user"/>
  </div>

  <div class="NodeField">
    <div>Password:</div>
    <Inputer v-model="val.pwd"/>
  </div>

  <div class="NodeField">
    <div>Db number:</div>
    <Inputer v-model="val.db"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
