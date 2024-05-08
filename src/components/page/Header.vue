<script setup  lang="ts">
function changePage(page: string) {
  console.log(page)
}

</script>

<template>
  <div class="Header">
    <button class="HeaderButton" @click="changePage('/home')">Home</button>
    <button class="HeaderButton">Home</button>
  </div>
</template>

<style scoped>
.Header {
  width: 100%;
  height: 3em;

  max-height: 48px;

  border: red solid;

  display: flex;

  gap: 2em;
  justify-content: space-evenly;

  padding: 0 2em 0 2em;
}

.HeaderButton {
  border: red dashed;
  cursor: pointer;
}

</style>
