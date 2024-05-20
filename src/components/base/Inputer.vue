<script setup lang="ts">
const value = defineModel({
  type: String,
  required: true,
})

</script>

<template>
    <input v-model="value">
</template>

<style scoped>
input {
  border-radius: 0.5vw;
  padding: 0.25em 0.5em 0.25em 0.5em;

  border: #12c4ca solid;

  width: fit-content;
}
</style>
