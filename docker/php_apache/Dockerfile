FROM php:8.1-apache

ARG NODE_VERSION=16
ARG GID
ARG UID

COPY ./php.ini /usr/local/etc/php/
COPY ./000-default.conf /etc/apache2/sites-enabled/

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY --from=composer:2.2.4 /usr/bin/composer /usr/local/bin/composer

RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
RUN apt-get install -y nodejs \
    && npm install --location=global npm \
    # && apt-get install -y yarn \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mv /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled
RUN /bin/sh -c a2enmod rewrite

RUN groupadd -g ${GID} docker
RUN useradd -u ${UID} docker --no-user-group -g ${GID} -ms /bin/bash

USER ${UID}