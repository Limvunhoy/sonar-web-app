// sonar-scanner.js

const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://202.79.29.108:9000', // or your SonarQube server URL
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': 'sonar-web-app',
      // 'sonar.organization': 'your_organization', // only for SonarCloud
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': '**/*.js,**/*.jsx',
      'sonar.test.inclusions': '**/*.test.js,**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    },
  },
  () => process.exit()
);
