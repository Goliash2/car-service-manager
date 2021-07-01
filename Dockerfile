FROM node:12 as build

WORKDIR /srv/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:1.17.8-alpine

WORKDIR /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/*

COPY nginx/nginx-server.conf /etc/nginx/conf.d/

COPY --from=build /srv/app/dist ./
