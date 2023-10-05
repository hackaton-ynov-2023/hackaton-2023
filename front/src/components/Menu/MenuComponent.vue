<template>
    <div class="bottom-left-button" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  
    <!-- Ajoutez le menu ici -->
    <div v-if="isMenuOpen" class="menu">
      <!-- Flèche de retour en haut à droite -->
      <img
        src="@/assets/arrow.png"
        alt="Flèche de retour"
        class="arrow-icon"
        @click="toggleMenu"
      />
  
      <!-- Contenu du menu -->
      <div class="menu-item">Mes signalements</div>
      <div class="menu-item">Signaler</div>
      <img src="@/assets/profil.png" alt="Profile" class="profil-icon"/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false, // État du menu
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Inversez l'état du menu lors du clic sur le bouton
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles du bouton */
  .bottom-left-button {
    position: absolute;
    left: 5%;
    bottom: 7%;
    width: 50px;
    height: 50px;
    background-color: #FFE787;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    padding: 5px;
    z-index: 2;
  }
  
  .bar {
    width: 40px;
    height: 4px;
    background-color: #000000;
    border-radius: 3px;
  }
  
  /* Styles du menu */
  .menu {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #FFE787;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
    z-index: 3;
    font: small-caps bold 24px/1 sans-serif;
  }
  
  .menu-item {
    margin: 10px;
    cursor: pointer;
  }

  .arrow-icon {
  position: absolute;
  top: 10px; 
  right: 24px;
  width: 100px; 
  height: 100px; 
  cursor: pointer;
}

.profil-icon{
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 100px;
    height: 100;
    cursor: pointer;
}
  
  </style>