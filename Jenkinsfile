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
                deleteDir()  
                checkout scm  
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
                        timeout 120 bash -c 'until docker compose exec -T postgres pg_isready -U postgres; do  
                            sleep 5  
                        done'  
                    '''  
                      
                    sh 'docker compose logs postgres'  
                }  
            }  
        }  
          
        stage('Run Tests') {  
            steps {  
                script {  
                    try {  
                        sh '''  
                            timeout 120 bash -c "until docker compose exec -T postgres pg_isready -U postgres; do sleep 5; done"  
                        '''  
                        sh '''  
                            timeout 180 bash -c 'until [ "$(docker compose ps postgres --format json | jq -r ".[0].Health")" = "healthy" ]; do  
                                sleep 10  
                            done'  
                        '''  
                          
                        sh 'docker compose run --rm backend-tests'  
                    } catch (Exception e) {  
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
                            sh """  
                                docker build -f backend/Dockerfile -t ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} ./backend  
                                docker tag ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER} ${DOCKER_HUB_REPO}-backend:latest  
                            """  
                        }  
                    }  
                }  
                stage('Build Frontend') {  
                    steps {  
                        script {  
                            sh """  
                                docker build -f frontend/Dockerfile -t ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} ./frontend  
                                docker tag ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER} ${DOCKER_HUB_REPO}-frontend:latest  
                            """  
                        }  
                    }  
                }  
            }  
        }  
          
        stage('Security Scan') {  
            steps {  
                script {  
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
                    sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'  
                      
                    sh """  
                        docker push ${DOCKER_HUB_REPO}-backend:${BUILD_NUMBER}  
                        docker push ${DOCKER_HUB_REPO}-backend:latest  
                        docker push ${DOCKER_HUB_REPO}-frontend:${BUILD_NUMBER}  
                        docker push ${DOCKER_HUB_REPO}-frontend:latest  
                    """  
                }  
            }  
        }  
          
        stage('Deploy to Staging') {  
            steps {  
                script {  
                    sh 'docker compose -f docker-compose.prod.yml down || true'  
                      
                    sh """  
                        docker pull ${DOCKER_HUB_REPO}-backend:latest  
                        docker pull ${DOCKER_HUB_REPO}-frontend:latest  
                    """  
                      
                    sh 'docker compose -f docker-compose.prod.yml up -d'  
                      
                    sh 'sleep 45'  
                    sh 'docker compose -f docker-compose.prod.yml ps'  
                }  
            }  
        }  
          
        stage('Health Check') {  
            steps {  
                script {  
                    sh """  
                        timeout 120 bash -c 'until curl -f http://localhost:8080/actuator/health 2>/dev/null; do  
                            sleep 10  
                        done'  
                    """  
                      
                    sh """  
                        timeout 120 bash -c 'until curl -f http://localhost:3000 2>/dev/null; do  
                            sleep 10  
                        done'  
                    """  
                }  
            }  
        }  
    }  
      
    post {  
        always {  
            script {  
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