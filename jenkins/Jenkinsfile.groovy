 pipeline {
	agent any
	stages {
		stage('Build'){
		steps{
            println "Building proj"
			}
		}
		
		stage('Deploy'){
		steps{
		    
		    println "Deploying it to ${params.serverType} server"
			}
		}		
	}
 }
 
