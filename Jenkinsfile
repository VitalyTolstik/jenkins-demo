pipeline {
    agent any

    stages {
        stage('1') {
            steps {
                echo 'Hello World! I love you!'
            }
        }
        stage('2') {
            steps {
                echo '123'
            }
        }
        stage('sleep 5') {
            steps {
                sleep 5
                echo 'sleep 5 done!!'
                echo 'multi-steps are working'
            }
        }
    }
}