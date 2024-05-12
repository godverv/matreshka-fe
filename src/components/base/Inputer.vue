<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  inputTittle: {
    type: Object as PropType<String | undefined>,
    required: false
  }
})

const value = defineModel()
</script>

<template>
  <div class="Inputer">
    <div v-if="inputTittle" class="Tittle">{{inputTittle}}</div>
    <input :value="value">
  </div>
</template>

<style scoped>
.Inputer {
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  width: 100%;
}


.Tittle {
  display: flex;
  width: fit-content;

  flex: 1;

  text-decoration: underline;

  align-items: center;
}

input {
  border-radius: 0.5vw;
  padding: 0.25em 0.5em 0.25em 0.5em;
  display: inline-block;

  border: cadetblue solid;
  width: fit-content;
  flex: 4;
}
</style>
