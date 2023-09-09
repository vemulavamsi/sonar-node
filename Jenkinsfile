node
{
 
 stage("Build")
 {
 nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
        sh 'npm install'
    }
 }  
 
  stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
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
 nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
        sh 'npm start &'
    }
}    
    
}
