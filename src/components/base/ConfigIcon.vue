<script setup lang="ts">
import {ConfigType} from "@/models/configs/types.ts";
import {PropType} from "vue";

defineProps({
  configType: {
    type: String as PropType<ConfigType>,
    required: true
  },
})

</script>

<template>
  <img
      src=""
      alt="@/assets/svg/errorconfig.svg">
</template>

<style scoped>

</style>
