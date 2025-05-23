## 🛠️ Outils DevOps utilisés

Dans le cadre de ce projet, nous mettons en place une infrastructure DevOps pour faciliter le développement, les tests et le déploiement de l’application **AstroMap**.

Voici les outils utilisés :

- **Docker** : Conteneurisation des services (backend, frontend, base de données)
- **Docker Compose** : Orchestration multi-conteneurs pour lancer l’application complète avec une seule commande
- **Jenkins** : Intégration Continue (CI) pour automatiser les tests et la construction des images Docker
- **BlueOcean (Jenkins UI)** : Interface moderne de Jenkins pour la gestion visuelle des pipelines CI/CD
- **Docker Hub** : Dépôt distant utilisé pour héberger et partager les images Docker générées automatiquement par Jenkins lors des builds
