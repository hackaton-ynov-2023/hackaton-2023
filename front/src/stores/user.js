import { defineStore } from "pinia";

export const store = defineStore({
  state: {
    user: null,
  },
  actions: {
    // Connexion
    async login(credentials) {
      // Appel d'une API pour authentifier l'utilisateur
      const response = await fetch("http/users/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      const user = await response.json();

      // Mise à jour du state
      this.state.user = user;
    },

    // Déconnexion
    async logout() {
      // Mise à jour du state
      this.state.user = null;
    },
  },
});
