<script setup lang="ts">
import {ResourceSqlite} from "@/models/AppConfig/resources/resource.ts";
import ConfigField from "@/components/base/ConfigField/ConfigInput.vue";
import SelectButton from "@/components/base/SelectButton.vue"

import {ref} from "vue";

const model = defineModel<ResourceSqlite>({
  required: true,
})

const inMemoryKey = 'in mem'
const customKey = 'custom'

const selectedOption = ref<string>(customKey)

if (model.value.path.value == "in_memory") {
  selectedOption.value = inMemoryKey;
}

const options = ref<string[]>([inMemoryKey, customKey])

function valueChanged() {
  if (selectedOption.value == inMemoryKey) {
    model.value.path.value = 'in_memory'
  }
}

</script>

<template>
  <div class="Node">
    <div class="InputPath">
      <div class="Inputer">
        <ConfigField
            v-model="model.path"
            field-name="File path"
        />
      </div>

      <div class="SelectButton">
        <SelectButton
            v-model="selectedOption"
            :options="options"
            @update:modelValue="valueChanged"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.InputPath {
  display: flex;
  flex-direction: row;
  align-items: end;
}


</style>
