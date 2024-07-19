FROM node:20.15.1
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install && npm cache clean --force
COPY . .
CMD [ "node", "index.js" ]