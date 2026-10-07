// CI for the portfolio site (chris-park-1004.github.io).
//
// Role: build verification + granular GitHub PR checks ONLY.
// Deployment to GitHub Pages stays with GitHub Actions (.github/workflows/deploy.yml).
// Jenkins is a quality gate, not a deployer.
//
// Conventions mirror the Jenkins-Test-Pipeline: per-stage publishChecks
// (IN_PROGRESS -> SUCCESS/FAILURE) reported to the PR via the Checks API.
//
// One-time Jenkins setup:
//   1. NodeJS plugin: register a Node 24 install (24.15.0) matching `tools { nodejs }` below.
//   2. The GitHub App installation must include this repository.
//   3. Add this repo as a Multibranch Pipeline job (GitHub App credentials).
//   4. Adjust the agent label + NodeJS tool name to match your environment.

pipeline {
    agent { label 'windows-agent' }          // ← match your agent's label

    tools {
        nodejs 'NodeJS-24'                    // ← Node 24.15.0; match your Jenkins NodeJS tool name
    }

    options {
        timestamps()
        timeout(time: 10, unit: 'MINUTES')
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    environment {
        BUILD_NAME = "Site-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Info') {
            steps {
                publishChecks(
                    name: 'jenkins/checkout',
                    status: 'IN_PROGRESS',
                    summary: 'Gathering build info...'
                )

                echo "=== Build Info ==="
                echo "Build: ${env.BUILD_NUMBER}"
                echo "Branch: ${env.BRANCH_NAME}"
                echo "Commit: ${env.GIT_COMMIT}"

                bat 'node --version'
                bat 'npm --version'

                publishChecks(
                    name: 'jenkins/checkout',
                    conclusion: 'SUCCESS',
                    summary: 'Checkout completed',
                    text: "Build ${env.BUILD_NUMBER} on ${env.BRANCH_NAME}\nCommit: ${env.GIT_COMMIT?.take(7)}"
                )
            }
        }

        stage('Install') {
            steps {
                publishChecks(
                    name: 'jenkins/install',
                    status: 'IN_PROGRESS',
                    summary: 'Installing dependencies...'
                )

                script {
                    try {
                        bat 'npm ci'
                        bat 'npm ci --prefix redesign'
                        publishChecks(
                            name: 'jenkins/install',
                            conclusion: 'SUCCESS',
                            summary: 'Dependencies installed',
                            text: 'Root and React dependencies installed from lockfiles'
                        )
                    } catch (e) {
                        publishChecks(
                            name: 'jenkins/install',
                            conclusion: 'FAILURE',
                            summary: 'npm ci failed',
                            text: "Error: ${e.message}"
                        )
                        throw e
                    }
                }
            }
        }

        stage('Build') {
            steps {
                publishChecks(
                    name: 'jenkins/build',
                    status: 'IN_PROGRESS',
                    summary: 'Building React home and existing detail pages...'
                )

                script {
                    try {
                        bat 'npm run build'
                        publishChecks(
                            name: 'jenkins/build',
                            conclusion: 'SUCCESS',
                            summary: 'Build succeeded',
                            text: 'React home typechecked and prerendered; 19 existing pages preserved in dist/'
                        )
                    } catch (e) {
                        publishChecks(
                            name: 'jenkins/build',
                            conclusion: 'FAILURE',
                            summary: 'Build failed',
                            text: "Error: ${e.message}"
                        )
                        throw e
                    }
                }
            }
        }

        stage('Verify Output') {
            steps {
                publishChecks(
                    name: 'jenkins/verify',
                    status: 'IN_PROGRESS',
                    summary: 'Verifying build output...'
                )

                script {
                    try {
                        // Fail fast if the entry page is missing
                        bat 'if not exist dist\\index.html exit 1'

                        // Count generated HTML pages for the check summary
                        def pages = bat(
                            script: '@dir /b /s dist\\*.html | find /c ".html"',
                            returnStdout: true
                        ).trim().readLines()[-1].trim()

                        publishChecks(
                            name: 'jenkins/verify',
                            conclusion: 'SUCCESS',
                            summary: 'Output verified',
                            text: """
## Build Output
| Check            | Result    |
|------------------|-----------|
| dist/index.html  | present   |
| HTML pages built | ${pages}  |
""".trim()
                        )
                    } catch (e) {
                        publishChecks(
                            name: 'jenkins/verify',
                            conclusion: 'FAILURE',
                            summary: 'Output verification failed',
                            text: "Error: ${e.message}"
                        )
                        throw e
                    }
                }
            }
        }
    }

    post {
        success {
            echo '=== CI succeeded — deploy handled by GitHub Actions ==='
        }
        failure {
            echo '=== CI failed ==='
        }
        always {
            echo "Final result: ${currentBuild.currentResult}"
        }
    }
}
