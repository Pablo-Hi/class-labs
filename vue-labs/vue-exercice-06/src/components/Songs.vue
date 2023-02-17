<script setup>
import { useSongStore } from "../stores/songs";
import { ref, reactive, computed } from "vue";
</script>

<template>
  <h1>Hello</h1>
  <div v-for="(song, index) in mySongs" :key="index">
    <p v-if="mySongs.length === 0">Todavía no hay cancioines en la estore</p>
    <p v-else>{{ song }}</p>
    <input v-model="addSong" type="text" />
    <button @click="addSong">Añadir canción</button>
  </div>
</template>

<style scoped></style>
