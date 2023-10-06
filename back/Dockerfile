# Utilisez une image Node.js LTS en tant qu'image de base
FROM node:lts

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tout le reste du code source
COPY . .

# Exposez le port sur lequel le serveur Node.js s'exécute
EXPOSE 3000

# Commande pour démarrer le serveur Node.js
CMD ["npm", "start"]
