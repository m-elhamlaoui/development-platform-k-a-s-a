pipeline {  
    agent any  
      
    triggers {  
        githubPush()  
        pollSCM('H/5 * * * *')  
    }  
      
    environment {  
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')  
        DOCKER_HUB_REPO = 'asma99/astromap'  
        COMPOSE_PROJECT_NAME = 'astromap'  
    }  
      
    stages {  
        stage('Checkout') {  
            steps {  
                deleteDir() // Nettoie complètement le workspace à chaque build  
                checkout scm  
                echo "Code récupéré depuis le repository"  
            }  
        }  
          
        stage('Prepare Environment') {  
            steps {  
                script {  
                    sh 'docker compose down --remove-orphans || true'  
                    sh 'docker system prune -f || true'  
                }  
            }  
        }  
          
        stage('Start Database') {  
            steps {  
                script {  
                    sh 'docker compose up -d postgres'  
                      
                    sh '''  
                        echo "Attente de PostgreSQL..."  
                        timeout 120 bash -c 'until docker compose exec -T postgres pg_isready -U postgres; do  
                            echo "PostgreSQL n\\'est pas encore prêt - attente..."  
                            sleep 5  
                        done'  
                    '''  
                      
                    sh 'docker compose logs postgres'  
                    echo "PostgreSQL est prêt ✅"  
                }  
            }  
        }  
          
        stage('Run Tests') {  
            steps {  
                script {  
                    try {  
                        echo "Attente que PostgreSQL soit en bonne santé..."  
                        sh '''  
                            timeout 180 bash -c 'until [ "$(docker compose ps postgres --format json | jq -r ".[0].Health")" = "healthy" ]; do  
                                echo "PostgreSQL health check en cours..."  
                                sleep 10  
                            done'  
                        '''  
                          
                        echo "Exécution des tests backend..."  
                        sh 'docker compose run --rm backend-tests'  
                        echo "Tests réussis ✅"  
                    } catch (Exception e) {  
                        echo "Échec des tests ❌"  
                        sh 'docker compose logs backend-tests'  
                        sh 'docker compose logs postgres'  
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
                                docker build -f backend/Dockerfile -t ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} ./backend  
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
                                docker build -f frontend/Dockerfile -t ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} ./frontend  
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
                    sh """  
                        docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\  
                        aquasec/trivy:latest image --exit-code 0 --severity HIGH,CRITICAL \\  
                        ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} || true  
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
                      
                    sh 'docker compose -f docker-compose.prod.yml down || true'  
                      
                    sh """  
                        docker pull ${DOCKER_HUB_REPO}-backend:latest  
                        docker pull ${DOCKER_HUB_REPO}-frontend:latest  
                    """  
                      
                    sh 'docker compose -f docker-compose.prod.yml up -d'  
                      
                    sh 'sleep 45'  
                    sh 'docker compose -f docker-compose.prod.yml ps'  
                      
                    echo "Déploiement terminé ✅"  
                }  
            }  
        }  
          
        stage('Health Check') {  
            steps {  
                script {  
                    echo "Vérification de la santé des services..."  
                      
                    sh """  
                        timeout 120 bash -c 'until curl -f http://localhost:8080/actuator/health 2>/dev/null; do  
                            echo "En attente du backend..."  
                            sleep 10  
                        done'  
                    """  
                      
                    sh """  
                        timeout 120 bash -c 'until curl -f http://localhost:3000 2>/dev/null; do  
                            echo "En attente du frontend..."  
                            sleep 10  
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
                  
                sh 'docker compose -f docker-compose.prod.yml logs > docker-compose.log || true'  
                archiveArtifacts artifacts: 'docker-compose.log', allowEmptyArchive: true  
                  
                sh 'docker image prune -f || true'  
            }  
        }  
          
        success {  
            echo "🎉 Pipeline réussie ! AstroMap déployé avec succès."  
        }  
          
        failure {  
            echo "❌ Pipeline échouée. Vérifiez les logs."  
            sh 'docker compose -f docker-compose.prod.yml logs || true'  
        }  
          
        unstable {  
            echo "⚠️ Pipeline instable. Certains tests ont échoué."  
        }  
    }  
}