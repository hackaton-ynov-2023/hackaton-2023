// Importation des modules nécessaires
const express = require('express');
const mysql = require('mysql2');

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

  // Route pour ajouter un report
  app.post('/reports', (req, res) => {
    // récupérer les données du formulaire ici depuis req.body
    const { statut, description, date, idLamp, idUser } = req.body;

    // Requête SQL pour insérer des données dans la table "report"
    const query = `INSERT INTO report (statut, description, date, idLamp, idUser) VALUES (?, ?, ?, ?, ?)`;

    conn.query(query, [statut, description, date, idLamp, idUser], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion dans la table "report" :', err);
        res.status(500).json({ error: 'Erreur serveur' });
        return;
      }
      // Réponse JSON indiquant que l'insertion a réussi
      res.json({ message: 'Données insérées avec succès dans la table "report"' });
    });
  });


  // Démarrage du serveur
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
});
