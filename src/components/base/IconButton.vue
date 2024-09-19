<script setup lang="ts">

defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  size: {
    type: String,
    default: '4em',
  },
  isSelected: {
    type: Boolean,
    default: false,
  }
})

</script>

<template>
  <div class="Button">
    <div class="ButtonItem">
      <img :src="iconPath" alt="؟"/>
    </div>
    <div class="ButtonItem">
      <label v-if="label"> {{ label }}</label>
    </div>
  </div>
</template>

<style scoped>

.Button {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1em;

  padding: 1em;
}

img {
  width: v-bind(size);
  height: v-bind(size);
  flex: 1;
}

label {
  flex: 1;

  display: flex;
  justify-content: center;
  overflow: scroll;
  text-overflow: ellipsis;
}

.ButtonItem {

  display: flex;
  justify-content: center;
}

.ButtonItem + .ButtonItem {
  border-top: 3px solid black;
}

</style>
