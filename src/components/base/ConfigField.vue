<script setup lang="ts">

import {ref} from "vue";
import {configValue} from "@/models/config/common.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";

const originalValue = defineModel<configValue<string | number>>({
  required: true,
})

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})

const newValRef = ref(originalValue.value.value as string | number)

const color = ref('#12c4ca')

const configChangesStore = useOpenedConfigChangesStore()

function changeValue() {
  if (newValRef.value === originalValue.value.value) {
    color.value = '#12c4ca'
    configChangesStore.deleteValue(originalValue.value.name)
  } else {
    color.value = '#FF0000'
    configChangesStore.setValue(originalValue.value.name, newValRef.value.toString(), ()=>{
      newValRef.value = originalValue.value.value } )
  }
}

</script>

<template>
  <input
      class="Inputer"
      :style="{borderBottom: color+' solid'}"
      :size="(originalValue?.toString().length ?? 3) + (disabled ? 1 : 0)"
      :disabled="disabled"
      @input="changeValue"
      v-model="newValRef"
  >
</template>

<style scoped>
@import "@/components/base/inputer.css";

</style>
