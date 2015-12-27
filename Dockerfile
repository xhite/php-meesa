FROM php:5.6-cli

ENV APP_USER=app APP_PATH=/var/app

RUN useradd -Ms /bin/bash $APP_USER && mkdir -p $APP_PATH

WORKDIR $APP_PATH

USER $APP_USER

EXPOSE 8080

CMD ["php","-S", "0.0.0.0:8080", "router.php"]