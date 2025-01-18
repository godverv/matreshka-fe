<script setup lang="ts">

import {ConfigValueClass} from "@/models/shared/common.ts";
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import FloatLabel from 'primevue/floatlabel';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import {Nullable} from "@primevue/core";
import {FieldAddon} from "@/models/shared/FieldAddon.ts";

const model = defineModel<ConfigValueClass<string | number>>({
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
  },
  preAddons: {
    type: Array<FieldAddon>,
    default: []
  }
})

const originalValue = model.value.getOriginalValue()

</script>

<template>
  <div class="ConfigInputFields">
    <div class="InputBox">
      <InputGroup>
        <FloatLabel variant="on">
          <InputText
              :disabled="isDisabled"
              :invalid="model.value != model.value"
              v-model="model.value as Nullable<string>"
          />
          <label>{{ fieldName || model.envName }}</label>
        </FloatLabel>
        <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
      </InputGroup>
    </div>
    <div class="InputBox"
         :style="{
          flex: model.isChanged() ? 1: 0,
      }"
    >
      <InputGroup>
        <Button
            :onclick="() => model.rollback()"
            severity="warn"
            icon="pi pi-refresh"
        />
        <FloatLabel variant="on">
          <InputText
              :disabled="true"
              aria-disabled="true"
              v-model="originalValue as Nullable<string>"
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

</style>
