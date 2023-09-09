/*
node
{
 tools{
    nodejs "Node.js 16.19.1"
 }
 stage("Build")
 {
 nodejs(nodeJSInstallationName: 'nodejs 16.19.1') {
        sh 'npm install'
    }
 }  
 
  stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs 16.19.1') {
        sh 'npm run sonar'
    }
      
        } 
		
    // stage('UploadintoNexus') {
    //    nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
    //       sh 'npm publish'
    //   }
      
    //       }	
 
 stage('RunNodeJsApp')
 {
 //sh "./scripts/run.sh"
 nodejs(nodeJSInstallationName: 'nodejs 15.2.1') {
        sh 'npm start &'
    }
}    
    
}*/

pipeline {
    agent any

    tools {
        nodejs "Node.js 16.19.1"
    }

    stages {
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install'
            }
        }
        // Other stages
        stage('sonar'){
            steps{
                sh 'npm run sonar'
            }
        }
         stage('Login to npm') {
            steps {
                script {
                    // Run npm login and provide credentials
                        sh "npm install"
                    }

                }
            }
        }
        // stage('nexus'){
        //     steps{
        //        sh 'npm publish'
        //         //nexusPublish version: "${env.BUILD_NUMBER}", serverId:"nexus-server", repository:"maven-releases", pattern:'target
        //     }
        // }
    }


