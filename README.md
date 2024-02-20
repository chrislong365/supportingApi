# Supporting api

Supporting api utalizing serverless framework to creat and deploy an AWS API

## Table of Contents

- [Installation](#installation)
- [Deployment](#Deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the necessary dependencies, run the following command:
npm install

## Deployment

There are three options. 
1. if you want to manually deploy everyting to a particular stage
	run the following command `serverless deploy --stage {dev|prod}`
2. if you want to deploy just a particular function
	run the following command `serverless deploy --function {FUNCTION_NAME}
3. CI/CD is can be set up through the serverless framework portal to grab changes made to a predefined branch and automaticallly build and push them to a preselected distribution

## License

Information about the license of your project.
