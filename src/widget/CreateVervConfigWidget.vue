<script setup lang="ts">

import {ref} from "vue";

import {useToast} from "primevue/usetoast";
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import InputGroup from "primevue/inputgroup";

import {CreateConfig} from "@/api/api.ts";
import {ToastMessageOptions} from "primevue";

const toastApi = useToast();

const serviceName = ref<string>('');

function isNameValid(): boolean {
  return true
}

function inputName() {
  serviceName.value = serviceName.value.replace(" ", "_")
}

function createConfig() {
  CreateConfig(serviceName.value).then((resp) => {
    const msg = {} as ToastMessageOptions;
    msg.closable = true
    msg.life = 10_000
    if (resp.errorMessage == '') {
      msg.severity = 'success'
      msg.summary = `Service created. Check it out`
    } else {
      msg.severity = 'error'
      msg.summary = resp.errorMessage
    }

    toastApi.add(msg)
  })
}
</script>

<template>

  <div class="container">
    <InputGroup>
      <FloatLabel variant="on">
        <InputText
            v-model="serviceName"
            @invalid="isNameValid"
            @input="inputName"
        />
        <label>Service name</label>
      </FloatLabel>
    </InputGroup>
    <div :style="{display: 'flex', justifyContent: 'end'}">
      <Button
          severity="contrast"
          raised
          outlined
          :disabled="serviceName === '' && !isNameValid()"
          icon="pi pi-hammer"
          label="Create"
          :onclick="createConfig"
      />
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  gap: 1em;

  padding: 0;

  flex-direction: column;

  width: 100%;
  height: 100%;
}


</style>
