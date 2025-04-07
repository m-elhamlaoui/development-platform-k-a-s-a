FROM  node:18



WORKDIR /app


COPY package.json .
COPY package-lock.json .


RUN npm install

COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173


CMD ["npm", "run", "dev"]
