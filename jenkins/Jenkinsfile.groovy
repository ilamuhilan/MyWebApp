 pipeline {
	agent any
	stages {
		stage('GIT'){
			steps{
			    println "Checking out"
			}
		}
		
		stage('Unit Test'){
		steps{
		    println "Running Tests"
			}
		}
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
 
