FROM node:20-alpine

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

USER node

CMD ["npm", "run", "dev"]

EXPOSE 3000