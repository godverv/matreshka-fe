<script setup lang="ts">
import Toast from "primevue/toast";
</script>

<template >
  <div class="root">
    <Toast/>
    <RouterView />
  </div>
</template>

<style scoped>

.root {
  padding: 2em
}

</style>
