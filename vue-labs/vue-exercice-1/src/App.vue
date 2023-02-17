<template>
  <h1 :id="firstId">Papa Roach</h1>
  <h2 :class="[firstClassTrue && 'firstColor', !firstClassTrue && 'disapear']">
    Green Garbage
  </h2>
  <h3 :style="[fistStyle, secondStyle, thirdStyle]">HS5</h3>
  <h4 :class="[firstBoolean && 'red-class', secondBoolean && 'border-or-not']">
    Emerica
  </h4>
</template>

<script setup>
import { ref, reactive } from "vue";

const firstId = ref({
  color: "green",
  textDecoration: "underline",
});

const firstClassTrue = ref(true);

const fistStyle = reactive({
  color: "purple",
});

const secondStyle = reactive({
  fontSize: "2",
});

const thirdStyle = reactive({
  textDecoration: "underline",
});

const firstBoolean = ref(true);
const secondBoolean = ref(true);
</script>

<style scoped>
.firstColor {
  color: green;
}

.disapear {
  display: none;
}

.red-class {
  color: red;
}

.border-or-not {
  border: 2px solid Red;
}
</style>
