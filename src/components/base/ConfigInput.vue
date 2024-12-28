<script setup lang="ts">

import {ref} from "vue";
import {ConfigValue} from "@/models/shared/common.ts";
import {useActiveConfigStore} from "@/app/store/opened_config.ts";

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import FloatLabel from 'primevue/floatlabel';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import {Nullable} from "@primevue/core";

const original = defineModel<ConfigValue<string | number>>({
  required: true,
})

defineProps({
  fieldName: {
    type: String,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  units: {
    type: String
  },
  isRestartRequired: {
    type: Boolean,
    default: false
  }
})

const newValRef = ref<string | number>(original.value.value as string | number)

const isValueChangedRef = ref<boolean>(false)

const defaultColor = '#12c4ca'
const changedColor = '#FF0000'
const color = ref(defaultColor)

const configChangesStore = useActiveConfigStore()

function valueChanged() {
  if (newValRef.value == original.value.value) {
    color.value = defaultColor
    configChangesStore.deleteValue(original.value.envName)
  } else {
    color.value = changedColor
    configChangesStore.setValue(
        original.value.envName,
        newValRef.value.toString(),
        () => {
          newValRef.value = original.value.value
          color.value = defaultColor
        }
    )
  }
}


function changeValueBack() {
  newValRef.value = original.value.value
  configChangesStore.deleteValue(original.value.envName)
}

function isValueChanged() {
  console.log(newValRef.value != original.value.value)
  return newValRef.value != original.value.value
}
</script>

<template>
  <div class="ConfigInputFields">
    <div class="InputBox NewValue">
      <InputGroup>
        <FloatLabel variant="on">
          <InputText
              :disabled="isDisabled"
              :invalid="newValRef != original.value"
              v-model="newValRef as Nullable<string>"
              @change="valueChanged"
          />
          <label>{{ fieldName || modelValue.envName }}</label>
        </FloatLabel>
        <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
      </InputGroup>
    </div>
    <div class="InputBox OldValue"
         :style="{
          flex: isValueChanged() ? 1: 0,
          overflow: isValueChanged() ? '' : 'hidden',
      }"
    >
      <InputGroup>
        <Button
            :onclick="changeValueBack"
            severity="warn"
            icon="pi pi-refresh"
        />
        <FloatLabel variant="on">
          <InputText
              :disabled="true"
              v-model="original.value as Nullable<string>"
              aria-disabled="true"
          />
          <label>Old value</label>
        </FloatLabel>
      </InputGroup>
    </div>
  </div>
</template>

//animation: oldValueSlideIn 0.5s ease forwards;
<style scoped>
@import "@/assets/styles/config_display.css";

label {
  display: inline-block;
  overflow: hidden;
}

.ConfigInputFields {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.InputBox {
  transition: 0.5s ease;
}

.InputBox:first-child {
  flex: 1;
}

.NewValue {
  width: 100%;
}

.OldValue {
  flex: 0;
}

</style>
