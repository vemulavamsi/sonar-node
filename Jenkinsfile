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
    
}