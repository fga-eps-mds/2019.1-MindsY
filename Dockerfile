    
FROM node:9.11.2-slim as node
WORKDIR /app
COPY mindsy/package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY /mindsy /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /app/dist/mindsy /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
