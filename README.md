# Harmonica Ear Training Application

It consists of web and backend modules

Web module is a react application

Backend module is a spring-boot application



React app created with below command

```
npx create-react-app harmonica-ear-training-web
```

To work with react application

```
cd harmonica-ear-training-web
npm start
```

For Development environment the proxy is setup from react:

this starts react application at 

for dev: http://localhost:3000


React app is bundled in spring-boot application 

To build production use below command

```
mvn install -Pprod

cd harmonica-ear-training-backend

mvn spring-boot:run

```
For deploying on AWS Elastic Beanstalk, port needs to be configured with 5000

for Prod: http://localhost:5000


The jar can then be deployed in AWS Elastic Beanstalk

Elastic Beanstalk is a PaaS offering from AWS

We can upload the spring-boot app and get it up in minutes.


The screenshots can be seen under screenshots_aws folder

the application can be opened from :

http://harmonicaeartraining-env.qvp343kmiz.us-east-1.elasticbeanstalk.com/







      
      
