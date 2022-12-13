FROM node:16-alpine as builder
WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

ARG API_URL
ENV API_URL $API_URL
ARG GITHUB_USERNAME
ENV PUBLIC_GITHUB_USERNAME $GITHUB_USERNAME
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN $GITHUB_TOKEN
ARG UMAMI_ID=""
ENV PUBLIC_UMAMI_ID $UMAMI_ID
ARG UMAMI_URL=""
ENV PUBLIC_UMAMI_URL $UMAMI_URL

COPY ./ .
RUN npm run build

FROM node:16-alpine as runner
WORKDIR /usr/app

COPY package.json ./
COPY --from=builder /usr/app/build ./

ENV NODE_ENV production

EXPOSE 3000
CMD ["node", "index.js"]