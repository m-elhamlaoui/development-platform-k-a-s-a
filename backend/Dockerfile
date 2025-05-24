# Étape 1 : Build avec Maven  
FROM maven:3.9.4-eclipse-temurin-17 as builder  
  
WORKDIR /app  
  
# Copier les fichiers Maven  
COPY pom.xml .  
COPY src ./src  
  
# Build de l'application  
RUN mvn clean package -DskipTests  
  
# Étape 2 : Runtime avec OpenJDK  
FROM openjdk:17-jdk-slim  
  
WORKDIR /app  
  
# Installer curl pour les health checks  
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*  
  
# Copier le JAR depuis l'étape de build  
COPY --from=builder /app/target/*.jar app.jar  
  
# Exposer le port  
EXPOSE 8080  
  
# Commande de démarrage  
CMD ["java", "-jar", "app.jar"]
