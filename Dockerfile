FROM registry.hub.docker.com/library/node:14.17.6 as builder
WORKDIR /app
COPY ./src/ ./src/
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./.env.defaults ./.env.defaults
ENV NODE_ENV=production
RUN npm install && npm run compile

FROM registry.hub.docker.com/library/node:14.17.6 as release
WORKDIR /app
COPY --from=builder /app/build/ build/
COPY --from=builder /app/node_modules/ node_modules/
COPY --from=builder /app/.env.defaults .
ENTRYPOINT [ "node", "build/src/index.js" ]
