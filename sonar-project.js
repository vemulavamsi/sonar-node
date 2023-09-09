const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://34.207.63.16:9000/',
	options: {
		'sonar.projectDescription': 'This is a Node JS application',
		'sonar.projectName': 'practice',
		'sonar.projectKey': 'practice',
		'sonar.login': 'c5eb2945ac0659ae624c5729610871e34397535a',
		//'sonar.login': 'admin',
		//'sonar.password': 'admin',
		'sonar.projectVersion': '1.0',
		'sonar.language': 'js',
		'sonar.sourceEncoding': 'UTF-8',
		'sonar.sources': '.',
		//'sonar.tests': 'specs',
		//'sonar.inclusions' : 'src/**'
	},
}, () => { });
