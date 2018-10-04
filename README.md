# Hacktoberfest '18 Leaderboard

Simple react web app to show the progress of users participating in Hacktoberfest 2018.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project requires [Node.js](https://github.com/nodejs/node). Run `npm install` to install all dependencies. To execute the web application run `npm run start`.

### SSL local setup

Until we get a way to setup local GraphQL envs the app is using an AWS instance for those queries.
This instance has CORS enabled and will only respond to requests coming from the domain `https://hacktoberfest18.sovtech.org/`. 
To get up and running with the app, you can setup a local proxy masking that domain by:
1. Adding `hacktoberfest18.sovtech.org` to your hosts file
2. Installing nginx and adding this to your a enabled site:
```
server {
	listen 443 ssl;
	server_name hacktoberfest18.sovtech.org;
	ssl_certificate /etc/nginx/fake.crt;
	ssl_certificate_key /etc/nginx/fake.key;
	location / {
		proxy_pass http://127.0.0.1:3000;
	}
}
```
3. Generate those fake certificates:
```
cd /etc/nginx
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout fake.key -out fake.crt
``` 
4. Make sure to restart nginx and refresh your browser hard to get the local version of the running app.

## Contributors

* **Andre Hofmeister** - *Updated README.md with basic information* - [padme-amidala](https://github.com/padme-amidala/)

## Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SovTech/hacktoberfest-leaderboard)
