FROM node:14
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]