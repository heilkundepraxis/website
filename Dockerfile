FROM node:20-alpine as builder

ENV NODE_ENV=production
ARG BUILD_HASH
ENV BUILD_HASH=$BUILD_HASH
ARG GA_ID
ENV GA_ID=$GA_ID

WORKDIR /build
COPY package*.json ./
RUN npm i --production=false
COPY . .
RUN npm run build:ssr

FROM keymetrics/pm2:18-alpine as runtime

WORKDIR /usr/share/www
COPY --from=builder /build/dist/ssr ./
COPY --from=builder /build/node_modules ./node_modules/
RUN npm prune --production
EXPOSE 3000

CMD ["pm2-runtime", "start", "index.js"]
