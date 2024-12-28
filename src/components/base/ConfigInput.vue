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

const newValRef = ref<string | number>(original.value.value as string | number);
const isValueChanged = ref<boolean>(false);

const configChangesStore = useActiveConfigStore();

function valueChanged() {
  if (newValRef.value == original.value.value) {
    rollbackConfigValue()
  } else {
    setNewConfigValue()
  }
}


function rollbackConfigValue() {
  newValRef.value = original.value.value
  configChangesStore.deleteValue(original.value.envName)

  isValueChanged.value = false
}

function setNewConfigValue() {
  isValueChanged.value = true

  configChangesStore.setValue(
      original.value.envName,
      newValRef.value.toString(),
      rollbackConfigValue
  )
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
              @input="valueChanged"
          />
          <label>{{ fieldName || modelValue.envName }}</label>
        </FloatLabel>
        <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
      </InputGroup>
    </div>
    <div class="InputBox OldValue"
         :style="{
          flex: isValueChanged ? 1: 0,
      }"
    >
      <InputGroup>
        <Button
            :onclick="rollbackConfigValue"
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

<style scoped>
@import "@/assets/styles/config_display.css";

label {
  display: inline-block;
  box-sizing: content-box;
  white-space: nowrap;
}

.ConfigInputFields {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.InputBox {
  transition: 0.75s ease;
  padding-top: 0.35em;
  overflow: hidden;
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
