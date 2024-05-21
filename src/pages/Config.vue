<script setup lang="ts">
import ConfigDisplay from "@/widget/ConfigDisplay.vue";

const props = defineProps({
  name: String,
})
</script>

<template>
  <ConfigDisplay :service-name="name"/>
</template>

<style scoped>

</style>
