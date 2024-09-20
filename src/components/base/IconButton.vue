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
      <div>
        <img :src="iconPath" alt="؟"/>
      </div>
    </div>
    <div class="ButtonItem">
      <div>
        <label v-if="label">
          {{ label }}
        </label>
      </div>
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

.ButtonItem {
  width: 100%;
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: v-bind(size);
  flex: 1;
}

label {
  width: 100%;

  flex: 1;

  display: flex;
  justify-content: center;
  overflow: scroll;
  text-overflow: ellipsis;
}

.ButtonItem + .ButtonItem {
  border-top: 3px solid black;
}

</style>
