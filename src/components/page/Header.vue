<script setup lang="ts">
import {HomeUrl} from "../../routes/Routes.ts";
</script>

<template>
  <div class="Header">
    <RouterLink :to=HomeUrl>
      <button class="HeaderButton">Home</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.Header {
  width: 100%;
  box-sizing: border-box;

  height: 3em;

  max-height: 48px;

  display: flex;

  gap: 2em;
  justify-content: space-evenly;

  padding: 0 2em 0 2em;
}

.HeaderButton {
  cursor: pointer;

  width: 100%;
  height: 100%;
}

</style>
