pipeline {  
    agent any  
      
    environment {  
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')  
        DOCKER_HUB_REPO = 'asma99/astromap'  
        COMPOSE_PROJECT_NAME = 'astromap'  
    }  
      
    stages {  
        stage('Checkout') {  
            steps {  
                checkout scm  
                echo "Code récupéré depuis le repository"  
            }  
        }  
          
        stage('Prepare Environment') {  
            steps {  
                script {  
                    // Nettoyer les conteneurs existants  
                    sh 'docker-compose down --remove-orphans || true'  
                    sh 'docker system prune -f || true'  
                }  
            }  
        }  
          
        stage('Start Database') {  
            steps {  
                script {  
                    // Démarrer PostgreSQL en premier  
                    sh 'docker-compose up -d postgres'  
                    // Attendre que la base soit prête  
                    sh 'sleep 15'  
                    sh 'docker-compose logs postgres'  
                }  
            }  
        }  
          
        stage('Run Tests') {  
            steps {  
                script {  
                    try {  
                        echo "Exécution des tests backend..."  
                        sh 'docker-compose run --rm backend-tests'  
                        echo "Tests réussis ✅"  
                    } catch (Exception e) {  
                        echo "Échec des tests ❌"  
                        sh 'docker-compose logs backend-tests'  
                        throw e  
                    }  
                }  
            }  
        }  
          
        stage('Build Images') {  
            parallel {  
                stage('Build Backend') {  
                    steps {  
                        script {  
                            echo "Construction de l'image backend..."  
                            sh """  
                                docker build -t ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} ./backend  
                                docker tag ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} ${DOCKER_HUB_REPO}-backend:latest  
                            """  
                            echo "Image backend construite ✅"  
                        }  
                    }  
                }  
                stage('Build Frontend') {  
                    steps {  
                        script {  
                            echo "Construction de l'image frontend..."  
                            sh """  
                                docker build -t ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} ./frontend  
                                docker tag ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} ${DOCKER_HUB_REPO}-frontend:latest  
                            """  
                            echo "Image frontend construite ✅"  
                        }  
                    }  
                }  
            }  
        }  
          
        stage('Security Scan') {  
            steps {  
                script {  
                    echo "Scan de sécurité des images..."  
                    sh """  
                        docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\  
                        aquasec/trivy:latest image --exit-code 0 --severity HIGH,CRITICAL \\  
                        ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} || true  
                    """  
                }  
            }  
        }  
          
        stage('Push to Docker Hub') {  
            steps {  
                script {  
                    echo "Connexion à Docker Hub..."  
                    sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'  
                      
                    echo "Push des images vers Docker Hub..."  
                    sh """  
                        docker push ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER}  
                        docker push ${DOCKER_HUB_REPO}-backend:latest  
                        docker push ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER}  
                        docker push ${DOCKER_HUB_REPO}-frontend:latest  
                    """  
                    echo "Images poussées vers Docker Hub ✅"  
                }  
            }  
        }  
          
        stage('Deploy to Staging') {  
            steps {  
                script {  
                    echo "Déploiement en staging..."  
                      
                    // Arrêter les services existants  
                    sh 'docker-compose down'  
                      
                    // Mettre à jour les images  
                    sh """  
                        docker pull ${DOCKER_HUB_REPO}-backend:latest  
                        docker pull ${DOCKER_HUB_REPO}-frontend:latest  
                    """  
                      
                    // Redémarrer avec les nouvelles images  
                    sh 'docker-compose up -d'  
                      
                    // Vérifier que les services sont en cours d'exécution  
                    sh 'sleep 30'  
                    sh 'docker-compose ps'  
                      
                    echo "Déploiement terminé ✅"  
                }  
            }  
        }  
          
        stage('Health Check') {  
            steps {  
                script {  
                    echo "Vérification de la santé des services..."  
                      
                    // Vérifier le backend  
                    sh """  
                        timeout 60 bash -c 'until curl -f http://localhost:8080/actuator/health 2>/dev/null; do   
                            echo "En attente du backend..."  
                            sleep 5  
                        done'  
                    """  
                      
                    // Vérifier le frontend  
                    sh """  
                        timeout 60 bash -c 'until curl -f http://localhost:3000 2>/dev/null; do   
                            echo "En attente du frontend..."  
                            sleep 5  
                        done'  
                    """  
                      
                    echo "Services opérationnels ✅"  
                }  
            }  
        }  
    }  
      
    post {  
        always {  
            script {  
                echo "Nettoyage post-build..."  
                sh 'docker logout || true'  
                  
                // Archiver les logs  
                sh 'docker-compose logs > docker-compose.log || true'  
                archiveArtifacts artifacts: 'docker-compose.log', allowEmptyArchive: true  
                  
                // Nettoyer les images de build  
                sh 'docker image prune -f || true'  
            }  
        }  
          
        success {  
            echo "🎉 Pipeline réussie ! AstroMap déployé avec succès."  
        }  
          
        failure {  
            echo "❌ Pipeline échouée. Vérifiez les logs."  
            sh 'docker-compose logs'  
        }  
          
        unstable {  
            echo "⚠️ Pipeline instable. Certains tests ont échoué."  
        }  
    }  
}
