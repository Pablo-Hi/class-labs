import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore("songs", () => {
  const mySongs = reactive ([])

  const addSong = (newSong) => mySongs.push(newSong);

  const emptySongsArray = () => (mySongs = []);

  return { mySongs, addSong, emptySongsArray }
});


