# Étape 1 : Build de l’application avec Vite
FROM node:18 as build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json .
COPY package-lock.json .

# Installation des dépendances
RUN npm install --legacy-peer-deps

# Installations supplémentaires (tu veux les garder)
RUN npm install --save-dev @types/react @types/react-dom @types/three
RUN npm install @react-oauth/google@latest
RUN npm install styled-components
RUN npm install react-router-hash-link
RUN npm install framer-motion

# Copier le reste du projet
COPY . .

# Build de l’application
RUN npm run build

# Étape 2 : Serveur de production avec Nginx
FROM nginx:alpine

# Copier le résultat du build dans le dossier de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port de production (nginx)
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
