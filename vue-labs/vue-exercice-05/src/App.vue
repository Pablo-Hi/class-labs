<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, reactive, computed } from "vue";
// let firstName = ref("Pablo");
// let lastName = ref("Peña");

let myName = computed(() => {
  return `${firstName.value}  ${lastName.value}`;
});

let myWatchList = reactive([
  {
    tittle: "The last of Us";
    year: 2023,
    whereToWatch: "HBO",
  },
  {
    tittle: "Vikings",
    year: 2019,
    whereToWatch: "Netflix",
  },
  {
    tittle: "Silicon Valley",
    year: 2020,
    whereToWatch: "Amazon Prime Video"
  }
])
</script>

<template>
  <header>
    <!-- <h1>{{ myName }}</h1>
    <form action="">
      <input v-model="firstName" type="text" placeholder="Name" />
      <input v-model="lastName" type="text" placeholder="Last Name" />
    </form> -->
    <h1></h1>
    <h2></h2>
  </header>
</template>

<style scoped>
h1 {
  color: white;
}
</style>
