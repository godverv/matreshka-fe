<script setup lang="ts">

import {ref} from "vue";
import {configValue} from "@/models/config/common.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import FloatLabel from 'primevue/floatlabel'
import InputGroupAddon from 'primevue/inputgroupaddon'

const originalValue = defineModel<configValue<string | number>>({
  required: true,
})

defineProps({
  fieldName: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  units: {
    type: String
  }
})

const newValRef = ref(originalValue.value.value as string | number)

const defaultColor = '#12c4ca'
const changedColor = '#FF0000'
const color = ref(defaultColor)

const configChangesStore = useOpenedConfigChangesStore()

function changeValue() {
  if (newValRef.value === originalValue.value.value) {
    color.value = defaultColor
    configChangesStore.deleteValue(originalValue.value.name)
  } else {
    color.value = changedColor
    configChangesStore.setValue(
        originalValue.value.name,
        newValRef.value.toString(),
        () => {
          newValRef.value = originalValue.value.value
          color.value = defaultColor
        }
    )
  }
}
</script>

<template>
    <label>{{ fieldName }}</label>
    <InputGroup>
      <FloatLabel>
        <InputText
            v-model="newValRef"
            @input="changeValue"
        />
      </FloatLabel>
      <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
    </InputGroup>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

label {
  display: inline-block;
  overflow: hidden;

}

</style>
