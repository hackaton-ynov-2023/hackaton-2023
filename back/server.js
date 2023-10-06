// Importation des modules nécessaires
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
// Création du serveur Express
const app = express();

// Connexion à la base de données
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'pl_db',
  user: 'root',
  password: 'mysecretpassword',
});

// Connexion à la base de données
conn.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Route pour récupérer les informations de la table "lamp"
  app.get('/lamps', (req, res) => {
    // Requête SQL pour récupérer les informations de la table "lampes"
    const query = 'SELECT * FROM lampes';

    conn.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la requête SQL :', err);
        res.status(500).json({ error: 'Erreur serveur' });
        return;
      }

      // Envoyer les résultats en tant que réponse JSON
      res.json(results);
    });
  });

  // Démarrage du serveur
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
});
