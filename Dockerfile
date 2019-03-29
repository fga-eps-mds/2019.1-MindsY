FROM mindsy/angular:latest

COPY mindsy /mindsy
WORKDIR /mindsy

RUN npm install

CMD ng serve

EXPOSE 4000
