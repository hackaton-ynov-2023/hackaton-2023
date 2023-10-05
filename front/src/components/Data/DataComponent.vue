<template>
    <div>
      <h1>Liste des éléments</h1>
      <ul>
      </ul>
    </div>
  </template>
  
<!--   <script>
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
          this.jsonData.forEach(item =>{
            console.log(item.geo_point_2d)
          })
        })
        .catch(error => {
          console.error("Erreur lors du chargement des données JSON", error);
        });
    },

  };
  </script> -->