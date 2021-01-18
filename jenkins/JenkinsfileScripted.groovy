node("master"){

// stage("GIT") {
   // checkout scm
 // }
  stage("Build"){
  println "Building your proj"
  }
  
  stage("Deploy"){
  println "Deploying"
  }
  
}
