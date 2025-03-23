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
      src="@/assets/svg/errorconfig.svg"
      :alt="configType">
</template>

<style scoped>

</style>
