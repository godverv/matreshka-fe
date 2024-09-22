<script setup lang="ts">

import {ref} from "vue";
import {configValue} from "@/models/config/common.ts";
import {useOpenedConfigChangesStore} from "@/state/opened_config.ts";

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import FloatLabel from 'primevue/floatlabel'
import InputGroupAddon from 'primevue/inputgroupaddon'


const original = defineModel<configValue<string | number>>({
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
    configChangesStore.deleteValue(original.value.name)
  } else {
    color.value = changedColor
    configChangesStore.setValue(
        original.value.name,
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
              v-model="newValRef"
              @input="changeValue"
          />
        </FloatLabel>
        <InputGroupAddon v-if="units">{{ units }}</InputGroupAddon>
      </InputGroup>
    </div>
    <div class="InputBox OldValue" v-show="newValRef != original.value">
      <InputGroup >
        <Button :onclick="changeValueBack">⬅</Button>
        <FloatLabel>
          <InputText
              v-model="original.value"
              aria-disabled="true"
              @input="changeValue"
          />
        </FloatLabel>
      </InputGroup>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

label {
  display: inline-block;
  overflow: hidden;
}

.ConfigInputFields {
  display: flex;
}

.InputBox {
  transition: width 1s ease;
}

.NewValue {
  width: 100%;
}

.OldValue {
  width: 100%;
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>
