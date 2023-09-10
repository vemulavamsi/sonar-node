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
        nodejs "NodeJs 20.6.1"
    }
    stages {
        stage ('remove npm package'){
            steps{
                sh "rm -rf package-lock.json"
                sh "npm uninstall -g global-package"
            }
        }
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install'
            }
        }
        stage('sonar'){
            steps{
                sh 'npm run sonar'
            }
        }
/*
        stage('NPM:Config') {
            steps{
                script {
                    withCredentials([usernamePassword(credentialsId: 'nexustoken01', passwordVariable: 'Pycube123$', usernameVariable: 'vamsi_vemula')]) {   
                        sh '''
                            set +x
                            # Make an API call to Nexus to get the authentication token
                            token=\$(curl -s -k -X POST -u \$nexustoken01:\$Pycube123$ http://100.26.159.217:8081/service/rest/v1/security/token)
                            echo "//http://100.26.159.217:8081/repository/sonarQube-nodeJS/:_authToken=\$token" >> .npmrc
                        '''
                    }
                }
            }
        }
        stage('UploadArtifcatsintoNexus'){
            steps{
            sh "npm publish"
            }
        } 
        */
    }
}


