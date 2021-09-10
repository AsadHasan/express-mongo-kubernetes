FROM registry.hub.docker.com/library/node:14.17.6
WORKDIR /app
COPY . .
RUN npm ci
ENTRYPOINT [ "npm", "start" ]
