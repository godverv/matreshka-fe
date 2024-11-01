<script setup lang="ts">

import {ref} from "vue";
import {ConfigValue} from "@/models/config/common.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";

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

const newValRef = ref(original.value.value as string | number)

const defaultColor = '#12c4ca'
const changedColor = '#FF0000'
const color = ref(defaultColor)

const configChangesStore = useOpenedConfigChangesStore()

function changeValue() {
  if (newValRef.value === original.value.value) {
    color.value = defaultColor
    configChangesStore.deleteValue(original.value.label)
  } else {
    color.value = changedColor
    configChangesStore.setValue(
        original.value.label,
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
  configChangesStore.deleteValue(original.value.label)
}

function isValueChanged() {
  return newValRef.value != original.value.value
}
</script>

<template>
  <label>{{ fieldName }}</label>

  <div class="ConfigInputFields">
    <div class="InputBox NewValue">
      <InputGroup>
        <FloatLabel>
          <InputText
              :invalid="newValRef != original.value"
              v-model="newValRef as Nullable<string>"
              @input="changeValue"
          />
        </FloatLabel>
        <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
      </InputGroup>
    </div>
    <div class="InputBox OldValue"
         :style="{
          flex: isValueChanged() ? 1: 0,
      }"
    >
      <InputGroup>
        <Button
            :onclick="changeValueBack"
            severity="warn"
            icon="pi pi-refresh"
        />
        <FloatLabel>
          <InputText
              v-model="original.value as Nullable<string>"
              aria-disabled="true"
              @input="changeValue"
          />
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
  overflow: hidden;
}

</style>
