FROM node:16-alpine as builder
WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

ARG API_URL
ENV API_URL $API_URL
ARG PUBLIC_GITHUB_USERNAME
ENV PUBLIC_GITHUB_USERNAME $GITHUB_USERNAME

COPY ./ .
RUN npm run build

FROM node:16-alpine as runner
WORKDIR /usr/app

COPY package.json ./
COPY --from=builder /usr/app/build ./

ENV NODE_ENV production

ARG API_URL
ENV API_URL $API_URL
ARG PUBLIC_GITHUB_USERNAME
ENV PUBLIC_GITHUB_USERNAME $GITHUB_USERNAME

EXPOSE 3000
CMD ["node", "index.js"]