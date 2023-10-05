# Utilisez une image Node.js LTS en tant qu'image de base
FROM node:lts as build-stage

# Définissez le répertoire de travail
WORKDIR /

# Copiez le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tout le reste du code source
COPY front/ ./ 

# Exposez le port sur lequel le serveur Vue.js s'exécute 
EXPOSE 5173

# Commande pour démarrer l'application Vue.js 
CMD ["npm", "run", "dev"]
