<script setup lang="ts">
const value = defineModel<String | number | undefined>({
  required: true,
})

</script>

<template>
  <input
      class="Inputer"
      :size="value?.toString().length ?? 3"
      v-model.lazy="value">
</template>

<style scoped>

.Inputer {
  border-radius: 2px;
  padding: 0.125em 0.25em 0.125em 0.25em;

  border: none;
  border-bottom: #12c4ca solid;
  width: fit-content;
}

.Inputer:focus {
  outline: none;
}

</style>
