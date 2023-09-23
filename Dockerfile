FROM node:20-slim
LABEL authors="tieb"

WORKDIR user/src/app
COPY server/package.json ./
COPY server/src ./src
COPY server/build ./build
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "start"]