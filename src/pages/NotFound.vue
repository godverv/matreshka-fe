<script setup lang="ts">
import {HomeUrl} from "../routes/Routes.ts";
</script>

<template>
  <RouterLink :to=HomeUrl>Go to home</RouterLink>
  <div>Not found</div>

  <RouterView />
</template>

<style scoped>

</style>
