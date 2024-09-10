<script setup lang="ts">
import {HomeUri} from "@/routes/Routes.ts";
</script>

<template>
  <RouterLink :to=HomeUri>Go to home</RouterLink>
  <div>Not found</div>

  <RouterView />
</template>

<style scoped>

</style>
