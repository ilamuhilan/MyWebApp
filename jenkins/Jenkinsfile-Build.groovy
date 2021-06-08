final ACCOUNT = env.ACCOUNT ?: '730186024834'
final GIT_REPO = env.GIT_REPO ?: 'https://github.com/Ranjithdss15/MyWebApp.git'
final APPNAME = env.APPNAME ?: 'helloworld-node'

final ECR_REGISTRY = "${ACCOUNT}.dkr.ecr.us-east-1.amazonaws.com/${APPNAME}"
final GIT_CREDENTIALS_ID = "1737ad6b-0599-4841-acc1-c42083ca226e"

def gitBranch
def version
node {
    stage('Preparation') {
        timestamps {
            print 'Prepping workspace for build...'
        }
//         def gitBranch
//         def version
        deleteDir()

        gitBranch = env.BRANCH_NAME ?: 'master'

        git credentialsId: GIT_CREDENTIALS_ID, url: GIT_REPO, branch: gitBranch

        version = currentBuild.number

        timestamps {
            print "Starting build of version ${version} using branch ${gitBranch}"
        }
    }


        stage('Publish New Version') {
            timestamps {
                print 'Building and publishing our container...'
            }
        

            sh "docker build -t ${APPNAME} ."
            sh "docker tag ${APPNAME}:latest ${ECR_REGISTRY}:latest"
            
            sh """
            aws ecr get-login --region us-east-1 --no-include-email | xargs xargs
            docker push ${ECR_REGISTRY}:latest
            
            """
            sh "docker tag ${ECR_REGISTRY}:latest ${ECR_REGISTRY}:${version}"
            
            sh """
            docker push ${ECR_REGISTRY}:${version}
            """
            sh "docker rmi ${APPNAME} ${ECR_REGISTRY}:${version}"
            
           timestamps {
                print "Container pushed successfully to ${ECR_REGISTRY}"
            }
        }
}
