FROM registry.hub.docker.com/library/node:14.17.6 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run compile

FROM registry.hub.docker.com/library/node:14.17.6 as release
USER root
WORKDIR /app
COPY --from=builder /app/build/ build/
COPY --from=builder /app/node_modules/ node_modules/
COPY --from=builder /app/.env.defaults .
EXPOSE 3000
ENTRYPOINT [ "node", "build/src/index.js" ]
