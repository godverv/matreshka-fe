<script setup lang="ts">
import DisplayConfigDisplay from "@/widget/DisplayConfigWidget.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <DisplayConfigDisplay :service-name="name"/>
</template>

<style scoped>

</style>
