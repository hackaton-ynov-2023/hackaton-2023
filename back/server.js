const express = require('express');
const app = express();

// ...

// Utilisation du routeur Express pour la route


// ...

// Lancez le serveur Express
const port = 3000; // Port sur lequel le serveur écoutera
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});