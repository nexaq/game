FROM node:15

WORKDIR /var/www

COPY ./ /var/www/

RUN npm install
RUN npm run build:dev:vendors
