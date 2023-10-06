// Importation des modules nécessaires
const mysql = require('mysql');

// Fonction pour récupérer les informations de la table "lamp"
const getLamps = async () => {
  // Exécution de la requête SQL
  const results = await mysql.query('SELECT * FROM lamp');

  // Renvoi des résultats
  return results;
};

// Exportation de la fonction getLamps()
module.exports = { getLamps };