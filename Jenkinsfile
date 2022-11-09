pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/fandinho1/CypressCucumberAndJenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key bf7ccc1b-765d-41d3-8b6f-e6b22a0a5c74 --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/fandinho1/CypressCucumberAndJenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key bf7ccc1b-765d-41d3-8b6f-e6b22a0a5c74 --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/fandinho1/CypressCucumberAndJenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key bf7ccc1b-765d-41d3-8b6f-e6b22a0a5c74 --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git url: 'https://github.com/fandinho1/CypressCucumberAndJenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key bf7ccc1b-765d-41d3-8b6f-e6b22a0a5c74 --parallel'
                    
                    }
                }
            }
             
        }

    }
            
}