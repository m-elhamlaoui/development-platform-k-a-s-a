FROM  node:18



WORKDIR /app


COPY package.json .
COPY package-lock.json .


RUN npm install

RUN npm install --save-dev @types/react @types/react-dom @types/three

RUN npm install @react-oauth/google@latest


COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173


CMD ["npm", "run", "dev"]
