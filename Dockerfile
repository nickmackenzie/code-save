FROM node:14
COPY . .
EXPOSE 9393
CMD [ "node", "app.js" ]