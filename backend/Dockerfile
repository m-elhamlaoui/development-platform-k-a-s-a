# Étape 1 : Compilation    
FROM maven:3.9-eclipse-temurin-17 as build    
WORKDIR /app    
COPY . .    
# Exécuter les tests pendant la construction    
RUN mvn test    
# Puis construire le package    
RUN mvn package -DskipTests  
    
# Étape 2 : Image finale avec Maven inclus    
FROM maven:3.9-eclipse-temurin-17    
WORKDIR /app    
COPY --from=build /app/target/*.jar app.jar    
COPY --from=build /app/src ./src    
COPY --from=build /app/pom.xml .    
EXPOSE 8080    
ENTRYPOINT ["java", "-jar", "app.jar"]