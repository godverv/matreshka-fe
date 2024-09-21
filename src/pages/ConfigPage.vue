<script setup lang="ts">
import ConfigDisplay from "@/widget/ConfigWidget.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <ConfigDisplay :service-name="name"/>
</template>

<style scoped>

</style>
