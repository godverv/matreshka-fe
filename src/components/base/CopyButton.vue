<script setup lang="ts">
import {PropType, ref} from "vue";

const props = defineProps({
  inputTittle: {
    type: String as PropType<String | undefined>,
    required: false
  },
  tittlePosition: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'top'
  },
  readOnly: {
    type: Boolean,
    default: false,
  }
})

const tittlePositionCss = ref('column')

switch (props.tittlePosition) {
  case 'bottom':
    tittlePositionCss.value = 'column-reverse';
    break;
  case 'left':
    tittlePositionCss.value = 'row';
    break;
  case 'right':
    tittlePositionCss.value = 'row-reverse';
    break;
  default:
    tittlePositionCss.value = 'column';
}
const value = defineModel<String>()

function doCopy() {
  if (value.value) {
    navigator.clipboard.writeText(value.value.toString())
  }
}
</script>

<template>
  <div class="Inputer">
    <div v-if="inputTittle" class="Tittle">{{inputTittle}}</div>
    <div class="TextAndButton">
      <input v-model="value" :disabled="readOnly">
      <button @click="doCopy">Copy</button>
    </div>
  </div>
</template>

<style scoped>
.Inputer {
  display: flex;
  flex-direction: v-bind('tittlePositionCss');
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

.TextAndButton {
  display: flex;
  flex-direction: row;
  gap: 0.25em;
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
