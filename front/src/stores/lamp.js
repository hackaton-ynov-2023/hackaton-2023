import { defineStore } from "pinia";

export const useLampStore = defineStore("lamp", {
  state: () => ({ 
    lamps: []
  }),
  actions: {
    async loadLamps() {
      const response = await fetch("http://localhost:3000/lamps");
      console.log("lampes du store", response)
      const lampes = await response.json();
      this.state.lamps = lampes;
    }, 

  },
})