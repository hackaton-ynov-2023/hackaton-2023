<template>
    <div>
      <h1>Liste des éléments</h1>
      <ul>
        <li v-for="item in jsonData" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jsonData: [], // Variable pour stocker les données JSON
      };
    },
    mounted() {
      // Effectuer une requête HTTP pour charger les données JSON
      fetch("/eclairage-public.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur réseau");
          }
          return response.json();
        })
        .then(data => {
          this.jsonData = data; // Stocker les données dans la variable
          console.log(this.jsonData[0])
        })
        .catch(error => {
          console.error("Erreur lors du chargement des données JSON", error);
        });
    },
  };
  </script>