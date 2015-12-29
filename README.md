# php-meesa
PHP MySQL API and ReactJS front-end example app

##to run via docker:

docker build -t php-meesa .
docker run -it -p <host port>:8080 -v <host absolute path to repo>:/var/app/ php-meesa

##via PHP CLI:

php -S 0.0.0.0:<port> router.php

##via npm with default port 8080:
npm start

#You need to set your database url and credentials in the connect function inside api/routes.php like so:
$url = <url to database>;
$user = <user>;
$password = <password>;

###you can use the pre-compiled bundle.js file or compile it yourself:

##install JS dependencies:
npm install

##compile ES6 modules:
npm run watch