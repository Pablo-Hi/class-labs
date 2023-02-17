<script setup>
import { watch, ref } from "vue";
import yesOrNot from "../components/yesOrNot.json";

let answer = ref("");
let response = ref("");

watch(answer, async (newAnswer) => {
  console.log("El watcher está mirando");
  if (answer.value.toLowerCase() === "yes") {
    console.log("PATATA");
    response.value = yesOrNot[0].answer + " U rock!";
  } else if (answer.value.toLowerCase() === "no") {
    response.value = yesOrNot[1].answer + " The hell...";
  } else {
    response.value = "";
  }
});
</script>

<template>
  <h1>¿Te gusta la pizza?</h1>
  <br />
  <input v-model="answer" class="input" type="text" />
  <div>{{ response }}</div>
</template>

<style scoped>
.input {
  height: 50px;
}
</style>
