pipeline {
    agent any
    tools { nodejs "NodeJS" }
    environment {
        PROJECT_NAME = "project-name"
        SONAR_SCANNER ="path-to-sonar-scanner"
        PUBLISH_PATH="path-to-publish-folder"
    }
    stages {
        stage('Checkout') {
            steps {
                "Checkout project from repository"
            }
        }
        stage('Restore Packages') {
            steps {
                sh "npm install"
            }
        }
        stage('Test Coverage') {
            steps {
                sh "npm run coverage"
                sh "${SONAR_SCANNER}"
            }
        }
        stage('Publish') {
            steps {
                sh "npm run build && npm run publish"
            }
        }
    }
}
